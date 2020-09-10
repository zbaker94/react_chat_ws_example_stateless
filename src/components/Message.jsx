import React from 'react'

let Message = ({text, username, isSelf, msgKey}) => {
    return <div style={{textAlign: isSelf ? "left" : "right", backgroundColor: "blue", padding: "5px", margin: "5px"}} key={msgKey}> 
        {username}
        <br/>
        {text}
    </div>
}

export default Message