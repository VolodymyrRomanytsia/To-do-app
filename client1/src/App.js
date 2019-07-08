import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import './App.css';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import NotFound from "./components/notFound";
import ProtectedRoute from './components/common/protectedRoute';
const Todos = lazy(() => import('./components/todosApp')); 


const App = () => {
    return (
      <BrowserRouter> 
        <Suspense fallback={<div>Loading...</div>}>
          <ToastContainer />
          <main className="container margin-top text-white">
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <ProtectedRoute path="/todos" component={Todos} />
              
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/login" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </Suspense>
      </BrowserRouter> 
    );
  }

export default App;
