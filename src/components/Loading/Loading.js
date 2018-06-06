import React from 'react';
import '../../css/style.css';

/*=====================================================================
// This is a component that displays a spinning loader to the user
// during server transactions.
=====================================================================*/
const Loading = (props) => {
    
    return (
        <div className="main-body">
            <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
            </div>
        </div>
    )
}

export default Loading;