import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import MessageWindow from './components/MessageWindow';
import TextBar from './components/TextBar'
import { registerOnMessageCallback, send, startWebsocketConnection } from './websocket'
import { v4 as uuid } from 'uuid';

function App() {

  let [messages, setMessages] = useState([])
  let [username, setUsername] = useState(null)

  useEffect(() => {
    startWebsocketConnection()
  }, []) 

  let onMessageReceived  = (msg) => {
    // Once we receive a message, we will parse the message payload
    // Add it to our existing list of messages, and set the state
    // with the new list of messages
    console.log("Messgaes: ", messages)

    msg = JSON.parse(msg)
    let newMessages =  messages.concat(msg)
    
    console.log("new Messages: ", newMessages)
    setMessages(
      newMessages
    )
  }

  registerOnMessageCallback(onMessageReceived)

  useEffect(() => {
    console.log("Messgaes Have Changed: ", messages)
  }, [messages])

    // This method accepts the message text
  // It then constructs the message object, stringifies it
  // and sends the string to the server using the `send` function
  // imported from the websockets package
  let sendMessage = (text) => {
    const message = {
      username: username,
      text: text,
      id: uuid()
    }
    console.log("Message: ", message)
    console.log("Send: ", send)
    send(JSON.stringify(message))
  }

  return (
    !username ? (
      <div className='container'>
        <div className='container-title'>Enter username</div>
        <TextBar onSend={setUsername} />
      </div>
    ) : 
    <div className='container'>
      <div className='container-title'>Messages</div>
      <MessageWindow messages={messages} username={username} />
      <TextBar onSend={sendMessage} />
    </div>
  )

}

export default App;
