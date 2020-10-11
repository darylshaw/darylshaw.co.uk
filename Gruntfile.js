module.exports = function(grunt) {
  const mozjpeg = require('imagemin-mozjpeg');
  const pngquant = require('imagemin-pngquant');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'assets/js/libs/*.js',
          'assets/js/main.js'
        ],
        dest: 'assets/js/build/production.js',
      }
    },
    uglify: {
      build: {
        src: 'assets/js/build/production.js',
        dest: 'assets/js/build/production.min.js'
      }
    },
    imagemin: {
      options: {
        use: [
          pngquant({quality: [0.5, 0.5]}),
          mozjpeg({quality: 50})
        ]
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/uploads/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/uploads/'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
};
