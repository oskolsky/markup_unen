$(function() {

  forms.init();
  
  // yepnope.js
  // http://yepnopejs.com/
  // ----------------------------------------------------------------------------------------------------
  yepnope([

    // jquery.placeholder.js
    // https://github.com/serby/jquery.placeholder.js
    // ----------------------------------------------------------------------------------------------------
    {
      test: Modernizr.input.placeholder,
      nope: "/js/polyfill/vendor/jquery.placeholder.js",
      callback: function(url, result, key) {
        if (result === false) {
          $("input, textarea").placeholder();
        }
      }
    }

  ]);

});