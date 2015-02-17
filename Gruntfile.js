module.exports = function (grunt) {
  grunt.initConfig({
    broccoli: {
      test: {
        dest: 'build',
        config: 'Brocfile.js',
        port: 3000
      }
    }
  });

  [
    "grunt-broccoli",
    "grunt-karma"
  ].forEach(function (task) {
        grunt.loadNpmTasks(task);
      });
};
