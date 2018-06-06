import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderContainer from '../../../containers/HeaderContainer/HeaderContainer';
import Title from '../../../components/Layout/Title/Title';
import Footer from '../../../components/Layout/Footer/Footer';
import '../../../css/style.css';

/*======================================================================
// This is the container for Digital Marketing Campaign, which allows
// a user to act upon selected trends from the Results container.
======================================================================*/
class DigitalMarketingCampaignContainer extends Component {

    /*======================================================================
    // Scroll to top of page upon container being mounted.
    ======================================================================*/
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render () {
        
        return (
            <div className="main-container">
                <HeaderContainer />
                    <div className="main-body">
                        <Container>
                            <Row>
                                <Col>
                                    <Title currentPageTitle="DIGITAL MARKETING CREATE CAMPAIGN" />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col lg="6">
                                    <h3 className="sub-header">New Campaign</h3>
                                    <p>Campaign Name</p>
                                        <input className="standard-input" type="text" name="create-campaign-campaign-name" placeholder="HotelJune2018" />
                                    <p>Trend</p>
                                        <input className="standard-input" type="text" name="create-campaign-trend" placeholder="Hospitality" />
                                    <p>Quantity</p>
                                        <input className="standard-input" type="text" name="create-campaign-trend" placeholder="???" />
                                    <p>Demographics</p>
                                        <input className="standard-input" type="text" name="create-campaign-trend" placeholder="???" />
                                    <p>Geographics</p>
                                        <input className="standard-input" type="text" name="create-campaign-trend" placeholder="???" />
                                    <p>Interest</p>
                                        <input className="standard-input" type="text" name="create-campaign-trend" placeholder="???" />
                                    <p>Education</p>
                                        <input className="standard-input" type="text" name="create-campaign-trend" placeholder="???" />
                                    <p>Employment</p>
                                        <input className="standard-input" type="text" name="create-campaign-trend" placeholder="???" />
                                    <p>Daily Expenditure</p>
                                        <input className="standard-input" type="text" name="create-campaign-trend" placeholder="$500" />
                                    <p>Content</p>
                                        <textarea className="standard-input-long" cols="10" rows="5" name="create-campaign-trend" placeholder="Can you almost feel the Pacific Ocean breeze drift through the tree-lined beach at @FSCostaRica? That's what we call pura vida. Begin your adventure at HotelCompany.com"></textarea>
                                    <button className="standard-button-left" onClick={ this.props.startCampaign }>Start Campaign</button>
                                </Col>
                                <Col lg="6">
                                </Col>
                            </Row>
                        </Container>
                    </div>
                <Footer />
            </div>
        )   
    }   
}

export default DigitalMarketingCampaignContainer;