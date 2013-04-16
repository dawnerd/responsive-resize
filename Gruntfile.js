var grunt = require('grunt');

module.exports = function() {
  grunt.initConfig({
    jshint: {
      main: {
        src: ['./lib/*.js']
      }
    },
    uglify: {
      'index.js': ['./lib/responsive-resize.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify']);
};