module.exports = function(grunt) {
  "use strict";
  grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
  grunt.registerTask("default", [
    "clean",
    "lint",
    "build"
  ]);

  //unit testing
  grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-test");
  grunt.registerTask("unit_and_integration_tests", ["test"]);
  grunt.config.merge({
    coverage_threshold: {
      statements: 0,
      branches: 100,
      functions: 0,
      lines: 0
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.config.merge({
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['webapp/**/*']
      }
    }
  });

  //documentation
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.config.merge({
    jsdoc: {
      dist: {
        src: ['README.md', 'webapp/**/*.js', 'webapp/**/*.xml'],
        options: {
          destination: 'doc'
        }
      }
    }
  });

  //test optimized version localy
  grunt.loadNpmTasks('grunt-connect-proxy');

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('dist-server', ["clean", "build", "configureProxies:resources", "connect:local_dist_server"]);

  //devserver with livereload (http://livereload.com/)
  grunt.registerTask('dev-server', ["configureProxies:resources", "connect:local_dev_server", "watch"]);

  var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
  var serveStatic = require('serve-static');

  grunt.config.merge({
    connect: {

      //distribution server
      local_dist_server: {
        options: {
          port: 1337,
          keepalive: true,
          open: true,
          middleware: function(connect) {
            return [
              proxySnippet,
              serveStatic("dist")
            ];
          }
        }
      },
      //developments server
      local_dev_server: {
        options: {
          port: 1337,
          open: true,
          livereload: true,
          middleware: function(connect) {
            return [
              proxySnippet,
              serveStatic("webapp")
            ];
          }
        }
      },
      //backend services
      resources: {
        proxies: [{
          context: "/resources",
          host: "sapui5.hana.ondemand.com",
          headers: {
            'host': 'sapui5.hana.ondemand.com' //needed for Akamai
          }
        }]
      }
    }
  });
};
