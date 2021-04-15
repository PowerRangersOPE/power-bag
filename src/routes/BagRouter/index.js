const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');

const BagController = require('../../api/controllers/BagController');

const bagController = new BagController();

const router = new Router();

router.get('/bag', verifyToken, bagController.index);
router.get('/bag/:id', verifyToken, bagController.show);
router.post('/bag', verifyToken, bagController.store);
router.put('/bag/:id', verifyToken, bagController.update);
router.delete('/bag/:id', verifyToken, bagController.destroy);

module.exports = router;
