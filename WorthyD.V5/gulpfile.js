var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var rename = require('gulp-rename');
var fileinclude = require('gulp-file-include');
var sass = require('gulp-sass');
var wait = require('gulp-wait')

var uglify = require('gulp-uglify')
var concat = require('gulp-concat')


//var ts = require('gulp-typescript');
//var tsProject = ts.createProject('tsconfig.json');



//webpack

gulp.task('default', ['browserSync', 'copy'], function () {
    gulp.watch('src/templates/*.html', ['fileinclude']);
    gulp.watch('src/scripts/**/*.js', browserSync.reload);
    gulp.watch(sassPath, ['sass']);
});

var banner = '/* This is a generated file on ' + new Date() + '  */\n';

/*
We no longer need to use this task. I'm commenting out for now.

gulp.task('minify-css', function () {
    return gulp.src("styles/*.css")
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(header(banner))
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

*/
gulp.task('fileinclude', function () {
    gulp.src(['src/templates/*.html'])
        .pipe(wait(500))
        .pipe(fileinclude({
            prefix: '<!-- @@',
            suffix: '-->'
        }))
        .pipe(gulp.dest('./dest2'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }));
});
var sassPath = 'src/content/sass/**/*.scss';

gulp.task('sass', function () {
    return gulp.src(sassPath)
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(header(banner))
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dest2/styles'))
        .pipe(browserSync.reload({
            stream: true
        }));

});
// gulp.task('ts', function () {
//     var result =  gulp.src("src/scripts/**/*")
//         .pipe(tsProject())

//       return result.js.pipe(gulp.dest('')).pipe(browserSync.reload({
//             stream: true
//         }));

// });


//We are adding sass as a gulp dependancy. It will run 'sass' before it starts the browser sync. 
//This makes sure that we have the latest CSS.
gulp.task('browserSync', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: 'dest2'
        }
    })
});

gulp.task('copy', function(){
//node_modules/systemjs/dist/system.js
  gulp.src([
            'node_modules/systemjs/dist/system.js'
        ]).pipe(gulp.dest('dest2/scripts/libs'))
});

gulp.task('js', function(){
    var src = ['src/scripts/layout/*.js'];
    var dest = "dest2/scripts";
    return gulp.src(src)
            .pipe(sourcemaps.init())
            .pipe(concat('site.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dest))
            .pipe(uglify())
            .pipe(rename({
                extname: '.min.js'
            }))
            .pipe(gulp.dest(dest));

});

//Starts up a dev server for us
//It also watches files and reloads the browser when they change.
gulp.task('dev', ['browserSync', 'copy'], function () {
    gulp.watch('src/templates/*.html', ['fileinclude']);
    gulp.watch('src/scripts/**/*.js', browserSync.reload);
    //gulp.watch('src/scripts/**/*.ts', ['ts']);
    gulp.watch(sassPath, ['sass']);
});
gulp.task('delayreload', function () {
    setTimeout(function () {
        browserSync.reload();
    }, 1000);
});