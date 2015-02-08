'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: 'dist/',
            lib : 'lib/',
            tmp : 'tmp/'
        },

        copy: {
            tmp: {
                expand: true,
                cwd   : 'tmp/src/',
                src   : '**/*.js',
                dest  : 'lib/'
            }
        },


        jshint: {
            all: ['src/*.js']
        },

        uglify: {
            options: {
                preserveComments       : 'some',
                sourceMap              : true,
                sourceMapRoot          : 'relate/',
                sourceMapIncludeSources: true
            },

            dist: {
                options: {
                    sourceMapIn: 'dist/relate.js.map'
                },

                files: {
                    'dist/relate.min.js': [
                        'dist/relate.js'
                    ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    base: '.',
                    port: 9999
                }
            }
        },

        '6to5': {
            options: {
                // sourceMap: true,
                modules: 'common'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: 'dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-6to5');

    grunt.registerTask('compile', [
        'jshint',
        '6to5:build',
        // 'uglify',
        // 'copy:tmp'
    ]);

    grunt.registerTask('default', [
        'clean',
        'compile'
    ]);
};