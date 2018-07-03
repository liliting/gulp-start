/**
 * Created by liliting on 2017/3/9.
 */

var gulp     = require('gulp');
var sass     = require('gulp-sass');
var miniCss  = require('gulp-clean-css');
var rev       = require('gulp-rev');
var config   = require('../config');

gulp.task('sass',function(){
   gulp.src(config.sass.src)
       .pipe(sass(config.sass.settings))
       .pipe(miniCss())
       //.pipe(rev())
       .pipe(gulp.dest(config.sass.dest))
      // .pipe(rev.manifest())
       // .pipe(gulp.dest(config.sass.rev))
});