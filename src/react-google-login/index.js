import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

function ReactGoogleLogin() {
    const [profile, setProfile] = useState();
    const clientId = '43634364208-56dpbe39cgo5f7n8lccem4sj9rg53h33.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        localStorage.setItem('user', JSON.stringify(res?.profileObj));
        setProfile(res?.profileObj);
        console.log("Localstorage:", JSON.parse(localStorage.getItem("user")));
    };
    useEffect(() => {
        console.log("Localstorage:", JSON.parse(localStorage.getItem("users")));
        if (localStorage.getItem("user")) {
          setProfile(JSON.parse(localStorage.getItem("user")));
        }
        }, []);

        const { name, googleId, imageUrl, email } = profile || {};

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        localStorage.clear();
    };

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {googleId ? (
                <div>
                    <img src={imageUrl} alt="user_image" />
                    <h3>User Logged in</h3>
                    <p>Name: {name}</p>
                    <p>Email Address: {email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy='single_host_origin'
                    isSignedIn={true}
                />
            )}
        </div>
    );
}
export default ReactGoogleLogin;