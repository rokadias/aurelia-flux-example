var gulp = require('gulp');
var browserSync = require('browser-sync');
var httpProxy = require('http-proxy');
var chalk = require('chalk');


function makeProxy(pathKey, url, opts) {
  var proxy = {
    url: url,
    opts: opts || {},
    pathKey: pathKey + '/',
    server: httpProxy.createProxyServer({
      target: url
    })
  };

  proxy.server.on('error', function(error, req, res) {
    console.error(chalk.red('ERROR on proxy ' + pathKey), proxy);
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });

    console.error(chalk.red('[Proxy]'), error);
  });

  return proxy;
}
/*
 * Location of backend servers
 */
var proxies = {
  naxos: makeProxy(  'naxos', 'http://localhost:9001'),
  milos: makeProxy(  'milos', 'http://localhost:9002'),
  shield: makeProxy('shield', 'http://localhost:9005')
};

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {

        res.setHeader('Access-Control-Allow-Origin', '*');

        for (var i in proxies) {
          if (proxies.hasOwnProperty(i) && req.url.indexOf(proxies[i].pathKey) !== -1) {
            var proxy = proxies[i];
            if (proxy.opts.removePrefix) {
              req.url = req.url.replace(new RegExp(i + "\/?", "i"), "");
            }
            //console.log("Using Proxy: " + i + " for " + req.url);
            proxy.server.web(req, res);
            return;
          }
        }

        next();
      }
    }
  }, done);
});
