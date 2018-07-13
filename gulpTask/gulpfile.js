//-------------------------------------

/*  gulp-imagemin imagemin-pngquant  ѹ��ͼƬ
 *  gulp-htmlmin                    ѹ��html
 *  del                             ɾ���ļ�
 *  gulp-sass                       ����sass    none
 *  gulp-minify-css                 ѹ��css
 *  gulp-browser-sync               ------�����
 *  gulp-uglify                     JS-min
 *  gulp-concat                     �ϲ��ļ�
 *  gulp-rev                        Ϊ�ļ��Ӻ�׺
 *  gulp-rev-collector              ·���滻
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