import React, { useState } from 'react';
import "./MessageSender.css";
import {Avatar} from "@material-ui/core";

import {useStateValue} from "./StateProvider";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import db from "./Firebase";
import { useRef } from 'react';

function MessageSender() {

    const inputRef = useRef(null);

    const[{user}] = useStateValue();

    const[input, setInput] = useState("");

    const [imageUrl, setImageUrl] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!inputRef.current.value) return;
        // we use some DB here to post anything in the feed (here we programmatically push all data to DB)
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        
        setInput("");
        setImageUrl("");
        
        inputRef.current.value="";
        
    };
    
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input} onChange= {(e)=> setInput(e.target.value)} className="messageSender_input" ref={inputRef} placeholder={`Type here, ${user.displayName}...`}/>
                    
                    <input value={imageUrl} onChange= {(e)=> setImageUrl(e.target.value)}  placeholder="Image URL   "/>
                
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>

            </div>


            <div className="messageSender_bottom">
                <div className="messageSender_option">
                <img
                src={require('./logo1.png')}
                alt=""
                />
                </div>

                <div className="messageSender_option1">
                <img
                src={require('./scriptiez.png')}
                alt=""
                />
                </div>

                <div className="messageSender_option">
                <img
                src={require('./logo1.png')}
                alt=""
                />
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
