import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import Title from '../../components/Layout/Title/Title';
import Footer from '../../components/Layout/Footer/Footer';
import TrendingKeywordsSimple from '../../components/Trending/TrendingKeywordsSimple';
import ProfileOverview from '../../components/Profile/ProfileOverview';
import EditIcon from '../../img/edit-icon.png';
import '../../css/style.css';

/*======================================================================
// This is the container for the dashboard where users first arrive
// upon login.
======================================================================*/
class DashboardContainer extends Component {

  constructor() {
    super();
    this.state = {
      trendingKeywords: ['Memorial Day', 'Holiday', 'Vacation', 'Hawaii', 'Flight', 'Hilton', 'Golf', 'BBQ', 'Pablo Escobar', 'Beach'],
    };
  }

  /*=====================================================================
  // This will display the vitals of the user account, key performance
  // indicators of their campaigns, along with a couple buttons to
  // get started quickly.
  =====================================================================*/
  render() {
    return (
      <div className="main-container">
        <HeaderContainer />
        <div className="main-body">
          <Container>
            <Row>
              <Col>
                <Title currentPageTitle="DASHBOARD" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col lg="6">
                <h3 className="sub-header">Hotel Company Inc.</h3>
                <p>Industry: Hospitality <a href="/myprofile"><img src={ EditIcon } className="edit-icon" alt='Edit Icon Png' /></a></p>
                <p>Currently Trending Keywords:</p>
                <TrendingKeywordsSimple trendingKeywordsArray={this.state.trendingKeywords} />
                <a href="digitalmarketing"><button className="standard-button-left">Begin Marketing Analysis</button></a>
              </Col>
              <Col lg="6">
                <h3 className="sub-header">Profile Overview</h3>
                <ProfileOverview />
                <a href="myprofile"><button className="standard-button-left">My Profile</button></a>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DashboardContainer;
