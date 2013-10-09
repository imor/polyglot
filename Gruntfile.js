'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                node: true
            },
            all: ['Gruntfile.js', 'lib/**/*.js', 'examples/**/*.js', 'test/**/*.js']
        },
        cafemocha: {
            testThis: {
                src: 'test/**/*.js',
                options: {
                    ui: 'tdd',
                    reporter: 'spec'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-cafe-mocha');

    grunt.registerTask('test', ['cafemocha']);
    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('default', ['jshint', 'test']);
};
