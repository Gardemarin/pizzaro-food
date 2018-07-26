let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./app/assets/styles/styles.scss')
    .pipe(sass())
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});