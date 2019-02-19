import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: ""},
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
      await userService.register(this.state.data);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const style = {background: 'transparent', 
                    border: 'none',
                    boxShadow: 'none',
                    borderBottom: '2px solid #fff',
                    height: '30px',
                    borderRadius: 0,
                    color: '#fff'}
    return (
      <div className='row justify-content-center'>
        <h1 className='display-3 text-center col-12'>Registration</h1>
        <form className='col-lg-8 col-md-10 col-sm-12' onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", style)}
          {this.renderInput("password", "Password", style, "password")}
          {this.renderButton("REGISTER")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;