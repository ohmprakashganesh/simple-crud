const express = require('express');
const router = express.Router();


const {
  // createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controller/userController');
const verifyToken = require('../middleware/authMiddleware');

// CREATE
// router.post('/', createUser);

// READ ALL
router.get('/',verifyToken, getUsers);

// READ ONE5
router.get('/:id', getUserById);

// UPDATEa
router.put('/:id', updateUser);



// DELETE
router.delete('/:id', deleteUser);


module.exports = router;