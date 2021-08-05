const express = require('express')
const router = express.Router();

//controller
const { createDropdown, listDropdown } = require('../controllers/example/example')


// @Endpoint    localhost:8000/api/dropdown-insert
// @Method      POST
// @Access      Public
router.post('/dropdown-insert', createDropdown)

// @Endpoint    localhost:8000/api/dropdown-insert
// @Method      GET
// @Access      Public
router.get('/dropdown-insert', listDropdown)


module.exports = router;