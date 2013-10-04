/**
 * A helper class to manage media queries in javascript
 */
(function(){
  var ResponsiveResize = function() {
    this.queries = {};
    this.currentQuery = null;
  };

  ResponsiveResize.prototype.register = function(selector, enter_cb, exit_cb) {
    var self = this;
    if(!this.queries[selector]) {
      if (window.matchMedia) {
        this.queries[selector] = {
          'query': window.matchMedia(selector)
        };

        this.queries[selector].query.addListener(function(mediaQuery) {
          self.process(mediaQuery, enter_cb, exit_cb);
        });

        // Fire right away
        self.process(this.queries[selector].query, enter_cb, exit_cb);
      }
    }
  };

  ResponsiveResize.prototype.process = function(mediaQuery, enter_cb, exit_cb) {
    if(mediaQuery.matches) {
      this.currentQuery = mediaQuery.media;
      enter_cb.apply(mediaQuery);
    } else {
      if(this.currentQuery === mediaQuery.media) {
        exit_cb.apply(mediaQuery);
      }
    }
  };

  window.ResponsiveResize = new ResponsiveResize();
}());
