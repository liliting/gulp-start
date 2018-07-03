//-------------------------------------
//  4kgarden website

/*  gulp-imagemin imagemin-pngquant  压缩图片
 *  gulp-htmlmin                    压缩html
 *  del                             删除文件
 *  gulp-sass                       编译sass    none
 *  gulp-minify-css                 压缩css
 *  gulp-browser-sync               ------浏览器
 *  gulp-uglify                     JS-min
 *  gulp-concat                     合并文件
 *  gulp-rev                        为文件加后缀
 *  gulp-rev-collector              路径替换
 *  gulp-watch
 *  gulp-spritesmith
*/

//-------------------------------------


/*var gulp     = require('gulp'),
    imagemin = require('imagemin'),
    htmlmin  = require('gulp-htmlmin'),
*/

var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse:true } );