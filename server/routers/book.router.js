// Any code that relates to /book

const express = require('express')

// Make express router
const router = express.Router()

// Sever-side state for all books
const bookList = [];

// GET all books from server state
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

router.get('/newroute', (req, res) => {
    console.log('Inside TacoBook')
    res.send('inside /tacobook');
});

module.exports = router;