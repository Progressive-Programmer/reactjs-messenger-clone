import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import logo from './messenger_icon.svg';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState('');

  
  useEffect(() => {

    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}) ))
    } )
    
  }, [] )


  useEffect (() => {
    //run code here
    // if its blank insiide [], this code rons ONCE only once 
    setUserName(prompt('please enter your name'))  
  }, [])  // condition




  const sendMessage = (event) => {
    // all the logic to send message here
    event.preventDefault();
    db.collection('messages').add({
      username: username ,
      message:input ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    })

    
    setInput('');
  };





  return (
    <div className="App">
      <img src={logo} />
      <div id="app__title" >Messenger App</div>
      <div id="app__subTitle">Welcome {username} </div>
      <div className="app__formWrapper">
      <form className="app__form" >
      <FormControl className="app__formControl" borderRadius="50%" >
        <Input className="app__input" placeholder="Enter a message..." value={input} onChange={ event => setInput(event.target.value) }  /> 
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary"  type="submit" onClick= {sendMessage} >
        <SendIcon />
        </IconButton>        
      </FormControl>
      </form>
      </div>
      {/* messages */}
     
      <FlipMove className="app__messageView"> 
        {
          messages.map(({id, message}) =>(
            <Message key={id} username={username} message={message} />
            ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
