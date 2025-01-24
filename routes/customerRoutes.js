const express = require('express');
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, customerController.create);
router.get('/', authMiddleware, customerController.list);

module.exports = router;
