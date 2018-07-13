# gulp-start
  一个gulp搭建的自动化构建系统，可以直接上手用的
## 工程介绍
1. gulp-start是一款用于快速搭建前端工程化的项目，可以快速上手，工程化包括对sass、JavaScript、image的资源压缩与打包
2. 主要用到的 gulp包列表如下

| gulp包 | 作用 | 备注 |
|-|:-:|-:|
| gulp-imagemin | 压缩图片 | [查看文档](https://www.npmjs.com/package/gulp-imagemin) |
| gulp-sass | 编译sass | [查看文档](https://www.npmjs.com/package/gulp-sass) |
| gulp-minify-css | 压缩css | 官方已弃用 |
| gulp-clean-css | 压缩css | [查看](https://www.npmjs.com/package/gulp-clean-css)
| gulp-uglify | 压缩js | [查看文档](https://www.npmjs.com/package/gulp-uglify) |
| gulp-concat | 合并文件 | [查看文档](https://www.npmjs.com/package/gulp-concat) |
| gulp-watch | 监听文件自动编译 | [查看文档](https://www.npmjs.com/package/gulp-watch) |
3. 目录介绍
```
|——css                         //构建sass之后文件保存路径
|——gulpTask                    //gulp工程配置相关文件
|  |——gulp                     //gulp任务文件夹
|     |——tasks                 //gulp 任务文件
|        |——default.js         //gulp默认执行的任务
|        |——htmlmin.js         //压缩html的gulp任务
|        |——images.js          //压缩image的gulp任务
|        |——sass.js            //编译、合并、压缩sass的gulp任务
|        |——uglify.js          //压缩、合并javascript的gulp任务
|        |——watch.js           //设置gulp监听的任务
|     |——config.js             //gulp任务配置文件（主要是一些任务的目录文件配置，方便集中管理）
|  |——src                      //sass、image、js源文件目录
|  |——gulpfile.js              //gulp主入口文件
|  |——package.json             //包依赖配置
|——images                      //gulp压缩图片后的保存路径
|——js                          //gulp构建js压缩 、合并后的保存路径
|——index.html                  //html文件
```
## 使用方法
1. 将该项目git clone到自己的电脑上（确保自己安装了git）
2. 将项目中的image资源放在gulpTask目录下
3. 建项目相应的sass文件，该项目下的sass结构可以作为参考，自己有更好的也可以使用
4. 安装nodejs，下载地址 [http://nodejs.cn/download/](http://nodejs.cn/download/)
5. 安装成功之后 安装gulp 
```
npm install gulp -g
```
> -g表示全局安装

6. 进入目录 gulpTask下，执行下列命令，安装上述包
```
npm install
```
安装了cnpm的也可以执行
```
cnpm install
```
7. 输入下列命令，执行gulp任务

```
gulp 
```
等价于
```
gulp default
```
8. 也可以执行下列命令，去监听文件自动编译。（一般调试sass的时候用的比较多）用这个很方便，只要文件保存，他就会编译。
> 注意：保存文件时。要预防语法错误。不然watch编译会终止

```
gulp watch
```