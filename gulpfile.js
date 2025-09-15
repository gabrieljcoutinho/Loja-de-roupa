var gulp = require('gulp')
  ,imagemin = require('gulp-imagemin');

gulp.task('build-img', function() {

  gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/img'));
});


