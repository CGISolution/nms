module.exports = function (grunt)
{
    grunt.initConfig({
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

    grunt.registerTask('default', ['clean', 'concat', 'less:dev', 'less:min']);
};
