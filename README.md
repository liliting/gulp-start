# gulp-start
  一个gulp搭建的自动化构建系统，可以直接上手用的
## 工程介绍
1. gulp-start是一款用于快速搭建前端工程化的项目，可以快速上手，工程化包括对sass、JavaScript、image的资源压缩与打包
2. 主要用到的 gulp插件列表如下

| gulp插件 | 作用 | 备注 |
|-|:-:|-:|
| gulp-imagemin | 压缩图片 |  |
| gulp-sass | 编译sass |  |
| gulp-minify-css | 压缩css |  |
| gulp-uglify | 压缩js |  |
| gulp-concat | 合并文件 |  |
| gulp-watch | 监听文件自动编译 |  |

## 使用方法
1. 将该项目git clone到自己的电脑上
2. 将项目中的image资源放在gulpTask目录下
3. 建项目相应的sass文件
4. 输入下列命令，执行gulp任务

```
gulp 
```
等价于
```
gulp default
```
5. 也可以执行下列命令，去监听文件自动编译。（一般调试sass的时候用的比较多）用这个很方便，只要文件保存，他就会编译。
> 注意：保存文件时。要预防语法错误。不然watch编译会终止

```
gulp watch
```