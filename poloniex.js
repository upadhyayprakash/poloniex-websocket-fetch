/* ### APPROACH-1
    Using Library: "websocket@1.0.33"
*/
const WebSocketClient = require("websocket").client;
const client = new WebSocketClient();

client.on("connectFailed", function (error) {
  console.log("Connect Error: " + error.toString());
});

client.on("connect", function (connection) {
  console.log("WebSocket Client Connected");

  connection.on("error", function (error) {
    console.log("Connection Error: " + error.toString());
  });

  connection.on("close", function () {
    console.log("Connection Closed");
  });

  connection.send(JSON.stringify({ command: "subscribe", channel: 1002 }));

  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received: '" + message.utf8Data + "'");
    }
  });
});

client.connect("wss://api2.poloniex.com");

/* ### APPROACH-2
    Using Library: "ws@7.4.4"
*/

// const WebSocket = require("ws");
// const ws = new WebSocket("wss://api2.poloniex.com");
// ws.on("open", function open() {
//   ws.send(
//     JSON.stringify({ command: "subscribe", channel: 1002 }),
//     (data) => {}
//   );
// });

// ws.on("message", function incoming(data) {
//   console.log(data);
// });
