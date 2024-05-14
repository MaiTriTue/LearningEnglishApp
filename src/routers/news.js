const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/newscontroller');

//  Cấu hình đường dẫn cấp 2 < /news/...>

// :slug là một biến động có giá trị nạp vào
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
