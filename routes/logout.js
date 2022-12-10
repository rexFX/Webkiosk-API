const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/logout', async (req, res) => {

  //change req.body['Cookie'] to req.cookies['Cookie'] if sending cookie via header and change cors parameters in server.js if not done so
  axios.get('https://webkiosk.juit.ac.in:9443/CommonFiles/SignOut.jsp', { headers: { Cookie: req.body['Cookie'] } })
});

module.exports = router;