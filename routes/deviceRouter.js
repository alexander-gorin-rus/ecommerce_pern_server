const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/create-device', checkRole('ADMIN'), deviceController.create)
router.get('/get-devices', deviceController.getAll)
router.get('/get-devices/:id', deviceController.getOne)

module.exports = router;