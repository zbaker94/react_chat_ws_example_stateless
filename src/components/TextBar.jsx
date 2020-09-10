import React from 'react'

let TextBar = ({onSend}) => {
    let textInput = React.createRef();

    let sendMessage = () => {
        onSend && onSend(textInput.current.value)
        textInput.current.value = ""
    }

    let sendMessageIfEnter = (e) => {
        if (e.keyCode === 13) {
          sendMessage()
        }
      }

    return (<div className='textbar'>
    <input className='textbar-input' type='text' ref={textInput} onKeyDown={sendMessageIfEnter} />
    <button className='textbar-send' onClick={sendMessage}>
      Send
    </button>
  </div>)

}

export default TextBar