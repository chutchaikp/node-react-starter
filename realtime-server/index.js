const myWebSocket = require('ws');
const wss = new myWebSocket.Server({ port: 8080 });

let nbClients = 0;

// TODO
// wss.on closed

wss.on("connection", (ws) => {
	console.log('Client connected!');

	clearInterval(this.timeId);
	this.timeId = setInterval(() => {
		nbClients = wss.clients.size;

		wss.clients.forEach((client) => {
			const d = new Date();
			const obj = {
				type: "pong",
				time: (new Date()).toISOString(),
				clients: nbClients,
			}
			client.send(JSON.stringify(obj));
		});

	}, 60 * 1000);

	ws.on("message", (data) => {
		console.log(data);
		const { type } = data;
		if (type === "heartbeat") {
			// console.log("Reaceive Heartbeat from client at", (new Date()).toISOString());
			return;
		}

		wss.clients.forEach((client) => {
			debugger;
			if (client !== ws && client.readyState === myWebSocket.OPEN) {
				client.send(JSON.stringify({
					type: 'message',
					message: data,
				}));
			}

		});

	});

});
