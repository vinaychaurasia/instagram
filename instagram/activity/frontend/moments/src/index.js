import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import ProFileDetails from './components/user/ProFileDetails'

function Profile(){
  return (
    <div className="Profile">
      <ProFileDetails></ProFileDetails>
      <div className="profile-menu">Profile Menu</div>
    </div>
  )
}

function UserView(){
  return (
    <div className="userView">
      <Profile></Profile>
      <div className="menu-list">Menu List</div>
    </div>
  )
}

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <UserView></UserView>
        <div className="postView"> PostView</div>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
