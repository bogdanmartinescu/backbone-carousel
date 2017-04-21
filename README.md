# Backbone Carousel

Backbone carousel with Webpack, ES6 and Marionette

## Requirements


* build a carousel.  
* by default display 4 blocks.  
* navigation is made with next and previous buttons.  
* Next button should be disabled, if user is at the very end of the carousel.  
* Previous button should be disabled, if user is at the very beginning of carousel.  
* Clicking on next/previous buttons shows next/prev 4 carousel blocks accordingly.  
* The source of carousel block is endpoint on server that return following JSON:

`[{

title: &quot;First Block&quot;,

images: [url1, url2, url3]

},

{

title: “Second Block&quot;,

images: [url7, url8]

}`

## Getting started

* Install:
    * Inside this folder run: `npm install`
* Run:
    * `npm start` — starts project
    * `npm run build` - builds you project
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` and `app/styles/` to `public/`.
