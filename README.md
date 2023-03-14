# Storyblok Monaco Editor

> Enable the wonderful world of the psycotics that think the editor in vscode is a good text editor for content.
A storyblok field plugin wrapper for https://microsoft.github.io/monaco-editor/

## Get started with local development
Check out my [TipTap Editor Field Plugin](https://github.com/SebbeJohansson/storyblok-custom-tiptap-plugin#get-started-with-local-development) for more in-depth guidance on how to develop field plugins locally.
Note: monaco editor only supports Node 16 or lower.

### Install all dependencies (while in the directory of the repository)
```
npm install
```
### Compile and hot-reload locally for development (while in the directory of the repository)
```
npm run dev
```
### Lints and fixes files
```
npm run lint
```

## Deploy to storyblok (required to start using the field in a block)
### Compile and minify the code
1. Run the build command in your terminal.
```
npm run build
```
2. You should now have a `dist/export.js` in your project.
3. Upload the newly created `dist/export.js` to a field plugin on storyblok.

### Rendering the content
Since this isn't a proper rich-text editor you will have to take some design decisions on how the editor should be rendered.
Options:
* Render it as html - https://vuejs.org/guide/essentials/template-syntax.html#raw-html
* Render it as markdown - https://github.com/markdown-it/markdown-it
* and many other wonderful ways to render stuff.

## Customize Monaco
You can turn on features and change config using the config object sent into the `monaco.editor.create` method.
Documentation - https://microsoft.github.io/monaco-editor/docs.html
Playground - https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-editor-hello-world

## Various other helpful links on how to make custom field plugins
https://github.com/SebbeJohansson/storyblok-custom-tiptap-plugin#get-started-with-local-development
https://www.storyblok.com/docs/plugins/introduction#local-development
https://www.storyblok.com/tp/react-field-type-plugin
https://markus.oberlehner.net/blog/building-a-custom-storyblok-field-type-plugin-with-vue/
