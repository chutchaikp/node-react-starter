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
        const { type, value } = JSON.parse(e.data);
        if (type === 'message') {
          setMessages(prev => {
            return [...prev, value];
          });
        }
        // else if (type === 'ack') {
        //   console.log('ack:' + value, new Date().toISOString());
        // } 
        else if (type === 'broadcast') {
          console.log('baordcast', value);
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
              <li key={index}>
                <MessageItem message={m} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="input-box" >
        <input
          placeholder="Enter a message"
          type="text"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              socket.send(JSON.stringify({ type: 'message', value: text }));
              setText('');
            }
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        {/* <button
          onClick={() => {
            if (!socket) {
              socketConnect();
            }
            socket.send(JSON.stringify({ type: 'message', value: text }));
          }}
        >send</button> */}

      </div>

    </div>
  );
}

const MessageItem = ({ message }) => {

  return (
    <div className="message-item">
      <div className="avitar"></div>
      <div className="message-body">{message}</div>
    </div>
  );
}
