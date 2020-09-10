import React from 'react'
import Message from './Message'

let MessageWindow = ({messages = [], username}) => {
    console.log("Messages: ", messages);
    return <div style={{width: "20%", height: "1000px", overflowY: "scroll"}}>
        {
            messages.map(msg => {
            console.log("Key: ", msg.id);
            return <Message key={msg.id} msgKey={msg.id} text={msg.text} username={msg.username} isSelf={username === msg.username} />
            })
        }
    </div>
}

export default MessageWindow