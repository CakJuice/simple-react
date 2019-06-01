import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col col-lg-4 col-md-6 col-8">
            <div className="text-center py-2">
              <Link to="/"><i className="fas fa-home"></i> Back to homepage</Link>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Login</h3>
                <form action="POST" onSubmit={this.submitForm} noValidate>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" onChange={this.changeUsername} value={this.state.username} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" onChange={this.changePassword} value={this.state.password} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
              </div>
              <div className="card-footer text-muted text-center">
                Not registered yet? <a href="#">Sign up</a>
              </div>
            </div>
            <div className="text-center py-2">
              <small>
                <a href="#" className="text-muted"><i className="fas fa-key"></i> Forgot your password?</a>
              </small>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default Login;
