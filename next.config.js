const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
module.exports = withCSS(withFonts(withImages({
    cssModules: true,
    webpack: (config) => {
       return config
    }
   })))
// module.exports = withImages({})