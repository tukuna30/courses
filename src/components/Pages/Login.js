import React from 'react';
import './login.css';

/*const Login = () => {
    /*return <div>Login to the App222</div>;*/
   /* return (
        <div  id="sign-in">
            <div id="sign-in-button" data-width="450" data-height="100" className="g-signin2" data-onsuccess="onSignIn" />
        </div>
    );
};

export default Login;*/

export default function Login(props) {
    window.onSignIn = function data(googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log(`ID: ${profile.getId()}`); // Do not send to your backend! Use an ID token instead.
      console.log(`Name: ${profile.getName()}`);
      console.log(`Image URL: ${profile.getImageUrl()}`);
      console.log(`Email: ${profile.getEmail()}`); // This is null if the 'email' scope is not present.
   



     /* setLoggedIn(true);
     setCurrentUser({
        name: profile.getName(),
        imageUrl: profile.getImageUrl()
      });*/

     /* props.setLoggedIn(true);
      props.setCurrentUser({
        name: profile.getName(),
        imageUrl: profile.getImageUrl()
      });*/

    };
  
    return (
        <div>
        <div>Login to the App</div>
      <div> 
        <div id="sign-in-button" data-width="450" data-height="100" className="g-signin2" data-onsuccess="onSignIn" />
      </div>
      </div>
    );
  }

