const axios = require('axios');

module.exports.getGoldPrice = async (req, res) => {
  const config = (axios.AxiosRequestConfig = {
    headers: {'Accept': '*/*'},
    method: 'get',
    responseType: 'json',
    timeout: 12000,
    url: 'google.com'

  });
  try {
    let response = await axios(config);

    if (response.status ==200) {
      res.send(response.data);
    } else {
    console.log('Error in controllers/polygonController.js');
    }
  } catch (err) {
    console.log(err);
    res.send({ success: false});
  }

};
