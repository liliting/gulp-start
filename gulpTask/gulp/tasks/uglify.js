var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('uglify',function(){
	gulp.src(config.scripts.src)
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(config.scripts.dest))
});
gulp.task('uglify2',function(){
	gulp.src(config.scripts.src2)
		.pipe(concat('plugins.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(config.scripts.dest))
});