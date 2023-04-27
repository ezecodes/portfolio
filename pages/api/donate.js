const {savePayment, handlePayment} = require('../../controllers/donate')

module.exports = async function donateApi(req, res) {
	 // await NextCors(req, res, {
  //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  //     origin: '*',
  //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  //  });
    res.setHeader("Access-Control-Allow-Origin", "*");

	if (req.method === 'PUT') {
		savePayment(req, res)
	}
	if (req.method === 'POST') {
		handlePayment(req, res)
	}

}