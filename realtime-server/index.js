const myWebSocket = require('ws');
const wss = new myWebSocket.Server({ port: 8080 });


/* TODO - Send message to a specific connected client  */
// var id = 0;
// var lookup = {};
// wss.on('connection', function(ws) {
//   ws.id = id++;
//	 ws.account = 'name'  assign account if coming later	
//   lookup[ws.id] = ws;
//   [...]
// }
// send a message to the client with id == 0, you'd just call...
// lookup[0].send('message');


/* Boardcast a message to clients */

let nbClients = 0;
var clientId = 0;
var clientLookup = {};
// {
// 	1: { ws },
// 	2: {},
// 	3: {},
// }

wss.on("connection", (ws) => {
	console.log('Client connected!');

	//#region  Boardcast the message to all client with interval
	clearInterval(this.timeId);
	this.timeId = setInterval(() => {

		nbClients = wss.clients.size;
		console.log(`Broadcast to ${nbClients} clients every 60 seconds`);

		wss.clients.forEach((client) => {
			const d = new Date();
			const obj = {
				type: "broadcast",
				value: (new Date()).toISOString(),
			}
			client.send(JSON.stringify(obj));
		});
	}, 60 * 1000);
	//#endregion

	// On message send from some client
	ws.on("message", (data) => {
		console.log(data);

		const { type, value } = JSON.parse(data);
		if (type === "heartbeat") {
			return;
		}

		wss.clients.forEach((client) => {

			if (client !== ws && client.readyState === myWebSocket.OPEN) {
				// if (client.readyState === myWebSocket.OPEN) {
				client.send(JSON.stringify({
					type: 'message',
					value,
				}));
			}

		});

	});

	ws.on("close", (event) => {
		console.log("The connection has been closed successfully.");
	})

});
