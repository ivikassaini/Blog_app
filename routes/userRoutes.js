const express = require('express');
const {registerUser,deleteUser,getUsers,getUser,updateUser} = require('../controller/usercontroller');

const router = express.Router();
router.post('/register', registerUser);
router.delete('/delete/:id', deleteUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id/update', updateUser);



module.exports = router;