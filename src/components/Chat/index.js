import { useEffect, useState } from 'react';
import { CometChat } from '@cometchat/chat-sdk-javascript';

const Chat = () => {
    const username = localStorage.getItem("username")
    const [textMessage, setTextMessage] = useState('')
    const [mediaMessage, setMediaMessage] = useState(false)

    // send text messages
    const sendMessageTo = (uid) => {
        let receiverID = uid;
        let messageText = textMessage;
        let receiverType = CometChat.RECEIVER_TYPE.USER;
        let message = new CometChat.TextMessage(receiverID, messageText, receiverType);

        CometChat.sendMessage(message).then(
            message => {
                console.log("Message sent successfully:", message);
            }, error => {
                console.log("Message sending failed with error:", error);
            }
        );
    }

    // send media messages like : (images)
    const sendMediaMessageTo = (uid) => {
        let receiverID = uid;
        let messageType = CometChat.MESSAGE_TYPE.FILE;
        let receiverType = CometChat.RECEIVER_TYPE.USER;
        let mediaMessageInfo = new CometChat.MediaMessage(receiverID, mediaMessage, messageType, receiverType);
        mediaMessage.setCaption("This is the caption")

        CometChat.sendMediaMessage(mediaMessageInfo).then(
            message => {
                console.log("Media message sent successfully", message);
            }, error => {
                console.log("Media message sending failed with error", error);
            }
        );
    }


    useEffect(() => {

    }, [])

    return (
        <div className='Chat'>
            <h1>Chat-{username}</h1>
            <hr color='blue' />
            <input placeholder='Enter your message here' value={textMessage} onChange={(e) => setTextMessage(e.target.value)} />
            <br />
            <p>Send to :-</p>
            {username == "Captain America" ? '' : <button onClick={() => sendMessageTo("superhero2")}>Captain America</button>}
            {username == 'Spiderman' ? '' : <button onClick={() => sendMessageTo("superhero3")}>Spiderman</button>}
            {username == 'Wolverine' ? '' : <button onClick={() => sendMessageTo("superhero4")}>Wolverine</button>}
            {username == 'Iron Man' ? '' : <button onClick={() => sendMessageTo("superhero1")}>Iron Man</button>}
            <hr color="blue" />
            <input type="file" onChange={(e) => setMediaMessage(e.target.files[0])} />
            <p>Send to :-</p>
            {username == "Captain America" ? '' : <button onClick={() => sendMediaMessageTo("superhero2")}>Captain America</button>}
            {username == 'Spiderman' ? '' : <button onClick={() => sendMediaMessageTo("superhero3")}>Spiderman</button>}
            {username == 'Wolverine' ? '' : <button onClick={() => sendMediaMessageTo("superhero4")}>Wolverine</button>}
            {username == 'Iron Man' ? '' : <button onClick={() => sendMediaMessageTo("superhero1")}>Iron Man</button>}
        </div>
    )
}

export default Chat;