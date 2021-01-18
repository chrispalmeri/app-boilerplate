# app-boilerplate

  * git
  * Visual Studio Code
  * node.js
  * Netlify
  * NameCheap

`npm install`

`npm run local`

`npm run mock`

Everything goes in the root when deployed

`Ctrl+H` for "My App" and "my-app"

## Files

file              | usage
---               | ---
site.webmanifest  | needed for chrome
browserconfig.xml | IE
index.html        | title - works
robots.txt        | search console
sitemap.xml       | search console
worker.js         | needed to be installable
404.html          | netlify

## Images

file                       | usage
---                        | ---
android-chrome-192x192.png | chrome "create shortcut" not masked, edge pin/install
android-chrome-512x512.png | 
apple-touch-icon.png       | firefox pinned site
favicon.ico                | browser tab, IE11 Add site to Apps, chrome/edge recents, drag to desktop
mstile-150x150.png         | windows tablet?
safari-pinned-tab.svg      | 
screenshot.jpg             | social

## Notes

### icon

export = highest quality, compressed png

should have 24x24 also

filesize seems like main reason to specify 32 png

that makes drag to desktop look dumb

should manifest include everything?

seperate maskable android icon?

https://stackoverflow.com/questions/30824294/mobile-favicons/30839701

https://github.com/gokulkrishh/awesome-meta-and-manifest

https://github.com/h5bp/html5-boilerplate

https://realfavicongenerator.net/favicon_compatibility
