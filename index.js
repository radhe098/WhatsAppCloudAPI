const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const Message = require('./MOdel/scema'); // Import your schema

app.use(express.static(path.join(__dirname, 'Frontend')));
app.use(express.json());

const URI = 'mongodb://127.0.0.1:27017/WhatsAppAPI';
mongoose.connect(URI).then(() => {
    console.log('Database connected');
}).catch((e) => {
    console.log(e);
});
// Endpoint to receive and save messages
app.post('/messages', async (req, res) => {
    const { text } = req.body;
    try {
        console.log(text);
          const newMessage = new Message({
            message: text
        });
        // Save the message to the database
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to send message' });
    }
    // try{
    //  await 
    // }catch (e){
       
    // }
});


app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
