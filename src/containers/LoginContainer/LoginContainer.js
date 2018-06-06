import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import CobiaLogoMain from '../../img/cobia-logo-main.png';
import '../../css/style.css';

/*=====================================================================
// Animated styles using Aphrodite and React Animations.
=====================================================================*/
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  },
  fadeInSlow: {
    animationName: fadeIn,
    animationDuration: '3s'
  }
})

/*======================================================================
// This is the container for the login/signup page, which is the
// default for any users not signed in.
======================================================================*/
class LoginContainer extends Component {

  /*======================================================================
  // This will house state of the user's email and password as they
  // are input.
  ======================================================================*/
  constructor() {
    super();
    this.state = {
      showSignUp: false,
      login: false,
      loginEmail: '',
      loginPassword: '',
    };
  }

  /*======================================================================
  // This will handle state change of the email input.
  ======================================================================*/
  handleLoginEmailChange (e) {
    this.setState({
      loginEmail: e.target.value,
    })
    return;
  }

  /*======================================================================
  // This will handle state change of the password input.
  ======================================================================*/
  handleLoginPasswordChange (e) {
    this.setState({
      loginPassword: e.target.value,
    })
    return;
  }

  /*======================================================================
  // This will handle login submission and authentication.
  ======================================================================*/
  handleLoginSubmit (e) {
    if ((this.state.loginEmail === '') && (this.state.loginPassword === '')) {
      this.setState({
        login: true,
      })
    } else {
      return;
    }
  }

  /*======================================================================
  // This will display the sign up page when the user clicks sign up
  // under the log in form.
  ======================================================================*/
  handleSignUp (e) {
    this.setState({
      showSignUp: true,
    })
    return;
  }

  /*======================================================================
  // This will close the sign up modal upon clicking the X on the top
  // right;
  ======================================================================*/
  handleCloseSignUpModal (e) {
    this.setState({
      showSignUp: false,
    })
    return;
  }

  /*======================================================================
  // This will render the Cobia Systems logo, email and password inputs,
  // as well as a submit button for login. Upon login, the program will
  // redirect to the dashboard.
  ======================================================================*/
  render() {
    if (this.state.login) {
      return <Redirect to='/dashboard'/>;
    }

    return (
      <div className="login">
        <img src={ CobiaLogoMain } className="login-cobia-logo" alt='Cobia Systems Logo' />
        <h2 className="login-header-text">LOG IN</h2>
        <div className="login-form">
          <input className="login-email-input" type="email" name="user-email" placeholder="Email" value={ this.state.loginEmail } onChange={ this.handleLoginEmailChange.bind(this) } />
          <input className="login-password-input" type="password" name="user-password" placeholder="Password" value={ this.state.loginPassword } onChange={ this.handleLoginPasswordChange.bind(this) } />
          <button className="standard-button" onClick={ this.handleLoginSubmit.bind(this) }>Submit</button>
          <p className="sign-up-link" onClick={ this.handleSignUp.bind(this)}>Sign Up</p>
          { (this.state.showSignUp)
            ? <div className={ ["sign-up-modal", css(styles.fadeIn)].join(' ') }><div className={ ["sign-up-close", css(styles.fadeInSlow)].join(' ') } onClick={ this.handleCloseSignUpModal.bind(this) }>X</div><div className={ ["sign-up-form", css(styles.fadeInSlow)].join(' ') }><h2 className="login-header-text">SIGN UP</h2><input className="standard-input" type="text" name="sign-up-email" placeholder="Email" /><input className="standard-input" type="text" name="sign-up-fname" placeholder="First Name" /><input className="standard-input" type="text" name="sign-up-lname" placeholder="Last Name" /><input className="standard-input" type="password" name="sign-up-password" placeholder="Password" /><input className="standard-input" type="text" name="sign-up-password-confirm" placeholder="Confirm Password" /><button className="standard-button" onClick={ this.handleCloseSignUpModal.bind(this) }>Register</button></div></div>
            : <div></div> }
        </div>
      </div>
    );
  }
}

export default LoginContainer;
