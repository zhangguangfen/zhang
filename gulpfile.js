//1 导入gulp这个第三方模块
const gulp = require('gulp');
// 导入gulp-cssmin 压缩
const cssmin = require('gulp-cssmin');

// 导入gulp-autoprefixer  前缀
const autoprefixer = require('gulp-autoprefixer');

// 导入gulp-babel ES6转换为ES5  
//  =>@babel/core 和 @babel/preset-env
const babel = require('gulp-babel');

// 导入gulp-uglifys  压缩js
const uglify = require('gulp-uglify');

// 导入gulp-htmlmin  压缩
const htmlmin = require('gulp-htmlmin');

// 导入del
const del = require('del')

//导入gulp-webserver
const webserver = require('gulp-webserver');

//书写打包css方法
const cssHandler = ()=>{
    return gulp.src('./anta/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}

//书写一个压缩js文件的方法
const jsHandler = ()=>{
    // return gulp.src('./anta/js/*.js')//输入文件(改成自己对应路径)
	// .pipe(babel({
	// 	presets: ['es2015','es2016','es2017'],
	// 	plugins: [["transform-runtime", { "polyfill": false,"regenerator":true}]]
	//   }))//将es7转换es5
	// 	.pipe(uglify())//压缩js
	// 	.pipe(gulp.dest("./dist/js")) //输出到目录(改成自己对应路径)
    return gulp.src('./anta/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}
// gulp.task('babel',function() {   
// 	return gulp.src('./anta/js/*.js')//输入文件(改成自己对应路径)
// 	.pipe(babel({
// 		presets: ['es2015', 'es2016', 'es2017'],
// 		plugins: [["transform-runtime", { "polyfill": false,"regenerator": true}]]
// 	  }))//将es7转换es5
// 		.pipe(uglify())//压缩js
// 		.pipe(gulp.dest("./dist/js")) //输出到目录(改成自己对应路径)
// 	});
//书写一个移动lib文件夹的方法
const libHandler = ()=>{
    return gulp.src('./anta/lib/*.js')
    .pipe(gulp.dest('./dist/lib'))
}
const jsonHandler = ()=>{
    return gulp.src('./anta/js/*.json')
    .pipe(gulp.dest('./dist/js'))
}
const interHandler = ()=>{
    return gulp.src('./anta/js/*.php')
    .pipe(gulp.dest('./dist/interface'))
}
//书写一个压缩html文件的方法
const htmlHandler = ()=>{
    return gulp.src('./anta/pages/*.html')
    .pipe(htmlmin({
        collapseWhitespace:true,//空格
        removeAttributeQuotes:true,//移除属性的引号
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true,//移除注释
        minifyCSS:true,//把页面里面的style标签里面的css样式也去空格
        minifyJS:true,//把script标签里面的js代码去空格
    }))
    .pipe(gulp.dest('./dist/pages'))
}

const delHandler = ()=>{
    return del(['./dist'])
}

// 书写一个监控文件任务
const watchHandler = ()=>{
    gulp.watch('./anta/css/*.css',cssHandler);
    gulp.watch('./anta/js/*.js',jsHandler);
    gulp.watch('./anta/pages/*.html',htmlHandler)
    gulp.watch('./anta/lib/*.js',libHandler)
    gulp.watch('./anta/js/*.json',jsonHandler)
    gulp.watch('./anta/interface/*.php',interHandler)
    
}
 

//导出一个默认任务 一次完成 gulp default
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(
        cssHandler,
        jsHandler,
        jsonHandler,
        libHandler,
        htmlHandler,
        interHandler
    ),
    watchHandler
)


//导出css
// module.exports.css = cssHandler; //执行指令gulp css
// module.exports.img = imgHandler;
// module.exports.js = jsHandler;
// module.exports.lib = libHandler;
// module.exports.html = htmlHandler;
const testHandler = ()=>{
    return gulp.src('./anta/*.*')
    .pipe(gulp.dest('./dist'));  
}
 module.exports.test = testHandler;