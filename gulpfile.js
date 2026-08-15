const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const rtlcss = require('rtlcss');
const cssnano = require('cssnano');

const config = {
    sassPath: './resources/sass',
    npmDir: './node_modules'
};

// Copy JS files to public folder
gulp.task('js', function () {
    return gulp.src([
            config.npmDir + '/bootstrap/dist/js/bootstrap.bundle.min.js',
            config.npmDir + '/@popperjs/core/dist/umd/popper.min.js'
        ])
        .pipe(gulp.dest('./public/js'));
});

// Build RTL CSS from Bootstrap 5 SCSS
gulp.task('css', function () {
    var processors = [
        rtlcss,
        cssnano
    ];
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sass({
            includePaths: [config.npmDir]
        }).on('error', notify.onError(function (error) {
            return error.message;
        })))
        .pipe(postcss(processors))
        .pipe(rename({
            suffix: '-rtl.min'
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
        .pipe(notify('CSS compiled and converted to RTL successfully!'));
});

// BrowserSync task
gulp.task('serve', function (done) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    done();
});

// Watch task
gulp.task('watch', gulp.series('css', 'serve', function watching() {
    gulp.watch(config.sassPath + '/**/*.scss', gulp.series('css'));
    gulp.watch('./*.html').on('change', browserSync.reload);
}));

// Default task
gulp.task('default', gulp.series('css', 'js'));
