import React, { Component } from 'react'

class Login extends Component {
     render() {
         return(
            <div className="panel-footer">
                <div className="input-group">
                    <input id="username-text" type="text" className="form-control username" placeholder="username" />
                    <input id="password-text" type="text" className="form-control password" placeholder="password" />
                    <span className="input-group-btn">
                        <button className="btn btn-primary btn-sm" id="btn-chat">
                        submit</button>
                    </span>
                </div>
            </div>
         );
     }
}

export default Login