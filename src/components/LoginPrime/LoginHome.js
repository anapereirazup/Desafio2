import React, {Component} from 'react';
import {Container, CTA, CTALogoOne, SignUp, Description, CTALogoTwo, } from "./css";
import Home from "../../Home/index"
import UserLogin from "../Autenticação/Autenticação"
// import App from "../../App"
import {
    BrowserRouter as Router,
  //  Switch,
   Route,
   Link,
   Redirect,
  //  BrowserRouter
  } from "react-router-dom";
import { Button } from '@material-ui/core';


  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // Fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }

  }

    const Public = () => <h3><Link to='/login'><Home/></Link></h3>
    const Protected = () => <h3><Link to='/home'><UserLogin/></Link></h3>
    

    class Login extends React.Component {
      state = {
        redirectToReferrer: false
      }
      login = () => {
        fakeAuth.authenticate(() =>{
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
      }
      render () {
        const {redirectToReferrer} = this.state
        const {from} = this.props.location.state || { from: {pathname: '/home'}}

        if (redirectToReferrer === true) {
          return (
            <Redirect to={from} />
          )
        }
        return (
          <div>
            <p>Voce deve logar para acessar a pagina at {from.pathname}</p>
             <Button onClick={this.login}>Logar</Button> 
             <Container>
               <CTA>
                     <CTALogoOne src="/images/cta-logo-one.svg"/>
                     <SignUp><Button onClick={this.login} >Conecte-se</Button></SignUp>
                     {/* <SignUp>Conecte-se</SignUp> */}
                     <Description>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
                     e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de 
                     tipos e os embaralhou para fazer um livro de modelos de tipo
                     </Description>
                     <CTALogoTwo src="/images/cta-logo-two.png"/>
                 </CTA>



               </Container>
          </div>
        )
      }
    }

    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} 
      render={(props) => (
        fakeAuth.isAuthenticated === true
        ? <Component {...props} />
         : <Redirect to={{
           pathname: '/autenticacao',
           state: {from: props.location}
         }} />
      )} />
    )

     class LoginPrime extends Component {
       render () {
       return (
         <Router>
           <div>
               
             <div>
               <li> <Link to='/login'>Public Page</Link></li> 
               <li> <Link to='/autenticacao'>protected Page</Link></li>
               
             </div>
             {/* /EU TENHO QUE FAZER: TELA INICAL COM O BOTÃO DE LOGIN
             ASSIM QUE CLICAR NO BOTAO, REDIRECIONAR PARA A PAG PRINCIPAL/ */}

             <Route path='/autenticacao' component={UserLogin} />
             <Route path='/login' component={Login} />
             <PrivateRoute path='/home' component={Home} />
           </div>
         </Router>
       )
        

      }
    }
     //  /detail/:id
 


export default LoginPrime

