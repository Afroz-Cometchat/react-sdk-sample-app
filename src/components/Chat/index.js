// import { useEffect, useState, useRef } from 'react';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { userInfo } from '../../credentials';
// import { CometChatCalls } from '@cometchat/calls-sdk-javascript';

const Chat = () => {
    // const username = localStorage.getItem("username")
    // const callLayoutContainer = useRef();
    // const [textMessage, setTextMessage] = useState('');
    // const [mediaMessage, setMediaMessage] = useState(false);
    // const [mediaCaption, setMediaCaption] = useState('');
    // const [mediaTags, setMediaTags] = useState('');
    // const [searchMessage, setSearchMessage] = useState('');
    // const [unreadMessagesCount, setUnreadMessagesCount] = useState('');
    // // const [callType, setCallType] = useState('audio');
    // const [isOngoingCall, setIsOngoingCall] = useState(false);
    // const [isIncomingCall, setIsIncomingCall] = useState(false);
    // const [callUID, setCallUID] = useState(null);
    // const [callSessionId, setCallSessionId] = useState(null);
    // const [callToken, setCallToken] = useState(null);

    // send text messages
    // const sendMessageTo = (uid) => {
    //     let receiverID = uid;
    //     let messageText = textMessage;
    //     let receiverType = CometChat.RECEIVER_TYPE.USER;
    //     let message = new CometChat.TextMessage(receiverID, messageText, receiverType);

    //     CometChat.sendMessage(message).then(
    //         message => {
    //             console.log("Message sent successfully:", message);
    //         }, error => {
    //             console.log("Message sending failed with error:", error);
    //         }
    //     );
    // }

    // // send media messages like : (images)
    // const sendMediaMessageTo = (uid) => {
    //     let receiverID = uid;
    //     let messageType = CometChat.MESSAGE_TYPE.FILE;
    //     let receiverType = CometChat.RECEIVER_TYPE.USER;
    //     let mediaMessageInfo = new CometChat.MediaMessage(receiverID, mediaMessage, messageType, receiverType);
    //     mediaMessageInfo.setCaption(mediaCaption ? mediaCaption : null);
    //     let tags = mediaTags.split(", ")
    //     mediaMessageInfo.setTags(tags);

    //     CometChat.sendMediaMessage(mediaMessageInfo).then(
    //         message => {
    //             console.log("Media message sent successfully", message);
    //         }, error => {
    //             console.log("Media message sending failed with error", error);
    //         }
    //     );
    // }

    // // fetch missed messages of a particular one-on-one conversation
    // const fetchMissedMessages = async (uid) => {
    //     const UID = uid;
    //     const limit = 30;
    //     const latestId = await CometChat.getLastDeliveredMessageId();

    //     const messagesRequest = new CometChat.MessagesRequestBuilder()
    //         .setUID(UID)
    //         .setMessageId(latestId)
    //         .setLimit(limit)
    //         .build();

    //     messagesRequest.fetchNext().then(
    //         messages => {
    //             console.log("Message list fetched:", messages);
    //         }, error => {
    //             console.log("Message fetching failed with error:", error);
    //         }
    //     );
    // }

    // // fetch message history of a particular one-on-one conversation
    // const fetchHistory = (uid) => {
    //     const UID = uid;
    //     const limit = 30;
    //     const messagesRequest = new CometChat.MessagesRequestBuilder()
    //         .setUID(UID)
    //         .setLimit(limit)
    //         .build();

    //     messagesRequest.fetchPrevious().then(
    //         messages => {
    //             console.log("Message list fetched:", messages);
    //         }, error => {
    //             console.log("Message fetching failed with error:", error);
    //         }
    //     );
    // }

    // // fetch messages history in a particular one-on-one conversation
    // const fetchKeywordHistory = (uid) => {
    //     const UID = uid;
    //     const limit = 30;
    //     const searchKeyword = searchMessage;
    //     const messagesRequest = new CometChat.MessagesRequestBuilder()
    //         .setUID(UID)
    //         .setLimit(limit)
    //         .setSearchKeyword(searchKeyword)
    //         .build();

    //     messagesRequest.fetchPrevious().then(
    //         messages => {
    //             console.log("Message list fetched:", messages);
    //             setSearchMessage('')
    //         }, error => {
    //             console.log("Message fetching failed with error:", error);
    //             setSearchMessage('')
    //         }
    //     );
    // }

    // fetch unread messages const of a particular one-on-one conversation
    // const fetchUnreadMessagesCount = (uid) => {
    //     if (uid) {
    //         console.log("in uid");
    //         let UID = uid;
    //         CometChat.getUnreadMessageCountForUser(UID).then(
    //             array => {
    //                 console.log("Message count fetched", array);
    //                 setUnreadMessagesCount(array[`${uid}`]);
    //             }, error => {
    //                 console.log("Error in getting message count", error);
    //             }
    //         );
    //     } else {
    //         console.log("not in uid");
    //         CometChat.getUnreadMessageCount().then(
    //             res => {
    //                 console.log("Messages cound fetched", res);
    //                 let count = 0
    //                 for (let k in res.users) {
    //                     count += res.users[k]
    //                 }
    //                 setUnreadMessagesCount(count)
    //             },
    //             error => {
    //                 console.log("Error in getting messages count", error);
    //             }
    //         )
    //     }
    // }

    // // retrieve single conversation
    // const retrieveSingleConversation = (uid, type) => {
    //     CometChat.getConversation(uid, type).then(
    //         conversation => {
    //             console.log('conversation', conversation);
    //         }, error => {
    //             console.log('error while fetching a conversation', error);
    //         }
    //     );
    // }


    // generate call token
    // const generateCallToken = async (sessionId) => {
    //     const loggedInUser = await CometChat.getLoggedinUser();
    //     if (loggedInUser) {
    //         const authToken = loggedInUser.getAuthToken();
    //         const sessionID = sessionId;

    //         CometChatCalls.generateToken(sessionID, authToken).then(
    //             (res) => {
    //                 console.log("Call token fetched: ", res.token);
    //                 setCallToken(res.token);
    //             },
    //             (err) => {
    //                 console.log("Generating call token failed with error: ", err);
    //             }
    //         );
    //     }
    // }

    // make an audio call to a particular user
    // const makeAudioDefaultCallTo = (uid) => {
    //     const receiverID = uid;
    //     const callType = CometChat.CALL_TYPE.AUDIO;
    //     const receiverType = CometChat.RECEIVER_TYPE.USER;

    //     const call = new CometChat.Call(receiverID, callType, receiverType);

    //     CometChat.initiateCall(call).then(
    //         outGoingCall => {
    //             console.log("Call initiated successfully:", outGoingCall);
    //             setCallSessionId(outGoingCall.sessionId)
    //             generateCallToken(outGoingCall.sessionId)
    //         }, error => {
    //             console.log("Call initialization failed with exception:", error);
    //         }
    //     );
    // }

    // // reject incoming call
    // const rejectIncomingCall = () => {
    //     const sessionID = callSessionId;
    //     const status = CometChat.CALL_STATUS.REJECTED;

    //     CometChat.rejectCall(sessionID, status).then(
    //         call => {
    //             console.log("Call rejected successfully", call);
    //             setIsIncomingCall(false);
    //         }, error => {
    //             console.log("Call rejection failed with error:", error);
    //         }
    //     );
    // }

    // // accept incoming call
    // const acceptIncomingCall = () => {
    //     const sessionID = callSessionId;

    //     CometChat.acceptCall(sessionID).then(
    //         call => {
    //             console.log("Call accepted successfully:", call);
    //         }, error => {
    //             console.log("Call acceptance failed with error", error);
    //         }
    //     );
    // }

    // call listeners
    // const callListeners = (listId) => {
    //     CometChat.addCallListener(
    //         listId,
    //         new CometChat.CallListener({
    //             onIncomingCallReceived: (call) => {
    //                 console.log("Incoming call:", call);
    //                 setIsIncomingCall(true);
    //                 setCallSessionId(call.sessionId)
    //             },
    //             onOutgoingCallAccepted: (call) => {
    //                 console.log("Outgoing call accepted:", call);
    //             },
    //             onOutgoingCallRejected: (call) => {
    //                 console.log("Outgoing call rejected:", call);
    //             },
    //             onIncomingCallCancelled: (call) => {
    //                 console.log("Incoming call calcelled:", call);
    //                 setIsIncomingCall(false);
    //                 setCallSessionId(null);
    //             },
    //             onCallEndedMessageReceived: (call) => {
    //                 console.log("CallEnded Message:", call);
    //                 setCallSessionId(false);
    //                 setIsIncomingCall(false);
    //                 CometChat.clearActiveCall();
    //                 CometChatCalls.endSession();
    //             }
    //         })
    //     );
    // }

    // useEffect(() => {
    //     let listenerID = new Date().getTime();

    //     // initialize calls
    //     let appID = userInfo.appId;
    //     let region = userInfo.region;

    //     const callAppSetting = new CometChatCalls.CallAppSettingsBuilder()
    //         .setAppId(appID)
    //         .setRegion(region)
    //         .build();

    //     CometChatCalls.init(callAppSetting).then(
    //         () => {
    //             console.log('CometChatCalls initialization completed successfully');
    //         },
    //         error => {
    //             console.log('CometChatCalls initialization failed with error:', error);
    //         },
    //     );

    //     // add message listeners
    //     CometChat.addMessageListener(
    //         listenerID,
    //         new CometChat.MessageListener({
    //             onTextMessageReceived: textMessage => {
    //                 console.log("Text message received successfully", textMessage);
    //             },
    //             onMediaMessageReceived: mediaMessage => {
    //                 console.log("Media message received successfully", mediaMessage);
    //             },
    //             onCustomMessageReceived: customMessage => {
    //                 console.log("Custom message received successfully", customMessage);
    //             }
    //         })
    //     );

    //     // add call listeners
    //     callListeners(listenerID)
    // }, [])

    // comethcat outgoing call listeners builder
    // const setOutGoingCallListeners = () => {
    //     const defaultLayout = true;
    //     const audioOnly = true;

    //     const callSettings = new CometChatCalls.CallSettingsBuilder()
    //         .enableDefaultLayout(defaultLayout)
    //         .setIsAudioOnlyCall(audioOnly)
    //         .setCallListener(
    //             new CometChatCalls.OngoingCallListener({
    //                 onUserListUpdated: (userList) => {
    //                     console.log("user list:", userList);
    //                 },
    //                 onCallEnded: () => {
    //                     console.log("Call ended");
    //                 },
    //                 onError: (error) => {
    //                     console.log("Error :", error);
    //                 },
    //                 onMediaDeviceListUpdated: (deviceList) => {
    //                     console.log("Device List:", deviceList);
    //                 },
    //                 onUserMuted: (event) => {
    //                     // This event will work in JS SDK v3.0.2-beta1 & later.
    //                     console.log("Listener => onUserMuted:", {
    //                         userMuted: event.muted,
    //                         userMutedBy: event.mutedBy,
    //                     });
    //                 },
    //                 onScreenShareStarted: () => {
    //                     // This event will work in JS SDK v3.0.3 & later.
    //                     console.log("Screen sharing started.");
    //                 },
    //                 onScreenShareStopped: () => {
    //                     // This event will work in JS SDK v3.0.3 & later.
    //                     console.log("Screen sharing stopped.");
    //                 },
    //                 onCallSwitchedToVideo: (event) => {
    //                     // This event will work in JS SDK v3.0.8 & later.
    //                     console.log("call switched to video:", {
    //                         sessionId: event.sessionId,
    //                         callSwitchInitiatedBy: event.initiator,
    //                         callSwitchAcceptedBy: event.responder,
    //                     });
    //                 },
    //                 onUserJoined: (user) => console.log("event => onUserJoined", user),
    //                 onUserLeft: (user) => console.log("event => onUserLeft", user),
    //             })
    //         )
    //         .build();

    //     const htmlElement = document.getElementById("container");
    //     CometChatCalls.startSession(
    //         callToken,
    //         callSettings,
    //         htmlElement
    //     );
    // }

    // call event listeners
    // const eventCallListeners = () => {
    //     useEffect(() => {
    //         CometChatCalls.addCallEventListener('UNIQUE_ID', {
    //             onUserJoined: user => {
    //                 console.log("user joined:", user);
    //             },
    //             onUserLeft: user => {
    //                 console.log("user left:", user);
    //             },
    //             onUserListUpdated: userList => {
    //                 console.log("user list:", userList);
    //             },
    //             onCallEnded: () => {
    //                 console.log("Call ended");
    //             },
    //             onCallEndButtonPressed: () => {
    //                 console.log("End Call button pressed");
    //             },
    //             onError: error => {
    //                 console.log('Call Error: ', error);
    //             },
    //             onAudioModesUpdated: (audioModes) => {
    //                 console.log("audio modes:", audioModes);
    //             },
    //             onUserMuted: (event) => {
    //                 console.log("user muted:", event);
    //             }
    //         });
    //         return () => CometChatCalls.removeCallEventListener('UNIQUE_ID')
    //     }, [])
    // }

    // set outgoing callsettingbuilder
    // useEffect(() => {
    //     if (callToken)
    //         setOutGoingCallListeners()
    // }, [callToken])

    return (
        // <div className='Chat'>
        //     <h1><span style={{ color: "purple" }}>Cometchat-</span><u>{username}</u></h1>
        //     <hr color='blue' />
        //     {/* send text messages */}
        //     <div className='text_messages'>
        //         <h2>Send Text Messages</h2>
        //         <input placeholder='Enter your message here' value={textMessage} onChange={(e) => setTextMessage(e.target.value)} />
        //         <br />
        //         <p>Send to :-</p>
        //         {username === "Captain America" ? '' : <button onClick={() => sendMessageTo("superhero2")}>Captain America</button>}
        //         {username === 'Spiderman' ? '' : <button onClick={() => sendMessageTo("superhero3")}>Spiderman</button>}
        //         {username === 'Wolverine' ? '' : <button onClick={() => sendMessageTo("superhero4")}>Wolverine</button>}
        //         {username === 'Iron Man' ? '' : <button onClick={() => sendMessageTo("superhero1")}>Iron Man</button>}
        //     </div>
        //     <hr color="blue" />
        //     {/* send media messages */}
        //     <div className='media_messages'>
        //         <h2>Send Media Messages</h2>
        //         <input type="file" onChange={(e) => setMediaMessage(e.target.files[0])} />
        //         <input placeholder='Caption' type='text' value={mediaCaption} onChange={(e) => setMediaCaption(e.target.value)} />
        //         <input type='text' placeholder='Tags. split by ","' value={mediaTags} onChange={(e) => setMediaTags(e.target.value)} />
        //         <p>Send to :-</p>
        //         {username === "Captain America" ? '' : <button onClick={() => sendMediaMessageTo("superhero2")}>Captain America</button>}
        //         {username === 'Spiderman' ? '' : <button onClick={() => sendMediaMessageTo("superhero3")}>Spiderman</button>}
        //         {username === 'Wolverine' ? '' : <button onClick={() => sendMediaMessageTo("superhero4")}>Wolverine</button>}
        //         {username === 'Iron Man' ? '' : <button onClick={() => sendMediaMessageTo("superhero1")}>Iron Man</button>}
        //     </div>
        //     <hr color="blue" />
        //     {/* Fetch missed messages from a particual user */}
        //     <div className='fetch_missed_messages'>
        //         <h2>Fetch missed messages from :-</h2>
        //         {username === "Captain America" ? '' : <button onClick={() => fetchMissedMessages("superhero2")}>Captain America</button>}
        //         {username === 'Spiderman' ? '' : <button onClick={() => fetchMissedMessages("superhero3")}>Spiderman</button>}
        //         {username === 'Wolverine' ? '' : <button onClick={() => fetchMissedMessages("superhero4")}>Wolverine</button>}
        //         {username === 'Iron Man' ? '' : <button onClick={() => fetchMissedMessages("superhero1")}>Iron Man</button>}
        //     </div>
        //     <hr color="blue" />
        //     {/* fetch messages hisroty of a particular user */}
        //     <div className='fetch_message_history'>
        //         <h2>Fetch messages history of :-</h2>
        //         {username === "Captain America" ? '' : <button onClick={() => fetchHistory("superhero2")}>Captain America</button>}
        //         {username === 'Spiderman' ? '' : <button onClick={() => fetchHistory("superhero3")}>Spiderman</button>}
        //         {username === 'Wolverine' ? '' : <button onClick={() => fetchHistory("superhero4")}>Wolverine</button>}
        //         {username === 'Iron Man' ? '' : <button onClick={() => fetchHistory("superhero1")}>Iron Man</button>}
        //     </div>
        //     <hr color='blue' />
        //     {/* search message from a particular one-on-one converstaion */}
        //     <div className='fetch_keyword_history'>
        //         <input type='text' placeholder='search...' value={searchMessage} onChange={(e) => setSearchMessage(e.target.value)} />
        //         <h2>Search message from :-</h2>
        //         {username === "Captain America" ? '' : <button onClick={() => fetchKeywordHistory("superhero2")}>Captain America</button>}
        //         {username === 'Spiderman' ? '' : <button onClick={() => fetchKeywordHistory("superhero3")}>Spiderman</button>}
        //         {username === 'Wolverine' ? '' : <button onClick={() => fetchKeywordHistory("superhero4")}>Wolverine</button>}
        //         {username === 'Iron Man' ? '' : <button onClick={() => fetchKeywordHistory("superhero1")}>Iron Man</button>}
        //     </div>
        //     <hr color='blue' />
        //     {/* fetch unread messages count to a particular one-on-one converstation */}
        //     <div className='fetch_unread_messages_count'>
        //         <h2>Fetch unread messages count of a particual one-on-one conversation:-</h2>
        //         <p>{unreadMessagesCount ? `Count:- ${unreadMessagesCount}` : 'No unread messages found'}</p>
        //         {username === "Captain America" ? '' : <button onClick={() => fetchUnreadMessagesCount("superhero2")}>Captain America</button>}
        //         {username === 'Spiderman' ? '' : <button onClick={() => fetchUnreadMessagesCount("superhero3")}>Spiderman</button>}
        //         {username === 'Wolverine' ? '' : <button onClick={() => fetchUnreadMessagesCount("superhero4")}>Wolverine</button>}
        //         {username === 'Iron Man' ? '' : <button onClick={() => fetchUnreadMessagesCount("superhero1")}>Iron Man</button>}
        //         <button style={{
        //             backgroundColor: "#000",
        //             color: "#fff"
        //         }} onClick={() => fetchUnreadMessagesCount(false)}>Count all</button>
        //     </div>
        //     <hr color='blue' />
        //     {/* retrieve single conversation */}
        //     <div className='retrieve_single_conversation'>
        //         <h2>Retrieve single conversation with :- </h2>
        //         {username === "Captain America" ? '' : <button onClick={() => retrieveSingleConversation("superhero2", "user")}>Captain America</button>}
        //         {username === 'Spiderman' ? '' : <button onClick={() => retrieveSingleConversation("superhero3", "user")}>Spiderman</button>}
        //         {username === 'Wolverine' ? '' : <button onClick={() => retrieveSingleConversation("superhero4", "user")}>Wolverine</button>}
        //         {username === 'Iron Man' ? '' : <button onClick={() => retrieveSingleConversation("superhero1", "user")}>Iron Man</button>}
        //     </div>
        //     <hr color='blue' />
        //     {/* make a audio call */}
        //     <div className='make_audio_call'>
        //         <h2>Make default audio call to :- </h2>
        //         {/* calling box */}
        //         {isIncomingCall ? <div className='incoming_call_box'>
        //             <p>Calling - {callUID} </p>
        //             <button style={{
        //                 backgroundColor: "lime"
        //             }} onClick={acceptIncomingCall}>ACCEPT</button>
        //             <button style={{
        //                 backgroundColor: "red",
        //                 color: "#fff"
        //             }} onClick={rejectIncomingCall}>CANCEL</button>
        //         </div> : null}

        //         {username === "Captain America" ? '' : <button onClick={() => makeAudioDefaultCallTo("superhero2")}>Captain America</button>}
        //         {username === 'Spiderman' ? '' : <button onClick={() => makeAudioDefaultCallTo("superhero3")}>Spiderman</button>}
        //         {username === 'Wolverine' ? '' : <button onClick={() => makeAudioDefaultCallTo("superhero4")}>Wolverine</button>}
        //         {username === 'Iron Man' ? '' : <button onClick={() => makeAudioDefaultCallTo("superhero1")}>Iron Man</button>}
        //     </div>
        //     <hr color='blue' />
        //     <div ref={callLayoutContainer} id='container'></div>
        // </div>
        <div>Hii</div>
    )
}

export default Chat;