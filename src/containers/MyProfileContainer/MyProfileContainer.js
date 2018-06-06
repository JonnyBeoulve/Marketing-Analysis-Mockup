import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import Title from '../../components/Layout/Title/Title';
import Footer from '../../components/Layout/Footer/Footer';
import EditIcon from '../../img/edit-icon.png';
import FacebookLogo from '../../img/facebook-logo.png';
import TwitterLogo from '../../img/twitter-logo.png';
import CreditCardLogo from '../../img/credit-card-logo.png';
import '../../css/style.css';

/*======================================================================
// This is the container for My Profile, a section where a user can
// edit account details, view logins, and pay to add additional logins.
======================================================================*/
class MyProfileContainer extends Component {
    render () {
        
        return (
            <div className="main-container">
                <HeaderContainer />
                    <div className="main-body">
                        <Container>
                            <Row>
                                <Col>
                                    <Title currentPageTitle="MY PROFILE" />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col lg="6">
                                    <h3 className="sub-header">Vitals</h3>
                                    <p>Company Name</p>
                                        <input className="standard-input" type="text" name="my-profile-company-name" placeholder="Hotel Company, Inc." />
                                    <p>Industry</p>
                                        <input className="standard-input" type="text" name="my-profile-industry" placeholder="Hospitality" />
                                    <button className="standard-button-left">Update Profile</button>
                                    <h3 className="sub-header">Logins</h3>
                                        <p>Jill@HotelCompany.com <img src={ EditIcon } className="edit-icon" alt='Edit Icon Png' /></p>
                                        <button className="standard-button-left">Add Login</button>
                                </Col>
                                <Col lg="6">
                                    <h3 className="sub-header">Other Accounts</h3>
                                    <p>Social Media</p>
                                        <div className="profile-flexbox">
                                            <img src={ FacebookLogo } className="profile-circle-logo" alt='Facebook Logo' />
                                            <img src={ TwitterLogo } className="profile-circle-logo" alt='Twitter Logo' />
                                        </div>
                                    <p>Payment Method</p>
                                        <div className="profile-flexbox">
                                            <img src={ CreditCardLogo } className="profile-circle-logo" alt='Credit Card Logo' />
                                        </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                <Footer />
            </div>
        )   
    }   
}

export default MyProfileContainer;