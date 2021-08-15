const http = require('http');
const express = require('express');
const app = express();
const os = require('os');
const ifaces = os.networkInterfaces();
const port = process.env.PORT || 8080;
const routes = require('./routes/routes');

app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.toString() });
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api/v1/', routes);

// serve app
const server = http.createServer(app);
if (server != null) {
  server.listen(port, async () => {
    console.log(`Application running on port: ${port}\n`);
  });
}


// Show IP address in console
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;
  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(`\n ${ifname}: ${alias}, ${iface.address}`);
    } else {
      // this interface has only one ipv4 adress
      console.log(`\n ${ifname}: ${iface.address} \n`);
    }
    ++alias;
  })
})
