module.exports = [{
      plugin: require('../plugins/gatsby-plugin-top-layout/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../plugins/gatsby-plugin-mui-emotion/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Fast Food Control","short_name":"FastFood","start_url":"/","background_color":"#222d32","theme_color":"#1a2226","display":"minimal-ui","icon":"./src/assets/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4997f2170bb616ab6eedf5d7efc3e6b0"},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
