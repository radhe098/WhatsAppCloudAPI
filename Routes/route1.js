 const express = require('express');
 const router =express.Router();
const Message = require('../Model/schema');


router.get('/', (req, res) => {
    
    res.send('Hello World!');
    }   );
