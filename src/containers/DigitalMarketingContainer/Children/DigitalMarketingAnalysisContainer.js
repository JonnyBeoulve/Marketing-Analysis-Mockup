import React, { Component } from 'react';
import '../../../css/style.css';

/*======================================================================
// This is the container for Digital Marketing, one of the core
// functions of Cobia Systems.
======================================================================*/
class DigitalMarketingAnalysisContainer extends Component {

    /*======================================================================
    // Scroll to top of page upon container being mounted.
    ======================================================================*/
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    /*======================================================================
    // This is the first step of Digital Marketing. The user will enter
    // a keyword, a location, an area, drivers, and a B2 option. This will
    // then be passed to the parent container, which will perform the
    // GET request with the provided parameters before proceeding to step 2
    // where the user can view results.
    ======================================================================*/
    render () {
        
        return (
            <div className="main-body-analysis">
                <h3>What keyword would you like to analyze?</h3>
                    <input className="standard-input" type="text" name="digital-marketing-keyword" placeholder="Hotel" onChange={ this.props.keywordChange } />
                <h3>How large of an area would you like to target?</h3>
                    <select className="analysis-select" onChange={ this.props.areaChange }>
                        <option value="Local">Local</option>
                        <option value="State">State</option>
                        <option value="Country">Country</option>
                        <option value="Worldwide">Worldwide</option>
                    </select>
                <h3>Which primary location?</h3>
                    <input className="standard-input" type="text" name="digital-marketing-location" placeholder="Seattle" onChange={ this.props.locationChange } />
                <div className="analysis-form-drivers">
                    <h3>What are the main drivers of your analysis?</h3>
                    <input className="standard-input" type="text" name="digital-marketing-driver1" placeholder="Driver #1" onChange={ this.props.driver1Change } />
                    <input className="standard-input" type="text" name="digital-marketing-driver2" placeholder="Driver #2" onChange={ this.props.driver2Change } />
                    <input className="standard-input" type="text" name="digital-marketing-driver3" placeholder="Driver #3" onChange={ this.props.driver3Change } />
                    <input className="standard-input" type="text" name="digital-marketing-driver4" placeholder="Driver #4" onChange={ this.props.driver4Change } />
                    <input className="standard-input" type="text" name="digital-marketing-driver5" placeholder="Driver #5" onChange={ this.props.driver5Change } />
                </div>
                <h3>Is this for Business to Consumer, Business to Business, or both?</h3>
                    <select className="analysis-select" onChange={ this.props.b2Change }>
                        <option value="B2B">B2C</option>
                        <option value="B2C">B2B</option>
                        <option value="Both">Both</option>
                    </select>
                <button className="standard-button" onClick={ this.props.analyze }>Begin Analysis</button>
            </div>
        )   
    }   
}

export default DigitalMarketingAnalysisContainer;
