import React from "react";
import App from "./App";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Component } from "react";
import UserLogin from "./components/Autenticação/Autenticação";
import LoginPrime from './components/LoginPrime/LoginHome';
import Home from './Home/index';
import Infantil from "./components/pages/Infantil";





const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
    render={props => 
        UserLogin() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/UserLogin', state: {from: props.location}}} />
        )
      }
   />
);

const Routes = () => (
    <BrowserRouter>
     <Switch>
          <Route path="/login">
            { <LoginPrime /> }
         </Route>
         <Route path="/autenticacao">
            { <UserLogin /> }
         </Route>
           {/* <Route exact path="/detail">
             <Detail /> 
         </Route>  */}
         {/* <Route exact path="/series">
             <Series /> 
         </Route>  */}
         {/* <Route exact path="/login">
//             <Login /> 
//         </Route>  */}
          <Route exact path="/infantil">
             <Infantil /> 
         </Route> 
        {/* <Route exact path="/filmes">
             <Filmes /> 
         </Route> 
         <Route exact path="/">
             <Inicio /> 
         </Route> */}
          <Route path="/home">
             <Home /> 
          </Route>
            <Route exact path="/UserLogin" component={UserLogin}>
            <PrivateRoute path="/home" component={Home} />
            </Route>
            <Redirect from="*" to="/home" /> 
        </Switch>
    
    
    </BrowserRouter>
);


export default Routes;




























