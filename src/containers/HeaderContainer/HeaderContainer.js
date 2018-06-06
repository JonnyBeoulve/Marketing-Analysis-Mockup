import React, { Component } from 'react';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import CobiaLogoHeader from '../../img/cobia-logo-header.png';
import '../../css/style.css';

/*=====================================================================
// Animated styles using Aphrodite and React Animations.
=====================================================================*/
const styles = StyleSheet.create({
    fadeInLeft: {
      animationName: fadeInLeft,
      animationDuration: '0.5s'
    },
})

/*======================================================================
// This is the container for the header where users can visit the
// navigation screen to visit various features of Cobia Systems.
======================================================================*/
class HeaderContainer extends Component {

    constructor() {
        super();
        this.state = {
            showNavigation: false,
        };
      }

    /*======================================================================
    // This will show or hide the navigation panel upon clicking a button
    // on the top left of the screen.
    ======================================================================*/
    handleToggleNavigation (e){
        this.setState(prevState => ({
            showNavigation: !prevState.showNavigation,
        }))
    }
    
    /*======================================================================
    // This will display a header at the top of the screen that includes
    // the Cobia Systems logo, along with a button to show the navigation
    // bar.
    ======================================================================*/
    render () {
        
        return (
            <div className="header">
                <div className="header-navigation" onClick={ this.handleToggleNavigation.bind(this) }>...</div>
                {(this.state.showNavigation)
                    ? <div className={ ["navigation-panel", css(styles.fadeInLeft)].join(' ') }><h4>NAVIGATION</h4><hr /><div className="navigation-panel-items"><a href="/dashboard">Dashboard</a><a href="/digitalmarketing">Digital Marketing</a><a>Event Marketing</a><a>Competitor Analysis</a><a>Reputation Report</a><a href="/mycampaigns">My Campaigns</a><a href="/myprofile">My Profile</a><a href="/help">Help</a><a href="/">Logout</a></div></div>
                    : <div></div> }
                <a href="/dashboard"><img src={ CobiaLogoHeader } className="login-cobia-logo-header" alt='Cobia Systems Logo' /></a>
            </div>
        )   
    }   
}

export default HeaderContainer;