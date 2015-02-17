var requireJs = require('broccoli-requirejs');

module.exports = requireJs("src", {
  verbose: true,
  requirejs: {
    baseUrl: "",
    include: "app",
    optimize: "uglify",
    out: "out.js"
  }
});
