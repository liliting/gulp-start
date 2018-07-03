/**
 * Created by liliting on 2017/3/9.
 */


var gulp   = require('gulp');
var watch  = require('gulp-watch');
var config = require('../config');

gulp.task('watch',function(){
    watch(config.sass.all,function(){
       gulp.start('sass');
    });
    
//  watch(config.images.all,function(){
//      gulp.start('images');
//  });

//  watch(config.html.all,function(){
//      gulp.start('htmlmin');
//  });
    
//  watch(config.scripts.all,function(){
//      gulp.start('uglify');
//  });
});