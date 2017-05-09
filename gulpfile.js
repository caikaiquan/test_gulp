//����gulp
var gulp = require("gulp");
//��������
//��һ��������������
//�ڶ����������ص�������Ҫִ�е�����

var uglify = require('gulp-uglify');
gulp.task('script',function(){
    //ƥ��Ҫ������ļ�
    gulp.src('./app.js')
        .pipe(uglify())
        //ָ�����Ŀ¼
        .pipe(gulp.dest('./dist'))
})

//��jsѹ�� ��npm install gulp-uglify --save��
//��js�ϲ� ��npm install gulp-concat --save��

var concat = require('gulp-concat');
gulp.task('scripts',function(){
    gulp.src('./js/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

//��css�ļ�ѹ�� ��npm install gulp-cssnano --save��
var cssnano = require('gulp-cssnano');
gulp.task('style',function () {
    gulp.src(['./css/*.css'])
        .pipe(concat('index.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'))
})

//��htmlѹ�� ��npm install gulp-html --save��
//��htmlѹ�� ��npm install gulp-htmlmin --save��
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