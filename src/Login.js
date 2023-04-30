import React, {Component} from 'react'

export default class Section extends Component {
    render() {
      return (
        <div className="container">
        <div className="card">
            <div className="card-body bg-dark text-light rounded text-center">
                <h3>Log In</h3>
                <div className="form-group">
                    <div>
                    <label for="email-input">Email</label>
                    </div>
                    <input type="email" id="email-input" placeholder="Email Address" />
                    <div>
                    <br />  
                    <label for="password-input">Password</label>
                    </div>
                    <input type="password" id="password-input" placeholder="Password" />
                    <div>
                    <button type="submit" id="login-btn" className="btn btn-outline-info mt-2">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>  
      )
    }
  }