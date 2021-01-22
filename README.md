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

`Ctrl+H` for "My App" and "app-boilerplate"

Nice http-server also uses the 404.html

## To do

  * axe the safari pinned tab svg?
  * try using an svg favicon? what would windows do with that?

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
android-chrome-192x192.png | yes          | chrome "create shortcut", edge pin/install, android homescreen/splash screen
android-chrome-maskable-192x192.png | no  | android homescreen, never splashscreen
android-chrome-512x512.png | yes          | android splash screen
apple-touch-icon.png       | no           | iPhone, also firefox pinned site
favicon.ico                | yes          | desktop browser tab, IE11 Add site to Apps, start menu, chrome/edge recents, drag to desktop
safari-pinned-tab.svg      | yes          | old? safari
screenshot.jpg             | no           | social

## Notes

.ico export = highest quality, compressed png

  * filesize seems like main reason to specify 32 png instead
  * 32 png makes drag to desktop look dumb
  * 32 png will be scaled to 16 in several browsers if specified

when you click install, Android Chrome picks the maskable icon, but then if you
are not signed into chrome, it won't install and falls back to  just add a
shortcut to your homescreen, which will be the maskable icon but on a white circle

I also suspect chrome picks the maskable icon without even knowing whether your
launcher uses masks, and then it will just be a hard square

app switcher also shows maskable icon not masked, but on a theme_color circle. On
my phone anyway, for firefox and chrome. recommend theme_color match maskable

splash screen will not pick maskable but might pick 192. so 192 and 512 should
be identical, and you are supposed to make background_color the same as your
webpage background color

Did not include 512 maskable then, because theoretically only the splash screen
needs an icon that large, and it would never pick maskable


refresh windows 10 icons with Start > Run > `ie4uinit.exe -show`

https://stackoverflow.com/questions/30824294/mobile-favicons/30839701

https://github.com/gokulkrishh/awesome-meta-and-manifest

https://github.com/h5bp/html5-boilerplate

https://realfavicongenerator.net/favicon_compatibility

https://material.io/design/iconography/product-icons.html#grid-and-keyline-shapes

https://developer.android.com/google-play/resources/icon-design-specifications

https://material.io/design/platform-guidance/android-icons.html#keyline-shapes

https://www.w3.org/TR/appmanifest/#icon-masks

https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs

https://github.com/GoogleChromeLabs/airhorn/blob/master/app/manifest.json

https://github.com/GoogleChrome/lighthouse/issues/291
