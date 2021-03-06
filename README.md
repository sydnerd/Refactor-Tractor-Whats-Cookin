<h1 align="center">๐ # Refactor Tractor - What's Cookin' - B ๐</h1>

<p align="center"><img src="https://media.giphy.com/media/muBOgkSI6Rv9B7cPEA/giphy.gif"></p>

## Deployed Page
[See here](http://sydnerd.github.io/Refactor-Tractor-Whats-Cookin)

1. [Contributors](https://github.com/sydnerd/Refactor-Tractor-Whats-Cookin/blob/main/README.md#contributors)
2. [Project Overview](https://github.com/sydnerd/Refactor-Tractor-Whats-Cookin/blob/main/README.md#project-overview)
4. [How to use the app](https://github.com/sydnerd/Refactor-Tractor-Whats-Cookin/blob/main/README.md#how-to-use-the-app)
5. [Technologies Used](https://github.com/sydnerd/Refactor-Tractor-Whats-Cookin/blob/main/README.md#technologies-used)


## Contributors
- [๐ฅ Nichele Dunn ๐ฅ](https://github.com/nichelicorn)
- [๐ฎ Sydney Bear ๐ฎ](https://github.com/sydnerd)
- [๐ฅ Kat White ๐ฅ](https://github.com/k-atwhite)
- [๐ฑ Erica Spitz ๐ฑ](https://github.com/e-spitz)

## Project Overview
### Learning Goals
- Build on top of pre-existing code that you did not write and navigate someone elseโs codebase
- Make network requests to API endpoints to retrieve and manipulate data
- Refactor pre-existing code and use inheritance to DRY up repetitive logic
- Ensure your app is following best practices for accessibility
- Leverage Sass to DRY up your CSS
- Incorporate Webpack to streamline your workflow process

This was our first experience being presented with someone else's code and nearly complete website. To be honest, we were frozen in place at first. Seeing all the different ways someone could address logical issues - ways that we had not tried ourselves or even ever considered ourselvs - was a real challenge. We only began to genunilty understand this codeblock after jumping in.

1. We began by setting up our APIs - so that we could ensure we had the correct data path as we began refactoring.
2. We then built out the class structure to be clearer and more robest.
3. We then starting putting out all the small fires - functionality that didn't work, unresponsive aspects, missing images, etc. These small fires often led to larger fires in the javascript logc.
4. With a working and functional website in place, we startd to untangle the javaScript that manipulatd the DOM from the logical functions.
5. With a cleaner and more scalable file structure - we started to address accessibilty issues - ensuring that our website passed WAVE and Lighthouse.
6. And finally! We implemented Sassy CSS.


## How to use the app
### Server Setup
To set up the data server, run the following commands:  
`git clone git@github.com:turingschool/What-s-cookin--starter-kit-API.git`  
`cd What-s-cookin--starter-kit-API`  
`npm install`  
`npm start`  
Then, open a new Terminal window

### App Setup
In the new Terminal window, run the following commands:  
`git clone git@github.com:k-atwhite/whats-cookin.git`  
`cd whats-cookin`  
`npm install`  
`npm start`  
Open a window in your web browser of choice, and visit `localhost:8080` to view the app!

## Load Recipes
<p><img src="https://media.giphy.com/media/54bjynlR23L00WxPdA/giphy.gif"</p>

## Search Bar
<p><img src="https://media.giphy.com/media/Ve4l3EEar38nqGXqkD/giphy.gif"</p>
 
## Add to My Recipes
 <p><img src="https://media.giphy.com/media/M5hobgks8qDj6D8mpE/giphy.gif"</p>

## Filter by Tags
  <p><img src="https://media.giphy.com/media/NMaHvlHu2k6mSjgZ0P/giphy.gif"</p>
   
## Filter Pantry
<p><img src="https://media.giphy.com/media/J8kckTdj8S0rTGMb55/giphy.gif"</p>
 
## Add or Remove Ingredient from Pantry
<p><img src="https://media.giphy.com/media/rFGkqdw86BmfULi3he/giphy.gif"</p>

## Technologies Used
* HTML
* CSS
* JavaScript
* Webpack
* ESLint


## To Do List

1. Understand Webpack bundler
2. Include All Functionality from Original Spec
3. Fetch data from local server
4. Identify redundant code in your classes and opportunities for DRYing it up
5. Refactor **within** your classes to create dynamic methods that use arguments/parameters for changing their behavior
6. Refactor **across** your classes to create a parent class that others inherit methods from as appropriate **OR** be able to defend your choice for *not* using inheritance.
7. DOM manipulation should be organized into its own `domUpdates.js` file. And then will be called in the scripts.js
8. Refactor the existing CSS into Sass. Making use of:
   1. variables for colors, fonts, etc.
   2. nesting, when/where appropriate
   3. at least **two** mixins or extends
9. Accessibility
   1. Your app should be **fully responsive** from mobile devices - tablets - laptops
   2. You must be able to tab through your app and use it without a mouse
   3. Your app must still be usuable when tested with a colorblind extension
   4. You must score as close to 100% as possible with the โLighthouse Accessibility Auditโ. Be prepared to explain any accessibility audits your application is failing.
   5. Your HTML must be written semantically and ARIA tags should be used (*ONLY if needed / appropriate*)
10. Testing
    1. Initial values of class properties need tests
    2. Class methods need tests for all expected outcomes
    3. Any methods that modify class properties should be test
    4. **You are not required to test your fetch calls**
