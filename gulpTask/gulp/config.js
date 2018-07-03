/**
 * Created by liliting on 2017/3/9.
 */
var src  = './src';
var dest = '../';

module.exports = {
    sass:{
        all : src + "/sass/**/*.scss",
        src : src +"/sass/**/*.scss",
        dest: dest + '/css',
        rev : src + '/rev/sass/',
        settings:{

        }
    },
    css:{
        all : src + "/css/global.css",
        src : src + "/css/global.css",
        dest: dest + '/css',
        rev : src + '/rev/css/',
        settings:{

        }
    },
    images:{
        all : src + "/images/**/*.{png,jpg,jpeg,gif,svg,ico}",
        src : src + "/images/**/**",
        dest: dest + "/images",
        rev : src + "/rev/images/",
        settings:{
            optimizationLevel:5,
            progressive:true,
            interlaced:true,
            multipass:true
        }
    },
    html:{
        all : src + "*.html",
        src : src + "*.html",
        dest: dest ,
        rev: src + "/rev/",
        settings:{

        }
    },
    sprite:{
        all : src +"/images/sprites/**/*.png",
        src : src +"/images/sprites/**/*.png",
        dest: src ,
        rev : src +"/rev/images/sprites/"
    },
    scripts:{
    	all : [src+'/js/jquery.min.js',src+'/js/index.js'],
    	src : [src+'/js/jquery.min.js',src+'/js/index.js'],
    	src2 : [src + '/js/promise.min.js',src + '/js/vue.min.js',src+'/js/axios.min.js',src+'/js/vue-axios.min.js'],
    	dest: dest+'/js',
    }
}