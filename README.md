# test-contentsdk: MJML editor block for SFMC Content Builder

> **Archived.** This project continues as [MjmlRender](https://github.com/matheswarwan/MjmlRender), which started from this code in April 2022 and has fixed the render and save issues described below. Use that one: it's live at https://mjmlrender.pages.dev.

A custom content block for Salesforce Marketing Cloud (SFMC) Content Builder. You write [MJML](https://mjml.io) in a code editor inside the block, click **Render**, and the block converts it to email HTML. The rendered HTML becomes the block's content in the email.

## What it does

- Gives you a CodeMirror editor (XML mode, line numbers) inside the block editor.
- Renders MJML to HTML in the browser with a bundled copy of the MJML library (`js/mjml.js`). No server call is made.
- Has two buttons that load sample MJML: **MJML Hello world** and **Starwars Template** (an example that pulls images from a third-party site).
- Adds a **Code Snippets** tab with read-only MJML examples for common tags: `mj-body`, `mj-include`, `mj-attribute`, `mj-accordion`, `mj-button`, `mj-carousel`, `mj-column`, `mj-divider`, `mj-hero`, `mj-image`, `mj-raw`, `mj-section`, `mj-social`, `mj-spacer`, `mj-table`, `mj-text`, `mj-wrapper`. Click a heading to show or hide its example.

## How it works

`index.html` creates the Block SDK with three tabs:

```js
new window.sfdc.BlockSDK({
  blockEditorWidth: 500,
  tabs: ["htmlblock", { name: "Code Snippets", key: "codeSnippets", url: ".../CodeSnippets.html" }, "stylingblock"]
});
```

On load it calls `sdk.getData()` and puts any saved `mjml` back into the editor. It also calls `sdk.getContent()` and, if there is no content, falls back to the saved `html`.

When you click **Render**:

1. The MJML text is converted with `mjml(text)`.
2. `sdk.setContent(html)` sets the rendered HTML as the block content.
3. `sdk.setData({ mjml, html })` stores both the MJML source and the HTML, so the block can be reopened and edited.

## Hosting

The block is a static site. It must be served over HTTPS so SFMC can load it in an iframe. Two ways are set up in the repo:

- **Node** (`Procfile`: `web: node index.js`): `index.js` is a small static file server. It serves files from the repo folder and listens on `process.env.PORT` or `8080`.
  ```sh
  npm start
  ```
- **PHP**: `index.php` just includes `index.html`. The empty `composer.json` lets a PHP host (for example the Heroku PHP buildpack) detect the app.

`package.json` lists `mjml` and `formidable` as dependencies, but the server code does not use them. Rendering happens in the browser.

**Hardcoded URL:** `index.html` points the Code Snippets tab to `https://test-contentsdk.herokuapp.com/CodeSnippets.html`. Change this to your own host before you deploy.

## Register it in SFMC

1. Host the files on an HTTPS URL.
2. In SFMC go to **Setup → Apps → Installed Packages**, create a package (or open an existing one) and add a component of type **Custom Content Block**.
3. Set the endpoint URL to your hosted `index.html` (or the site root).
4. The block then shows up in Content Builder under custom blocks.

## Project structure

- `index.html`: the block itself (editor, render logic, Block SDK calls).
- `CodeSnippets.html`: the Code Snippets tab. Loads its examples from `mjmldoc.js`.
- `mjmldoc.js`: arrays of MJML tag names, descriptions and example code.
- `mjmlAPIConfig.html`: an unused tab for saving MJML API username and password with `setData` (the tab is commented out in `index.html`). It also contains an unrelated AMPscript/SSJS test snippet.
- `MjmlCodeSnippets.html`: a rendered HTML version of the snippets page. Not referenced by the block.
- `blocksdk.js`: vendored copy of the SFMC Block SDK.
- `js/mjml.js`: browser build of MJML.
- `CodeMirror/`: vendored CodeMirror editor with XML, JavaScript and HTML modes.
- `slds/`: vendored Salesforce Lightning Design System CSS.
- `index.js`, `Procfile`, `package.json`: Node static server for Heroku-style hosting.
- `index.php`, `composer.json`: PHP hosting option.
- `icon.png`, `dragIcon.png`: block icons.

## Known limitations

- The block used to call the MJML HTTP API (`api.mjml.io`). That code is commented out, and rendering is now local only. The leftover API username/password handling is dead code and should be removed.
- There is an auto-render on typing (5 second debounce), but it listens to the original `<textarea>`, which CodeMirror replaces. Use the **Render** button.
- MJML errors from local rendering are not shown to the user. The error box is only filled by the old API code.
- The sample buttons store a placeholder in `html` until you click Render.
- Debug logging (`debug = true`) prints content to the browser console.
- Vendored libraries (CodeMirror, MJML, SLDS, Block SDK) are old copies and are not managed by a package manager.
- No tests.

## Ideas

- Show MJML validation errors from `mjml(text).errors` in the existing error box.
- Remove the unused API code, `mjmlAPIConfig.html` and `MjmlCodeSnippets.html`.
- Make the Code Snippets tab URL relative or configurable instead of hardcoded.
