import ReactDOM from "react-dom";
import ProFileDetails from "./components/user/ProfileDetails";
import './index.css';
// import App from './App';
import React, { Component } from 'react';
import axios from 'axios';
// functional component

function ProfileMenu(props) {
  let { changeMenu } = props;
  return (
    <div className="profile-menu">

      <div className="suggestion" onClick={() => {
        changeMenu("suggestion")
      }}>suggestion</div>
      <div className="request" onClick={() => {
        changeMenu("request")
      }}> request</div>
      <div className="follower" onClick={() => {
        changeMenu("followers")
      }}>follower</div>
    </div>
  )
}

function Profile(props) {
  return (
    <div className="profile">
      <ProFileDetails></ProFileDetails>
      <ProfileMenu changeMenu={props.changeMenu}></ProfileMenu>
    </div>)
}

class UserView extends Component {
  state = {
    cMenu: "suggestion",
    list: []
  }
  changeMenu = async (nMenu) => {
    //  get followers of current user 
    // state 
    //  request => get followers_id
    let obj = await axios.get("/api/v1/users/followreq/77c3d317-ece3-40e9-bbc8-4262e84f3b6c");
    let uFollArr = [];
    if (nMenu === "followers") {
      // console.log(uFollArr);
      uFollArr = obj.data.message.filter(follower => follower.is_pending === 0 );

    } else if (nMenu === "request") {

      uFollArr = obj.data.message
        .filter(follower => follower.is_pending === 1);
    }
    this.setState({
      cMenu: nMenu,
      list: uFollArr
    })
    // follower_id => user => details
  }
  render() {
    return (<div className="userView">
      <Profile changeMenu={this.changeMenu}></Profile>
      <MenuList list={this.state.list}></MenuList>
    </div>)
  }
}

function MenuList(props) {
  // req => class based 
  let { list } = props;
  return (<div className="menu-list">{
    list.map((follower) => {
      return (<div >
        <img src={follower.p_img_url} alt="profile-img"></img>
        <div> {follower.email_id}</div>
        <div>{follower.handle}</div>
      </div>)
    })
  }</div>)
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
ReactDOM.render(<App />, document.getElementById('root'));