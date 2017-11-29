# phina-boilerplate

ゲーム開発で使われるエンジン、`phina.js`で開発するためのボイラープレートです。

## Quick Start

基準となるHTMLは`dist/index.html`、jsは`src/js/index.js`です。

```
$ npm install
```

### For development

開発時にはHTTPサーバを起動します。ポートや設定を行いたい場合、`fuse.js`から変更してください。

```
$ npm run dev
```

### For production

ES5に変換し、BABELで圧縮します。

```
$ npm run build
```

## License

MIT License