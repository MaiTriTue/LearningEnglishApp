const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');

//  Cấu hình đường dẫn cấp 2

// :slug là một biến động có giá trị nạp vào
router.get('/:slug', siteController.search);
router.get('/', siteController.index);

module.exports = router;
