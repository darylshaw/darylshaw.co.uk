module.exports = function(grunt) {
  const mozjpeg = require('imagemin-mozjpeg');
  const pngquant = require('imagemin-pngquant');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
    }
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);
};
