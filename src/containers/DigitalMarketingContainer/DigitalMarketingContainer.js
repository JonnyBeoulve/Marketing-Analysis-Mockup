import React, { Component } from 'react';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import Footer from '../../components/Layout/Footer/Footer';
import DigitalMarketingAnalysisContainer from './Children/DigitalMarketingAnalysisContainer';
import Loading from '../../components/Loading/Loading';
import DigitalMarketingResultsContainer from './Children/DigitalMarketingResultsContainer';
import DigitalMarketingCampaignContainer from './Children/DigitalMarketingCampaignContainer';
import Confirmation from '../../components/Confirmation/Confirmation';
import '../../css/style.css';

/*======================================================================
// This is the container for Digital Marketing, one of the core
// functions of Cobia Systems.
======================================================================*/
class DigitalMarketingContainer extends Component {
    
    /*======================================================================
    // This will bind this to all core functions of marketing analysis
    // so child components can communicate upward. This also houses the
    // state of the user's input before analysis.
    ======================================================================*/
    constructor(props) {
        super(props);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleDriver1Change = this.handleDriver1Change.bind(this);
        this.handleDriver2Change = this.handleDriver2Change.bind(this);
        this.handleDriver3Change = this.handleDriver3Change.bind(this);
        this.handleDriver4Change = this.handleDriver4Change.bind(this);
        this.handleDriver5Change = this.handleDriver5Change.bind(this);
        this.handleB2Change = this.handleB2Change.bind(this);
        this.handleAnalysisSubmit = this.handleAnalysisSubmit.bind(this);
        this.handleCreateCampaign = this.handleCreateCampaign.bind(this);
        this.handleStartCampaign = this.handleStartCampaign.bind(this);
        this.state = {
            showStep1: true,
            showLoading: false,
            showStep2: false,
            showStep3: false,
            showConfirmation: false,
            keyword: '',
            location: '',
            area: 'Local',
            driver1: '',
            driver2: '',
            driver3: '',
            driver4: '',
            driver5: '',
            b2: 'B2C',
        };
    }

    /*======================================================================
    // This will update the state of keyword as the user inputs text.
    ======================================================================*/
    handleKeywordChange (e) {
        this.setState({
            keyword: e.target.value,
          })
        return;
    }

        /*======================================================================
    // This will update the state of location as the user inputs text.
    ======================================================================*/
    handleLocationChange (e) {
        this.setState({
            location: e.target.value,
          })
        return;
    }

    /*======================================================================
    // This will update the state of area as the user inputs text.
    ======================================================================*/
    handleAreaChange (e) {
        this.setState({
            area: e.target.value,
          })
        return;
    }

    /*======================================================================
    // This will update the state of driver1 as the user inputs text.
    ======================================================================*/
    handleDriver1Change (e) {
        this.setState({
            driver1: e.target.value,
          })
        return;
    }

    /*======================================================================
    // This will update the state of driver1 as the user inputs text.
    ======================================================================*/
    handleDriver2Change (e) {
        this.setState({
            driver2: e.target.value,
          })
        return;
    }

    /*======================================================================
    // This will update the state of driver1 as the user inputs text.
    ======================================================================*/
    handleDriver3Change (e) {
        this.setState({
            driver3: e.target.value,
          })
        return;
    }

    /*======================================================================
    // This will update the state of driver1 as the user inputs text.
    ======================================================================*/
    handleDriver4Change (e) {
        this.setState({
            driver4: e.target.value,
          })
        return;
    }

    /*======================================================================
    // This will update the state of driver1 as the user inputs text.
    ======================================================================*/
    handleDriver5Change (e) {
        this.setState({
            driver5: e.target.value,
          })
        return;
    }

    /*======================================================================
    // This will update the state of driver1 as the user inputs text.
    ======================================================================*/
    handleB2Change (e) {
        this.setState({
            b2: e.target.value,
          })
        return;
    }
    
    /*======================================================================
    // This will update the state of driver1 as the user inputs text.
    ======================================================================*/
    handleAnalysisSubmit (e) {
        this.setState({
            showStep1: false,
            showLoading: true,
          })
        setTimeout(() =>{ 
            this.setState({
                showLoading: false,
                showStep2: true,
              }) 
            }, 3000);
        return;
    }

    /*======================================================================
    // This will allow a user to start creating a campaign in consideration
    // of a viewed trend analysis.
    ======================================================================*/
    handleCreateCampaign (e) {
        this.setState({
            showStep2: false,
            showStep3: true,
          })
        return;
    }
    
    /*======================================================================
    // This will allow a user to start a campaign after defining various
    // options for targeting and content.
    ======================================================================*/
    handleStartCampaign (e) {
        this.setState({
            showStep3: false,
            showConfirmation: true,
          })
        return;
    }

    render () {
        
        return (
            <div className="main-container">
                <HeaderContainer />
                    { (this.state.showStep1)
                        ? <DigitalMarketingAnalysisContainer keywordChange={ this.handleKeywordChange} locationChange={ this.handleLocationChange } areaChange={ this.handleAreaChange } driver1Change={ this.handleDriver1Change } driver2Change={ this.handleDriver2Change } driver3Change={ this.handleDriver3Change } driver4Change={ this.handleDriver4Change } driver5Change={ this.handleDriver5Change } b2Change={ this.handleB2Change } analyze={ this.handleAnalysisSubmit } />
                        : <div></div> }
                    { (this.state.showLoading)
                        ? <Loading />
                        : <div></div> }
                    { (this.state.showStep2)
                        ? <DigitalMarketingResultsContainer createCampaign={ this.handleCreateCampaign } />
                        : <div></div> }
                    { (this.state.showStep3)
                        ? <DigitalMarketingCampaignContainer startCampaign={ this.handleStartCampaign } />
                        : <div></div> }
                    { (this.state.showConfirmation)
                        ? <Confirmation />
                        : <div></div> }
                <Footer />
            </div>
        )   
    }   
}

export default DigitalMarketingContainer;