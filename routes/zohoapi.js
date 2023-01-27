
const express = require("express");
const router = express.Router();
const  {
    Welcome,
    Callback,
    AuthLinkGenerate,
} = require('../controllers/ZohoAPIController');
const path = require("path");

router.get('/', Welcome);
router.get('/callback', Callback);
router.post('/GenerateAuthUrl', AuthLinkGenerate);
module.exports = router;