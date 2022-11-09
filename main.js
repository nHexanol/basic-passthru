require('http').createServer(function (req, res) {
  if (req.url === 'api/general/warLogger') {
    var chunk = '';
    req.on('data', function (data) {
      chunk += data;
    });
    req.on('end', function () {
      fetch('https://script.google.com/macros/s/AKfycbw7lRN6tojW1RjsPeC7bhVNsGETBl_LZEc6bZKXAHG95HB_UC4NKQMm9LGmuvT8KU-R-A/exec', { method: 'POST', body: chunk });
    });
  }
}).listen(42069);