const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRole('ADMIN'), typeController.create);
router.get('/get-types', typeController.getAll);
router.delete('/delete/:id', typeController.deleteOne);

module.exports = router;