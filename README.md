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
index.html        | title - works
robots.txt        | search console
sitemap.xml       | search console
worker.js         | needed to be installable
404.html          | netlify

## Images

file                       | transparency | usage
---                        | ---          | ---
android-chrome-192x192.png | yes          | chrome "create shortcut", edge pin/install (margin is good in chrome app screen, is not the best in start menu)
android-chrome-maskable-192x192.png | no  | android homescreen
android-chrome-512x512.png | yes          | android splash screen
apple-touch-icon.png       | no           | iPhone, also firefox pinned site
favicon.ico                | yes          | browser tab, IE11 Add site to Apps, chrome/edge recents, drag to desktop
safari-pinned-tab.svg      | yes          | safari
screenshot.jpg             | no           | social

## Notes

.ico export = highest quality, compressed png

48 ico could have some margin

  * filesize seems like main reason to specify 32 png instead
  * 32 png makes drag to desktop look dumb
  * 32 png will be scaled to 16 in several browsers if specified

do you need maskable 192? or is 512 the one

android uses 512 everywhere with maskable any, amybe you need seperate 512's

should manifest include everything?

how to clear windows 10 icon cache?

https://stackoverflow.com/questions/30824294/mobile-favicons/30839701

https://github.com/gokulkrishh/awesome-meta-and-manifest

https://github.com/h5bp/html5-boilerplate

https://realfavicongenerator.net/favicon_compatibility

https://material.io/design/iconography/product-icons.html#grid-and-keyline-shapes

https://developer.android.com/google-play/resources/icon-design-specifications

https://material.io/design/platform-guidance/android-icons.html#keyline-shapes
