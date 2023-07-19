const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();
const app = express();

app.use(express.json);

app.get('/', (req,res) => {
    res.send("API is Running");
});

app.use('/api/user', userRoutes);
// app.get('/api/chat',(req,res)=>{
//     res.send(chats);
// });

// app.get('/api/chat/:id', (req, res) => {
//     const singleChat = chats.find((chat) => chat._id === req.params.id);
//     res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold));

