var gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
		gulpif = require('gulp-if'),
		plugins = require('gulp-load-plugins')();

var isProd = process.env.NODE_ENV === 'prod' ? true:false;
var isLive = process.env.NODE_RELOAD === 'true' ? true:false;

// Scripts Task
// Merges & Minifies JS
gulp.task('scripts', function(){
	return gulp.src([
		'assets/js/main.js'
	])
	.pipe(plugins.plumber())
	.pipe(plugins.concat('all.js'))
	.pipe(gulpif(isProd, plugins.uglify()))
	.pipe(plugins.rename('main.min.js'))
	.pipe(gulp.dest('build/js'))
	.pipe(gulpif(isLive, plugins.connect.reload()));
});

// Styles Task
// Compiles sass, minfies, and created sourcemap
gulp.task('styles', function () {
  return sass('assets/scss/*.scss', {
		style: gulpif(isProd,'compressed','expanded'),
  	cacheLocation: 'assets/scss/.sass-cache',
  	sourcemap: !isProd,
    })
  	.pipe(plugins.plumber())
    .on('error', sass.logError)
    .pipe(plugins.autoprefixer({
	    browsers: ['last 2 versions'],
	    cascade: false
	}))
	.pipe(plugins.rename('main.min.css'))
  .pipe(plugins.sourcemaps.write('.',{includeContent:false, sourceRoot:'assets/sass/'}))
  .pipe(gulp.dest('build/css'))
	.pipe(gulpif(isLive, plugins.connect.reload()));
});

// Watch Task
// Watches JS, CSS & Reloads
gulp.task('watch', function(){
	gulp.watch('assets/**/*.js', ['scripts']);
	gulp.watch('assets/scss/**/*.scss', ['styles']);
});

gulp.task('connect', function() {
  plugins.connect.server({
    root: [__dirname],
    livereload: isLive,
    port: 80,
    host: 'gulp-sandbox.local',
    fallback: 'index.html'
  });
});

gulp.task('default', ['scripts','styles','watch','connect']);
