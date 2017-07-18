
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  postcss = require('gulp-postcss'),
  sourcemaps = require('gulp-sourcemaps')

gulp.task('css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('stylelint'),
      require('precss'),
      require('autoprefixer'),
      require('cssnano')
    ]))
    .pipe(gulp.dest('./static/css/'))
})

gulp.task('watch', ['css'], function() {
  gulp.watch('./src/css/**/*.css', ['css'])
    .on('error', gutil.log)
})
