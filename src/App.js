import logo from './logo.svg';
import './App.css';

import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-button'

function App() {

  const responseGoogleSuccess = googleUser => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  const responseGoogleFailure = response => {
    console.log(response);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sign in using Google account to schedule your emails.
        </p>
        <GoogleLogin
          clientId="985876783138-7ajbc0lvbk6dgv8pmbepmlcco68dh087.apps.googleusercontent.com"
          render={renderProps => (
            <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
          )}
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default App;
