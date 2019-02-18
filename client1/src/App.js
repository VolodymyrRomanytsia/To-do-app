import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import './App.css';
import RegisterForm from './components/registerForm'
import LoginForm from './components/loginForm'
import TodosApp from './components/todosApp'
import NotFound from "./components/notFound";
import ProtectedRoute from './components/common/protectedRoute'


class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <React.Fragment>
          <ToastContainer />
          <main className="container margin-top text-white">
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <ProtectedRoute path="/todos" component={TodosApp} />
              
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/login" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter> 
    );
  }
}

export default App;
