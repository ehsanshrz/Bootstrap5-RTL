# Bootstrap 5 RTL 🌟

RTL (Right-to-Left) Bootstrap 5 workflow with Gulp — supports Persian, Arabic, and other RTL languages.

Inspired by [Bootstrap4-RTL](https://github.com/mmdsharifi/Bootstrap4-RTL).

## Getting Started

1. `git clone https://github.com/ehsanshrz/Bootstrap5-RTL.git`
2. `cd Bootstrap5-RTL`
3. `npm install`
4. `gulp` — builds CSS and JS
5. `gulp watch` — watches for changes with BrowserSync live reload

## How It Works

- **Bootstrap 5 SCSS** is compiled via `gulp-sass`
- **rtlcss** (PostCSS plugin) converts the compiled CSS to RTL
- **cssnano** minifies the output
- Output is saved to `public/css/style-rtl.min.css`
- Bootstrap 5 JS bundle is copied to `public/js/`

## Install as npm package

```bash
npm install bootstrap5-rtl
```

## Features

- ✅ Bootstrap 5 (latest)
- ✅ Full RTL support via rtlcss
- ✅ Persian / Arabic font (Vazir)
- ✅ BrowserSync live reload
- ✅ Minified CSS output

## License

MIT