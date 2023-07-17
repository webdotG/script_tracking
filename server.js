const express = require('express')
const cors = require('cors')
const {request, response} = require("express");
const app = express();
app.use(cors())
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: '*'}})

app.use(express.json())

const rooms = new Map()

let sock;


app.get('/rooms', (req, res) => {
		console.log('get query done')
		res.json(rooms)
		console.log('GET на /rooms, res.json: ',rooms,' отрабатывает ?')
})

app.post('/rooms', (req, res) => {
		console.log('получение с post', req.body)
		console.log('REQBODY', req.body)
		const { emailInput } = req.body
		if (!rooms.has(emailInput)) {
			console.log('AAAAAAAAAAAAAAAAAAA', emailInput)
				rooms.set(
						emailInput,
				)
		}
		res.json([rooms.values()] )
		console.log('app post done')
		console.log('json rooms list :', rooms)
})
const messages = [];
const sendMessage = (messsage) => sock.emit('MESSAGE', JSON.stringify(messsage))  

app.post('/message', (req, res) =>{
	const message = req.body;
	console.log('получение с post MESSAGE', message)
	sendMessage(message)
	messages.push(message)
	res.json(' post for /message socket emit done')
})


io.on('connection', (socket) => {
		console.log('user connected socket id :', socket.id)
		socket.on('ROOM:JOIN', ({roomId}) => {
			console.log(`пришёл сокет запрос ROOM:JOIN, с клиента получены дынные : ${roomId}`)
			socket.join({roomId})
			messages.forEach(sendMessage)
			sock = socket
		});
})

server.listen(1234, (error) => {
		if (error) {
				throw Error(error)
		}
		console.log('server working')
})
