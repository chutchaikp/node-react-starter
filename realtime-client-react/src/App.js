import { useEffect, useState } from "react";

import './App.css'

var timerId = null;
var socket = null;

export default function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    // componentDidMount
    socketConnect();

    // componentWillUnmount
    return () => {
      try {
        clearInterval(timerId);
        if (socket) {
          socket.destroy();
          // delete socket;
          socket = null;
        }
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  const heartbeat = () => {
    if (!socket) return;
    if (socket.readyState !== 1) return;
    socket.send(JSON.stringify({ type: 'heartbeat' }));
    setTimeout(heartbeat, 60 * 1000);
  };

  const socketConnect = () => {
    try {
      socket = new WebSocket("ws://localhost:8080");
      socket.onopen = () => {
        heartbeat();
      };
      socket.onclose = () => {
        socketConnect();
      };
      socket.onmessage = (e) => {
        debugger;
        const data = JSON.parse(e.data);
        if (data.type === 'message') {
          setMessages(prev => {
            return [...prev, e.data];
          });
        }
      };
      socket.onerror = (err) => {
        // close();
        console.log("OnError");
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">

      <div className="message-list">
        <ul>
          {messages.map((m, index) => {
            return (
              <li key={index}>{m}</li>
            );
          })}
        </ul>
      </div>
      <div className="input-box" >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (!socket) {
              socketConnect();
            }
            socket.send(text);
          }}
        >send</button>

      </div>


    </div>
  );
}
