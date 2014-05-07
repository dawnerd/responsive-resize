/**
 * A helper class to manage media queries in javascript
 */
(function(){
  var ResponsiveResize = function() {
    this.queries = {};
    this.currentQuery = null;
  };

  ResponsiveResize.prototype.register = function(options) {
//selector, enter_cb, exit_cb
    var self = this;
    if(!this.queries[options.name]) {
      if (window.matchMedia) {
        this.queries[options.name] = {
          'query': window.matchMedia(options.selector)
        };

        this.queries[options.name].query.addListener(function(mediaQuery) {
          self.process(mediaQuery, options.enter, options.exit);
        });

        // Fire right away
        self.process(this.queries[options.name].query, options.enter, options.exit);
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
