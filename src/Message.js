// es7 snippets rfce
import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
import './Message.css'


// Message(props)
const Message = forwardRef(({message, username}, ref ) => {
    const isUser = username === message.username;    // is username(entered) is equivalent to username in object (message)
   

    return (
            <div ref={ref} className= {`message ${isUser && "message__user"}`}> 
                
                <div className="message__userText"> {!isUser && `${message.username || 'Unknown User'} `}
                </div>              
                <Card className={isUser ? "message__userCard" : "message__guestCard"}> 
                    
                    <CardContent>
                        <Typography 
                        color="white"
                        
                        component="div">  
                        {message.message}
                        
                        </Typography>
                    </CardContent>
                </Card>
                
            </div>         
        )
})

export default Message; 
 