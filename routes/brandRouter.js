const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRole('ADMIN'), brandController.create)
router.get('/get-brands', brandController.getAll)

module.exports = router;