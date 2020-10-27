// import React from 'react';
import React, { Component } from 'react';
import axios from "axios";
class ProFileDetails extends Component {
    // 1. 
    state = {
        src: "",
        email: "",
        handle: "",
        post: "",
        followers: "",
        following: "",
    }
    // 3. 
    componentDidMount(){
        axios.get("/api/v1/users/4fbda461-0e3a-4f4b-ab93-829a064d57d8").then((res) => {
            let {email_id, handle, src} = res.data.user;
            this.setState({
                email: email_id,
                handle: handle,
                src: "data:image/png;base64,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"
            })
        })
    }
    
    // 2. ,4 
    render() {
        let { src, email, handle, post, followers, following } = this.state;
        return (
            <div className="profile-details">
                <div className="profile-subpart">
                    <h1>PROFILE</h1>
                    <img src={src} alt="profile-img" />
                    <div className="email">{email}</div>
                    <div className="handle">{handle}</div>
                </div>
                <div className="profile-stats">
                    <div className="div post">
                        <p>{post}</p>
                        <div>POST</div>
                    </div>

                    <div className="div follower">
                        <p>{followers}</p>
                        <div>Follower</div>

                    </div>
                    <div className="div follwing">
                        <p>{following}</p>
                        <div>Following</div>
                    </div>
                </div>

            </div>)

    }
}

export default ProFileDetails;