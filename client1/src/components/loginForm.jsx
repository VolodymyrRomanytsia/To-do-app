import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {Link} from "react-router-dom";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      this.props.history.push("/todos");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const style = {
      background: 'transparent', 
      border: 'none',
      boxShadow: 'none',
      borderBottom: '2px solid #fff',
      height: '30px',
      borderRadius: 0,
      color: '#fff'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none'
    };

    return (
      <div className='row justify-content-center'>

        <h1 className='display-3 text-center col-12' >Login</h1>
        <form className='col-lg-8 col-md-10 col-sm-12' onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", style)}
          {this.renderInput("password", "Password", style, "password")}
          {this.renderButton("LOG IN")}
          <div className='col-12 text-center mt-4'>
            <span className='h6' >Don't have an account yet?</span>
          </div>
          <div className='col-12 text-center mt-3 h4'>
            <Link to="/register" style={linkStyle}>Sign up now!</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
