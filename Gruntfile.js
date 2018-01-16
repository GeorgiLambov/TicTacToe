module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        [
                            "babelify",
                            {
                                presets: ["es2015", "react"]
                            }
                        ]
                    ]
                },
                files: {
                    "./public/bundle.js": ["./src/js/Client.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./src/**/*.js"],
                tasks: ["browserify"]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true,
                    livereload: true,
                    base: {
                        path: "public/",
                        options: {
                            index: "index.html"
                        }
                    }
                }
            }
        },
        sass: {
            dist: {
                files: {
                    "public/style.css": "src/base.scss"
                }
            }
        },
        watch: {
            scripts: {
                files: "src/**/*.js",
                tasks: ["browserify"]
            },
            css: {
                files: "src/**/*.scss",
                tasks: ["sass"]
            },
            html: {
                files: "src/**/*.html",
                tasks: ["copy"]
            }
        },
        copy: {
            html: {
                expand: true,
                flatten: true,
                src: ["**/*.html"],
                cwd: "src/",
                dest: "public/",
                filter: "isFile"
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true,
                limit: 10
            },
            dev: {
                tasks: ["browserify", "connect", "watch"]
            }
        }
    });

    // Load the plugin's
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-sass");

    // Default task(s).
    grunt.registerTask("default", ["copy", "sass", "concurrent"]);
};
