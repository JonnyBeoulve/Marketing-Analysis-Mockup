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
// This will show 10 currently trending worldwide keywords in a
// responsive flexbox.
=====================================================================*/
const TrendingKeywordsSimple = (props) => {

    return (
        <div className="bubble-item-div">
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[0] }</span>
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[1] }</span>
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[2] }</span>
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[3] }</span>
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[4] }</span>
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[5] }</span>
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[6] }</span>
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[7] }</span>
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[8] }</span>
            <span className={ ["bubble-item", css(styles.fadeIn)].join(' ')}>{props.trendingKeywordsArray[9] }</span>
        </div>
    )
}

export default TrendingKeywordsSimple;