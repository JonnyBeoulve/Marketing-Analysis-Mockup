import React from 'react';
import '../../../css/style.css';

/*=====================================================================
// This is used to display the title of some pages.
=====================================================================*/
const Title = (props) => {
    return (
        <div className="title">
            <h2>{ props.currentPageTitle }</h2>
            <hr />
        </div>
    )
}

export default Title;