import { useEffect, useState } from 'react';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { superhero1, userInfo } from '../../credentials';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('');

    // login user using username and authkey (not secure)
    const loginUser = (e) => {
        e.preventDefault()
        CometChat.getLoggedinUser()
            .then((res) => {
                if (!res) {
                    CometChat.login(userName, userInfo.authKey)
                }
            }, (error) => console.log("user not logged in already", error))
    }

    // login user using authtoken (recommended)
    const loginUserWithAuthToken = (e) => {
        CometChat.getLoggedinUser()
            .then((res) => {
                if (!res) {
                    CometChat.login(superhero1.authToken)
                    // .then((res) => console.log("login successfull: ", res), (error) => console.log("login failed Error: ", error))
                }
            }, (error) => console.log("user not logged in already", error))
    }

    // logout user
    const logout = () => {
        CometChat.logout()
    }

    // establish login listeners
    useEffect(() => {
        let listenerID = new Date().getTime();
        CometChat.addLoginListener(
            listenerID,
            new CometChat.LoginListener({
                loginSuccess: (e) => {
                    console.log("LoginListener :: loginSuccess", e);
                    localStorage.setItem("username", e.name);
                },
                loginFailure: (e) => {
                    console.log("LoginListener :: loginFailure", e);
                },
                logoutSuccess: () => {
                    console.log("LoginListener :: logoutSuccess");
                },
                logoutFailure: (e) => {
                    console.log("LoginListener :: logoutFailure", e);
                }
            })
        );
    }, [])

    return (
        <div className="Home">
            <h1>Cometchat</h1>
            <hr />
            {/* login using authkey */}
            <form onSubmit={loginUser}>
                <p>Login using AuthKey</p>
                <input type='text' placeholder='Enter username' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button type='submit'>LOGIN</button>
            </form>
            <hr />
            {/* login using authtoken */}
            <p>Login using authToken for ironman </p>
            <button onClick={loginUserWithAuthToken}>LOGIN</button>
            <hr />
            <button onClick={logout}>LOGOUT</button>
            <hr color='red' />
            <button onClick={() => navigate("/chats")}>Go to Chats</button>
        </div>
    );
}

export default Home;
