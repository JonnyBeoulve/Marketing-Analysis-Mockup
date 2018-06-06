import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProfileOverview from '../../components/Profile/ProfileOverview';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import Title from '../../components/Layout/Title/Title';
import Footer from '../../components/Layout/Footer/Footer';
import '../../css/style.css';

/*======================================================================
// This is the container for My Campaigns, a section where a user can
// view their history of campaigns on Cobia Systems, and view
// key performance indicators of their campaigns.
======================================================================*/
class MyCampaignsContainer extends Component {
    render () {
        
        return (
            <div className="main-container">
                <HeaderContainer />
                    <div className="main-body">
                        <Container>
                            <Row>
                                <Col>
                                    <Title currentPageTitle="MY CAMPAIGNS" />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col lg="6">
                                    <h3 className="sub-header">Campaign List</h3>
                                    <p className="campaign-item">FoodMay2018</p>
                                    <p className="campaign-item">HotelApril2018</p>
                                </Col>
                                <Col lg="6">
                                    <h3 className="sub-header">Profile Overview</h3>
                                    <ProfileOverview />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                <Footer />
            </div>
        )   
    }   
}

export default MyCampaignsContainer;