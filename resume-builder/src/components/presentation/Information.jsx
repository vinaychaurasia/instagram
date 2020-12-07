import React from 'react';

function Information() {
    return(
        <React.Fragment>
            <form>
                <input type="text" name="fname" placeholder="First Name"></input>
                <input type="text" name="sname" placeholder="Second Name"></input>
                <input type="text" name="email" placeholder="Email Address"></input>
                <input type="password" name="password" placeholder="Password"></input>
            </form>
        </React.Fragment>   
    )
}

export default Information;