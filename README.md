# gen-import-maps-json
JSON Generator for [import-maps](https://github.com/WICG/import-maps) from package.json and package-lock.json

# install

```
$ npm install -D gen-import-maps-json
```

# run

```
$ ./node_modules/.bin/gen-import-maps-json
```

# examples

package.json has followings dependencies:

```json
{
  "dependencies": {
    "@polymer/iron-demo-helpers": "^3.0.2",
    "@polymer/iron-icon": "^3.0.1",
    "@polymer/iron-icons": "^3.0.1",
    "@webcomponents/webcomponentsjs": "^2.2.1",
    "lit-element": "^2.0.1"
  },
  "devDependencies": {
    "polymer-cli": "^1.9.2"
  }
}
```

will output `import-maps` JSON to console.

```json
{
  "imports": {
    "@polymer/font-roboto/": "/node_modules/@polymer/font-roboto/",
    "@polymer/font-roboto": "/node_modules/@polymer/font-roboto/roboto.js",
    "@polymer/iron-demo-helpers/": "/node_modules/@polymer/iron-demo-helpers/",
    "@polymer/iron-flex-layout/": "/node_modules/@polymer/iron-flex-layout/",
    "@polymer/iron-icon/": "/node_modules/@polymer/iron-icon/",
    "@polymer/iron-icon": "/node_modules/@polymer/iron-icon/iron-icon.js",
    "@polymer/iron-icons/": "/node_modules/@polymer/iron-icons/",
    "@polymer/iron-icons": "/node_modules/@polymer/iron-icons/iron-icons.js",
    "@polymer/iron-iconset-svg/": "/node_modules/@polymer/iron-iconset-svg/",
    "@polymer/iron-iconset-svg": "/node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js",
    "@polymer/iron-location/": "/node_modules/@polymer/iron-location/",
    "@polymer/iron-meta/": "/node_modules/@polymer/iron-meta/",
    "@polymer/iron-meta": "/node_modules/@polymer/iron-meta/iron-meta.js",
    "@polymer/marked-element/": "/node_modules/@polymer/marked-element/",
    "@polymer/marked-element": "/node_modules/@polymer/marked-element/marked-element.js",
    "@polymer/polymer/": "/node_modules/@polymer/polymer/",
    "@polymer/polymer": "/node_modules/@polymer/polymer/polymer-element.js",
    "@polymer/prism-element/": "/node_modules/@polymer/prism-element/",
    "@webcomponents/shadycss/": "/node_modules/@webcomponents/shadycss/",
    "@webcomponents/shadycss": "/node_modules/@webcomponents/shadycss/shadycss.min.js",
    "clipboard/": "/node_modules/clipboard/",
    "clipboard": "/node_modules/clipboard/dist/clipboard.js",
    "delegate/": "/node_modules/delegate/",
    "delegate": "/node_modules/delegate/src/delegate.js",
    "good-listener/": "/node_modules/good-listener/",
    "good-listener": "/node_modules/good-listener/src/listen.js",
    "lit-element/": "/node_modules/lit-element/",
    "lit-element": "/node_modules/lit-element/lit-element.js",
    "lit-html/": "/node_modules/lit-html/",
    "lit-html": "/node_modules/lit-html/lit-html.js",
    "marked/": "/node_modules/marked/",
    "marked": "/node_modules/marked/lib/marked.js",
    "prismjs/": "/node_modules/prismjs/",
    "prismjs": "/node_modules/prismjs/prism.js",
    "select/": "/node_modules/select/",
    "select": "/node_modules/select/src/select.js",
    "tiny-emitter/": "/node_modules/tiny-emitter/",
    "tiny-emitter": "/node_modules/tiny-emitter/index.js"
  }
}
```
