/**
 * Created by liliting on 2017/3/9.
 */

var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var config   = require('../config');

gulp.task('images',function(){
   gulp.src(config.images.all)
       .pipe(imagemin({
       		optimizationLevel:5,
       		progressive:true,
       		use:[pngquant(),jpegtran()]
       }))
       .pipe(gulp.dest(config.images.dest))
});