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
// This is a component that displays the results of a new action,
// such as confirmation that a campaign has been created.
=====================================================================*/
const Confirmation = (props) => {
    return (
        <div className="main-body">
            <div className={ css(styles.fadeIn) }>
                <h2 className="confirmation">Campaign Successfully Created!</h2>
                <a href="dashboard"><button className="standard-button">Return to Dashboard</button></a>
            </div>
        </div>
    )
}

export default Confirmation;