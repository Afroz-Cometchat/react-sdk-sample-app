import { useEffect, useState } from 'react';
import { CometChat } from '@cometchat/chat-sdk-javascript';

const Chat = () => {
    const username = localStorage.getItem("username")
    const [textMessage, setTextMessage] = useState('')
    const [mediaMessage, setMediaMessage] = useState(false)
    const [mediaCaption, setMediaCaption] = useState('')
    const [mediaTags, setMediaTags] = useState('');

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
        mediaMessageInfo.setCaption(mediaCaption ? mediaCaption : null);
        let tags = mediaTags.split(", ")
        mediaMessageInfo.setTags(tags);

        CometChat.sendMediaMessage(mediaMessageInfo).then(
            message => {
                console.log("Media message sent successfully", message);
            }, error => {
                console.log("Media message sending failed with error", error);
            }
        );
    }


    useEffect(() => {
        let listenerID = new Date().getTime();

        CometChat.addMessageListener(
            listenerID,
            new CometChat.MessageListener({
                onTextMessageReceived: textMessage => {
                    console.log("Text message received successfully", textMessage);
                },
                onMediaMessageReceived: mediaMessage => {
                    console.log("Media message received successfully", mediaMessage);
                },
                onCustomMessageReceived: customMessage => {
                    console.log("Custom message received successfully", customMessage);
                }
            })
        );
    }, [])

    return (
        <div className='Chat'>
            <h1>Chat-{username}</h1>
            <hr color='blue' />
            <input placeholder='Enter your message here' value={textMessage} onChange={(e) => setTextMessage(e.target.value)} />
            <br />
            <p>Send to :-</p>
            {username === "Captain America" ? '' : <button onClick={() => sendMessageTo("superhero2")}>Captain America</button>}
            {username === 'Spiderman' ? '' : <button onClick={() => sendMessageTo("superhero3")}>Spiderman</button>}
            {username === 'Wolverine' ? '' : <button onClick={() => sendMessageTo("superhero4")}>Wolverine</button>}
            {username === 'Iron Man' ? '' : <button onClick={() => sendMessageTo("superhero1")}>Iron Man</button>}
            <hr color="blue" />
            <input type="file" onChange={(e) => setMediaMessage(e.target.files[0])} />
            <input placeholder='Caption' type='text' value={mediaCaption} onChange={(e) => setMediaCaption(e.target.value)} />
            <input type='text' placeholder='Tags' value={mediaTags} onChange={(e) => setMediaTags(e.target.value)} />
            <p>Send to :-</p>
            {username === "Captain America" ? '' : <button onClick={() => sendMediaMessageTo("superhero2")}>Captain America</button>}
            {username === 'Spiderman' ? '' : <button onClick={() => sendMediaMessageTo("superhero3")}>Spiderman</button>}
            {username === 'Wolverine' ? '' : <button onClick={() => sendMediaMessageTo("superhero4")}>Wolverine</button>}
            {username === 'Iron Man' ? '' : <button onClick={() => sendMediaMessageTo("superhero1")}>Iron Man</button>}
        </div>
    )
}

export default Chat;