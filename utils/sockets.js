// this is where you paste your api key
module.exports = () => {
  let apiKey = process.env.CRYPTO_COMPARE_API_KEY
  const WebSocket = require('ws');
  const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);

  ccStreamer.on('open', function open() {
    var subRequest = {
      "action": "SubAdd",
      "subs": ["0~Coinbase~BTC~USD"]
    };
    ccStreamer.send(JSON.stringify(subRequest));
  });

  ccStreamer.on('message', function incoming(data) {
    console.log(data);
    // return data;
  });
}