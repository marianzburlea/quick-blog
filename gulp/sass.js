'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer';

const sass = ({
  gulp,
  plugins,
  args,
  config,
  taskTarget,
  browserSync
}) => {
  const dir = config.directory;
  const entry = config.entry;
  const cssPath = [];

  if (entry.css.external) {
    cssPath.push(path.join(dir.source, entry.cssExternal));
  }
  if (entry.css.inline) {
    cssPath.push(path.join(dir.source, entry.cssInline));
  }

  // Compile sass
  gulp.task('sass', () => {
    return gulp.src(cssPath)
      // Only deal with files that change in the pipeline
      .pipe(plugins.plumber())
      // .pipe(plugins.cached())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: args.production ? 'compressed' : 'expanded',
        precision: 10,
        sync: true,
        includePaths: [
          path.join(dir.source),
          path.join(dir.source, dir.component)
        ]
      }))
      .on('error', plugins.sass.logError)
      .pipe(plugins.postcss([
        autoprefixer({
          browsers: [
            'last 2 version',
            '> 5%',
            'safari 5',
            'ios 6',
            'android 4'
          ]
        })
      ]))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(taskTarget))
      .pipe(browserSync.stream({match: '**/*.css'}));
  });
};

export default sass;
