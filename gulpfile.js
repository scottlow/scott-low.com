var gulp = require('gulp');
var webserver = require('gulp-server-livereload');
var less = require('gulp-less');
var path = require('path');

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('less', function () {
  return gulp.src('./assets/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('./assets/less/**/*.less', ['less'])
});

gulp.task('default', ['webserver', 'less', 'watch']);