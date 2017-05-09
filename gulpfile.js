//引入gulp
var gulp = require("gulp");
//创建任务
//第一个参数：任务名
//第二个参数：回掉函数，要执行的任务

var uglify = require('gulp-uglify');
gulp.task('script',function(){
    //匹配要处理的文件
    gulp.src('./app.js')
        .pipe(uglify())
        //指定输出目录
        .pipe(gulp.dest('./dist'))
})

//对js压缩 （npm install gulp-uglify --save）
//对js合并 （npm install gulp-concat --save）

var concat = require('gulp-concat');
gulp.task('scripts',function(){
    gulp.src('./js/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

//对css文件压缩 （npm install gulp-cssnano --save）
var cssnano = require('gulp-cssnano');
gulp.task('style',function () {
    gulp.src(['./css/*.css'])
        .pipe(concat('index.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'))
})

//对html压缩 （npm install gulp-html --save）
//对html压缩 （npm install gulp-htmlmin --save）
var htmlmin =require('gulp-htmlmin');
gulp.task('html',function(){
    gulp.src('./index.html')
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('./dist'))
})


browserSync = require('browser-sync').create();
csslint = require('gulp-csslint')

gulp.task('default', function() {
    browserSync.init({
        server:{
            baseDir:'./',
            index:'index.html'
        }
    });
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./css/*.css').on('change', browserSync.reload);
})