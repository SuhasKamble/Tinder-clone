import React from 'react'
import Chat from './Chat'
import './Chats.css'
function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Suhas"
            message="Yo What's up"
            timestamp="40 seconds ago"
            profilePic="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg"
            />
            <Chat
            name="Rohit"
            message="What's doing?"
            timestamp="40 seconds ago"
            profilePic="https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194__340.jpg"
            />
            <Chat
            name="Ayush"
            message="Never mind"
            timestamp="46 seconds ago"
            profilePic="https://cdn.pixabay.com/photo/2014/07/31/23/49/guitarist-407212__340.jpg"
            />
            <Chat
            name="Salman"
            message="Hey!!"
            timestamp="67 seconds ago"
            profilePic="https://cdn.pixabay.com/photo/2016/03/09/10/23/model-1246028__340.jpg"
            />
        </div>
    )
}

export default Chats
