import { Avatar, Link } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './Chat.css'
function Chat({name,message,timestamp,profilePic}) {
    const history=useHistory()
    const toChat=()=>{
        history.push(`/chat/${name}`)
    }
    return (
        
        <div className='chat' onClick={toChat}>
            <Avatar className="chat__image" alt={name} src={profilePic}/>
            <div className="chat__details">
            <h2>{name}</h2>
            <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
        
    )
}

export default Chat;
