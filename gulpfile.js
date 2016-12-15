var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('html', function(){
  gulp.src('src/html/**/*.html')
      .pipe(gulp.dest('dist/'));
});

gulp.task('js', function(){
  gulp.src('src/js/**/*.js')
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/'));
});

gulp.task('default', ['html', 'js']);
