import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './ChatScreen.css'
function ChatScreen() {
    const [input,setInput] = useState('')
    const [messages,setMessage] = useState([{
        name:"Suhas Kamble",
        image:"https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg",
        message:"What's up"
    },
    {
        name:"Suhas Kamble",
        image:"https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg",
        message:"Hii"
    },
    {
      
        message:"Hello "
    },



])

const sendMessage=(e)=>{
    e.preventDefault()
    setMessage([...messages,{message:input}])
    setInput("")
}
    return (
        <div className="chatScreen">
<p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/10/20</p>
{messages.map(message=>(
    message.name ?(
        <div className="chatScreen__message">
        <Avatar className="chatScreen__image"src={message.image} alt={message.name}  />
        <p className="chatScreen__text">{message.message}</p>
    </div>
    ):(
        <div className="chatScreen__message">
        <p className="chatScreen__textUser">{message.message}</p>
    </div>
    )
  
))}



    <form className="chatScreen__input">
        <input value={input} onChange={e=>setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Type a message.."/>
        <button onClick={sendMessage}
        type="submit" className="chatScreen__button">Send</button>
    </form>
        </div>
    )
}

export default ChatScreen
