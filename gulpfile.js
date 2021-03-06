var gulp = require('gulp');
var webserver = require('gulp-server-livereload');
var less = require('gulp-less');
var path = require('path');

gulp.task('webserver', function() {
  gulp.src('./site')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      defaultFile: 'index.html',
      host: "0.0.0.0"
    }));
});

gulp.task('less', function () {
  return gulp.src('./site/assets/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .on('error', function(error){console.log(error.message)})
    .pipe(gulp.dest('./site/assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('./site/assets/less/**/*.less', ['less'])
});

gulp.task('default', ['webserver', 'less', 'watch']);