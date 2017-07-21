'use strict';

// REVIEW: IIFE module pattern for creating local scope within the file, and
// handling data back out to a higher level of scope
(function(module) {

  var whatever = 'foo'; // only available inside this function

  function thisIsPrivate() {
    console.log('you can\'t see me');
  }
  function convertToAmPmString() {

  }

  // below is just an example of assigning methods to an object, and then handing that object out to the global scope
  let articleView = {}
  articleView.renderIndex = function() {
    console.log(whatever);
    thisIsPrivate();
    convertToAmPmString(13);
  }
  articleView.renderNew = function() {}
  articleView.renderArticleList = function() {}
  articleView.method4 = function() {}
  articleView.method5 = function() {}
  articleView.method6 = function() {}

  module.articleView = articleView

})(window)
