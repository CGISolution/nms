module.exports = function (grunt)
{
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'controllers/*.js', 'definitions/*.js', 'models/*.js', 'app/controllers/*.js', 'app/app.js', 'app/directives/*.js']
        },
        // CSS/LESS lint
        recess: {
            dist: {
                src: ['public/less/site.less']
            }
        },
        /**
         *  Usage: (Sarting with v0.0.1)
         *      grunt bump - v.0.02
         *      grunt bump:patch - v0.0.3
         *      grunt bump:minor - v0.1.0
         *      grunt bump:major - v1.0.0
         *      grunt bump:prerelease - v1.0.0-1
         *      grunt bump:git
         */
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: "Release v%VERSION%",
                commitFiles: ['package.json', 'bower.json'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: ''
            }
        },
        clean: {
            css: ['public/css/main.css', 'public/css/*.min.css', 'public/js/concat.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'bower_components/angular-bootstrap/ui-bootstrap.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                ],
                dest: 'public/js/concat.js'
            }
        },
        less: {
            dev: {
                options: {
                    paths: ['public/less', 'node_modules/bootstrap/less'],
                    compress: false
                },
                files: {
                    'public/css/main.css': 'public/less/main.less',
                }
            },
            min: {
                options: {
                    paths: ['public/less', 'node_modules/bootstrap/less'],
                    compress: true
                },
                files: {
                    'public/css/main.min.css': 'public/less/main.less',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-recess');

    grunt.registerTask('default', ['clean', 'jshint', 'recess:dist', 'concat', 'less:dev', 'less:min']);
    grunt.registerTask('debug', ['clean', 'jshint', 'recess:dist']);
};
