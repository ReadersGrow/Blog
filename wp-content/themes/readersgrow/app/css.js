import { CSSLoader, Plugins } from 'jspm-loader-css'

export default new CSSLoader([
    Plugins.autoprefixer()
], __moduleName)
