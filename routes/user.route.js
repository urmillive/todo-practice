const { Router } = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/user.controller');
const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getuser', getUser);

module.exports = router;