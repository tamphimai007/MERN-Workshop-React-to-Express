const express = require('express');
const router = express.Router();


/* localhost:8000/api/create */
const { create, list, read, update, remove } = require('../controllers/person');
// middleware
const { auth } = require('../middleware/auth');
const { upload } = require('../middleware/uploadfile');


router.get('/person', auth, list);
router.get('/person/:id', auth, read);
router.post('/person', auth, upload, create);
router.put('/person/:id', auth, upload, update);
router.delete('/person/:id', auth, remove);


module.exports = router;