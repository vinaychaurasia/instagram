import React from 'react';

function Register(){
    return(
        <div>
            <form className="container">
                <input type="text" name="fname" placeholder="First Name"></input>
                <br></br>
                <input type="text" name="sname" placeholder="Second Name"></input>
                <br></br>
                <input type="text" name="email" placeholder="Email Address"></input>
                <br></br>
                <input type="password" name="password" placeholder="Password"></input>
            </form>
        </div>
    )
}

export default Register;