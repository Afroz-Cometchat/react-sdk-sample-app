import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Chat from './components/Chat';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { userInfo } from './credentials';
import GroupChats from './components/GroupChats';

function App() {

    // initialize Cometchat
    useEffect(() => {
      let appID = userInfo.appId;
      let region = userInfo.region;
      let appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion(region)
        .autoEstablishSocketConnection(true)
        .build();
      CometChat.init(appID, appSetting).then(
        () => {
          console.log("Initialization completed successfully");
        }, error => {
          console.log("Initialization failed with error:", error);
        }
      );
    }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/group-chats" element={<GroupChats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
