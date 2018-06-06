import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Title from '../../components/Layout/Title/Title';
import Footer from '../../components/Layout/Footer/Footer';
import '../../css/style.css';

/*======================================================================
// This container will contain helpful tips and guides for using
// the web app successfully.
======================================================================*/
class HelpContainer extends Component {

    render () {
        
        return (
            <div className="main-container">
                <HeaderContainer />
                <div className="main-body">
                    <Container>
                        <Row>
                            <Col>
                                <Title currentPageTitle="HELP" />
                                    <p>Coming Soon...</p>
                                    <p>Support: (844)324-4784</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}

export default HelpContainer;