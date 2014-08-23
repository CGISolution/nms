module.exports = function (grunt)
{
    grunt.initConfig({
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
    grunt.loadNpmTasks('grunt-bump');

    grunt.registerTask('default', ['clean', 'concat', 'less:dev', 'less:min']);
};
