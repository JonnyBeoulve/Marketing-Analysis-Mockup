import React from 'react';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import '../../css/style.css';

/*=====================================================================
// Animated styles using Aphrodite and React Animations.
=====================================================================*/
const styles = StyleSheet.create({
    fadeIn: {
      animationName: fadeIn,
      animationDuration: '1.5s'
    },
})

/*=====================================================================
// This displays several pieces of information regarding the user's
// social media and their performance in campaigns on Cobia Systems.
=====================================================================*/
const ProfileOverview = (props) => {

    return (
        <div className={ ["profile-overview", css(styles.fadeIn)].join(' ')}>
            <div className="profile-community">
                <div className="profile-community-likes">
                    <p className="profile-overview-number">234,989</p>
                    <p className="profile-overview-text">Likes</p>
                </div>
                <div className="profile-community-followers">
                    <p className="profile-overview-number">121,664</p>
                    <p className="profile-overview-text">Followers</p>
                </div>
            </div>
            <div className="profile-reach">
                <div className="profile-reach-total">
                    <p className="profile-overview-number">56,782</p>
                    <p className="profile-overview-text">Total Reach</p>
                </div>
                <div className="profile-reach-success">
                    <p className="profile-overview-number">32%</p>
                    <p className="profile-overview-text">Success Rate</p>
                </div>
            </div>
            <div className="profile-investment">
                <div className="profile-investment-total">
                    <p className="profile-overview-number">$650.00</p>
                    <p className="profile-overview-text">Total Investment</p>
                </div>
                <div className="profile-investment-success">
                    <p className="profile-overview-number">87.35</p>
                    <p className="profile-overview-text">Reach Per Dollar</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileOverview;