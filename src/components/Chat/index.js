import { useEffect, useState } from 'react';
import { CometChat } from '@cometchat/chat-sdk-javascript';

const Chat = () => {
    const username = localStorage.getItem("username")
    const [textMessage, setTextMessage] = useState('');
    const [mediaMessage, setMediaMessage] = useState(false);
    const [mediaCaption, setMediaCaption] = useState('');
    const [mediaTags, setMediaTags] = useState('');
    const [searchMessage, setSearchMessage] = useState('');
    const [unreadMessagesCount, setUnreadMessagesCount] = useState('');

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

    // fetch missed messages of a particular one-on-one conversation
    const fetchMissedMessages = async (uid) => {
        const UID = uid;
        const limit = 30;
        const latestId = await CometChat.getLastDeliveredMessageId();

        const messagesRequest = new CometChat.MessagesRequestBuilder()
            .setUID(UID)
            .setMessageId(latestId)
            .setLimit(limit)
            .build();

        messagesRequest.fetchNext().then(
            messages => {
                console.log("Message list fetched:", messages);
            }, error => {
                console.log("Message fetching failed with error:", error);
            }
        );
    }

    // fetch message history of a particular one-on-one conversation
    const fetchHistory = (uid) => {
        const UID = uid;
        const limit = 30;
        const messagesRequest = new CometChat.MessagesRequestBuilder()
            .setUID(UID)
            .setLimit(limit)
            .build();

        messagesRequest.fetchPrevious().then(
            messages => {
                console.log("Message list fetched:", messages);
            }, error => {
                console.log("Message fetching failed with error:", error);
            }
        );
    }

    // fetch messages history in a particular one-on-one conversation
    const fetchKeywordHistory = (uid) => {
        const UID = uid;
        const limit = 30;
        const searchKeyword = searchMessage;
        const messagesRequest = new CometChat.MessagesRequestBuilder()
            .setUID(UID)
            .setLimit(limit)
            .setSearchKeyword(searchKeyword)
            .build();

        messagesRequest.fetchPrevious().then(
            messages => {
                console.log("Message list fetched:", messages);
                setSearchMessage('')
            }, error => {
                console.log("Message fetching failed with error:", error);
                setSearchMessage('')
            }
        );
    }

    // fetch unread messages const of a particular one-on-one conversation
    const fetchUnreadMessagesCount = (uid) => {
        if (uid) {
            console.log("in uid");
            let UID = uid;
            CometChat.getUnreadMessageCountForUser(UID).then(
                array => {
                    console.log("Message count fetched", array);
                    setUnreadMessagesCount(array[`${uid}`]);
                }, error => {
                    console.log("Error in getting message count", error);
                }
            );
        } else {
            console.log("not in uid");
            CometChat.getUnreadMessageCount().then(
                res => {
                    console.log("Messages cound fetched", res);
                    let count = 0
                    for(let k in res.users){
                        count += res.users[k]
                    }
                    setUnreadMessagesCount(count)
                },
                error => {
                    console.log("Error in getting messages count", error);
                }
            )
        }
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
            <h1><span style={{ color: "purple" }}>Cometchat-</span><u>{username}</u></h1>
            <hr color='blue' />
            {/* send text messages */}
            <div className='text_messages'>
                <h2>Send Text Messages</h2>
                <input placeholder='Enter your message here' value={textMessage} onChange={(e) => setTextMessage(e.target.value)} />
                <br />
                <p>Send to :-</p>
                {username === "Captain America" ? '' : <button onClick={() => sendMessageTo("superhero2")}>Captain America</button>}
                {username === 'Spiderman' ? '' : <button onClick={() => sendMessageTo("superhero3")}>Spiderman</button>}
                {username === 'Wolverine' ? '' : <button onClick={() => sendMessageTo("superhero4")}>Wolverine</button>}
                {username === 'Iron Man' ? '' : <button onClick={() => sendMessageTo("superhero1")}>Iron Man</button>}
            </div>
            <hr color="blue" />
            {/* send media messages */}
            <div className='media_messages'>
                <h2>Send Media Messages</h2>
                <input type="file" onChange={(e) => setMediaMessage(e.target.files[0])} />
                <input placeholder='Caption' type='text' value={mediaCaption} onChange={(e) => setMediaCaption(e.target.value)} />
                <input type='text' placeholder='Tags. split by ","' value={mediaTags} onChange={(e) => setMediaTags(e.target.value)} />
                <p>Send to :-</p>
                {username === "Captain America" ? '' : <button onClick={() => sendMediaMessageTo("superhero2")}>Captain America</button>}
                {username === 'Spiderman' ? '' : <button onClick={() => sendMediaMessageTo("superhero3")}>Spiderman</button>}
                {username === 'Wolverine' ? '' : <button onClick={() => sendMediaMessageTo("superhero4")}>Wolverine</button>}
                {username === 'Iron Man' ? '' : <button onClick={() => sendMediaMessageTo("superhero1")}>Iron Man</button>}
            </div>
            <hr color="blue" />
            {/* Fetch missed messages from a particual user */}
            <div className='fetch_missed_messages'>
                <h2>Fetch missed messages from :-</h2>
                {username === "Captain America" ? '' : <button onClick={() => fetchMissedMessages("superhero2")}>Captain America</button>}
                {username === 'Spiderman' ? '' : <button onClick={() => fetchMissedMessages("superhero3")}>Spiderman</button>}
                {username === 'Wolverine' ? '' : <button onClick={() => fetchMissedMessages("superhero4")}>Wolverine</button>}
                {username === 'Iron Man' ? '' : <button onClick={() => fetchMissedMessages("superhero1")}>Iron Man</button>}
            </div>
            <hr color="blue" />
            {/* fetch messages hisroty of a particular user */}
            <div className='fetch_message_history'>
                <h2>Fetch messages history of :-</h2>
                {username === "Captain America" ? '' : <button onClick={() => fetchHistory("superhero2")}>Captain America</button>}
                {username === 'Spiderman' ? '' : <button onClick={() => fetchHistory("superhero3")}>Spiderman</button>}
                {username === 'Wolverine' ? '' : <button onClick={() => fetchHistory("superhero4")}>Wolverine</button>}
                {username === 'Iron Man' ? '' : <button onClick={() => fetchHistory("superhero1")}>Iron Man</button>}
            </div>
            <hr color='blue' />
            {/* search message from a particular one-on-one converstaion */}
            <div className='fetch_keyword_history'>
                <input type='text' placeholder='search...' value={searchMessage} onChange={(e) => setSearchMessage(e.target.value)} />
                <h2>Search message from :-</h2>
                {username === "Captain America" ? '' : <button onClick={() => fetchKeywordHistory("superhero2")}>Captain America</button>}
                {username === 'Spiderman' ? '' : <button onClick={() => fetchKeywordHistory("superhero3")}>Spiderman</button>}
                {username === 'Wolverine' ? '' : <button onClick={() => fetchKeywordHistory("superhero4")}>Wolverine</button>}
                {username === 'Iron Man' ? '' : <button onClick={() => fetchKeywordHistory("superhero1")}>Iron Man</button>}
            </div>
            <hr color='blue' />
            {/* fetch unread messages count to a particular one-on-one converstation */}
            <div className='fetch_unread_messages_count'>
                <h2>Fetch unread messages count of a particual one-on-one conversation:-</h2>
                <p>{unreadMessagesCount ? `Count:- ${unreadMessagesCount}` : 'No unread messages found'}</p>
                {username === "Captain America" ? '' : <button onClick={() => fetchUnreadMessagesCount("superhero2")}>Captain America</button>}
                {username === 'Spiderman' ? '' : <button onClick={() => fetchUnreadMessagesCount("superhero3")}>Spiderman</button>}
                {username === 'Wolverine' ? '' : <button onClick={() => fetchUnreadMessagesCount("superhero4")}>Wolverine</button>}
                {username === 'Iron Man' ? '' : <button onClick={() => fetchUnreadMessagesCount("superhero1")}>Iron Man</button>}
                <button style={{
                    backgroundColor: "#000",
                    color: "#fff"
                }} onClick={() => fetchUnreadMessagesCount(false)}>Count all</button>
            </div>
            <hr color='blue' />
        </div>
    )
}

export default Chat;