/**
 * Created by liliting on 2017/3/9.
 */

var gulp     = require('gulp');
var htmlmin  = require('gulp-htmlmin');
var config   = require('../config');

gulp.task('htmlmin',function(){
   gulp.src(config.html.src)
       .pipe(htmlmin(config.html.settings))
       .pipe(gulp.dest(config.html.dest))
});