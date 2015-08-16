import {CSSLoader, Plugins} from 'jspm-loader-css';
import browser-reporter from 'postcss-browser-reporter;'

export default CSSLoader([
  browser-reporter,
  Plugins.autoprefixer()
])
