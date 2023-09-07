const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send("API is Running");
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes);
// app.get('/api/chat',(req,res)=>{
//     res.send(chats);
// });

// app.get('/api/chat/:id', (req, res) => {
//     const singleChat = chats.find((chat) => chat._id === req.params.id);
//     res.send(singleChat);
// });

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold));

const io = require('socket.io')(server, {
    pingTimeout: 60000,
    cors: {
       origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("connected to socket.io");
});