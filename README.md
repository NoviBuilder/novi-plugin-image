# novi-plugin-image
Novi Builder Plugin for changing images

## How to Install
You should follow several simple steps to intall this plugin:
* Copy the novi-plugin-image.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder 

## What you are able to do
* Change images

## Developer Settings
* querySelector — contains a css selector which defines the Plugin container.

## Usage
For use plugin your element must match the CSS selector of querySelector setting.

For example querySelector value is "img".
In this case you need to add element <img>:
```html
<img src="images/blank.png" alt="">
```