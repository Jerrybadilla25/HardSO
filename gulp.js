const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

/*
gulp.task('imagemin', ()=>{
    gulp.src('./imgs/*')
  .pipe(imagemin())
  .pipe(gulp.dest('src/imgs/'))
});
*/


gulp.task('imagemin', function(){
	return gulp.src('./imgs/*.{png,jpg,jpeg,gif}')
		.pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
		.pipe(gulp.dest('./dist'));
});