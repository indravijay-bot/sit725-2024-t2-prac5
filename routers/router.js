const { saveContact, addTwoNumberFn } = require('../controllers/controller')
const express = require('express')
const router = express.Router()

router.post('/contact', saveContact);

router.get("/addTwoNumber", addTwoNumberFn);

module.exports = (app) => {
    app.use(router);
};
