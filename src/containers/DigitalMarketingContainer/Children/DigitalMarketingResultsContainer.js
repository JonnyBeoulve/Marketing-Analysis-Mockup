import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import ReactChartkick, { BarChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import Title from '../../../components/Layout/Title/Title';
import classnames from 'classnames';
import '../../../css/style.css';
ReactChartkick.addAdapter(Chart)

/*======================================================================
// This is the container for Digital Marketing Results, which displays
// the results of analysis executed by the user.
======================================================================*/
class DigitalMarketingResultsContainer extends Component {

    /*======================================================================
    // This will house the state of the active tab.
    ======================================================================*/
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
    }

    /*======================================================================
    // Scroll to top of page upon container being mounted.
    ======================================================================*/
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    /*======================================================================
    // This will handle toggling between up to five handler tabs.
    ======================================================================*/
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    /*======================================================================
    // The render method will display up to five tabs, each with trending
    // keywords and graphs.
    ======================================================================*/
    render () {
        
        return (
            <div className="main-body-results">
                <Title currentPageTitle="DIGITAL MARKETING RESULTS" />
                <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                        Driver1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                        Driver2
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                        Driver3
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                        Driver4
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '5' })} onClick={() => { this.toggle('5'); }}>
                        Driver5
                    </NavLink>
                </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Selection and Results</CardTitle>
                            <div className="bubble-item-div">
                                <CardText className="bubble-item">Keyword: Hotel</CardText>
                                <CardText className="bubble-item">Location: Seattle</CardText>
                                <CardText className="bubble-item">Area: Country</CardText>
                                <CardText className="bubble-item">Driver: Convenience</CardText>
                                <CardText className="bubble-item">Type: B2B</CardText>
                            </div>
                            <CardText><span className="emphasis">3,143,482 posts</span> were found.</CardText>
                        </Card>
                        <Card body>
                            <CardTitle>Top Trends</CardTitle>
                            <CardText>Relevance</CardText>
                            <BarChart min={0} max={100} suffix="%" label="Relevance" colors={["#5DC0E0"]} data={[["Memorial Day", '93.2'], ["Holiday", '72.0'], ["Vacation", '59.1'], ["Hawaii", '47.6'], ["Flight", '41.3'], ["Hilton", '40.0'], ["Golf", '37.9'], ["BBQ", '35.5'], ["Pablo Escobar", '30.9'], ["Beach", '27.9']]} />
                            <CardText>Total Conversation</CardText>
                            <BarChart thousands="," label="Posts" colors={["#5DC0E0"]} data={[["Memorial Day", '1199823'], ["Holiday", '997572'], ["Vacation", '934832'], ["Hawaii", '689382'], ["Flight", '599132'], ["Hilton", '591112'], ["Golf", '575231'], ["BBQ", '597952'], ["Pablo Escobar", '560190'], ["Beach", '550513']]} />
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Current Sentiment</CardTitle>
                            <PieChart min={0} max={100} legend="left" colors={["#66CD00", "#FFFF00", "#FF0000", "#000", "#0000FF"]} data={[["Disgust", 3], ["Joy", 7], ["Anger", 13], ["Fear", 19], ["Sadness", 58]]} />
                        </Card>
                        <Card body>
                            <CardTitle>Select Trends for Campaign</CardTitle>
                            <label>
                                <input name="keyword1" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Memorial Day</span>
                            </label>
                            <label>
                                <input name="keyword2" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Holiday</span>
                            </label>
                            <label>
                                <input name="keyword3" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Vacation</span>
                            </label>
                            <label>
                                <input name="keyword4" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hawaii</span>
                            </label>
                            <label>
                                <input name="keyword5" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Flight</span>
                            </label>
                            <label>
                                <input name="keyword6" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hilton</span>
                            </label>
                            <label>
                                <input name="keyword7" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Golf</span>
                            </label>
                            <label>
                                <input name="keyword8" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">BBQ</span>
                            </label>
                            <label>
                                <input name="keyword9" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Pablo Escobar</span>
                            </label>
                            <label>
                                <input name="keyword10" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Beach</span>
                            </label>
                            <button className="standard-button" onClick={ this.props.createCampaign }>Create Campaign</button>
                        </Card>
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Selection and Results</CardTitle>
                            <div className="bubble-item-div">
                                <CardText className="bubble-item">Keyword: Hotel</CardText>
                                <CardText className="bubble-item">Location: Seattle</CardText>
                                <CardText className="bubble-item">Area: Country</CardText>
                                <CardText className="bubble-item">Driver: Convenience</CardText>
                                <CardText className="bubble-item">Type: B2B</CardText>
                            </div>
                            <CardText><span className="emphasis">3,143,482 posts</span> were found.</CardText>
                        </Card>
                        <Card body>
                            <CardTitle>Top Trends</CardTitle>
                            <CardText>Relevance</CardText>
                            <BarChart min={0} max={100} suffix="%" label="Relevance" colors={["#5DC0E0"]} data={[["Memorial Day", '93.2'], ["Holiday", '72.0'], ["Vacation", '59.1'], ["Hawaii", '47.6'], ["Flight", '41.3'], ["Hilton", '40.0'], ["Golf", '37.9'], ["BBQ", '35.5'], ["Pablo Escobar", '30.9'], ["Beach", '27.9']]} />
                            <CardText>Total Conversation</CardText>
                            <BarChart thousands="," label="Posts" colors={["#5DC0E0"]} data={[["Memorial Day", '1199823'], ["Holiday", '997572'], ["Vacation", '934832'], ["Hawaii", '689382'], ["Flight", '599132'], ["Hilton", '591112'], ["Golf", '575231'], ["BBQ", '597952'], ["Pablo Escobar", '560190'], ["Beach", '550513']]} />
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Current Sentiment</CardTitle>
                            <PieChart min={0} max={100} legend="left" colors={["#66CD00", "#FFFF00", "#FF0000", "#000", "#0000FF"]} data={[["Disgust", 3], ["Joy", 7], ["Anger", 13], ["Fear", 19], ["Sadness", 58]]} />
                        </Card>
                        <Card body>
                            <CardTitle>Select Trends for Campaign</CardTitle>
                            <label>
                                <input name="keyword1" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Memorial Day</span>
                            </label>
                            <label>
                                <input name="keyword2" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Holiday</span>
                            </label>
                            <label>
                                <input name="keyword3" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Vacation</span>
                            </label>
                            <label>
                                <input name="keyword4" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hawaii</span>
                            </label>
                            <label>
                                <input name="keyword5" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Flight</span>
                            </label>
                            <label>
                                <input name="keyword6" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hilton</span>
                            </label>
                            <label>
                                <input name="keyword7" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Golf</span>
                            </label>
                            <label>
                                <input name="keyword8" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">BBQ</span>
                            </label>
                            <label>
                                <input name="keyword9" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Pablo Escobar</span>
                            </label>
                            <label>
                                <input name="keyword10" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Beach</span>
                            </label>
                            <button className="standard-button" onClick={ this.props.createCampaign }>Create Campaign</button>
                        </Card>
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Selection and Results</CardTitle>
                            <div className="bubble-item-div">
                                <CardText className="bubble-item">Keyword: Hotel</CardText>
                                <CardText className="bubble-item">Location: Seattle</CardText>
                                <CardText className="bubble-item">Area: Country</CardText>
                                <CardText className="bubble-item">Driver: Convenience</CardText>
                                <CardText className="bubble-item">Type: B2B</CardText>
                            </div>
                            <CardText><span className="emphasis">3,143,482 posts</span> were found.</CardText>
                        </Card>
                        <Card body>
                            <CardTitle>Top Trends</CardTitle>
                            <CardText>Relevance</CardText>
                            <BarChart min={0} max={100} suffix="%" label="Relevance" colors={["#5DC0E0"]} data={[["Memorial Day", '93.2'], ["Holiday", '72.0'], ["Vacation", '59.1'], ["Hawaii", '47.6'], ["Flight", '41.3'], ["Hilton", '40.0'], ["Golf", '37.9'], ["BBQ", '35.5'], ["Pablo Escobar", '30.9'], ["Beach", '27.9']]} />
                            <CardText>Total Conversation</CardText>
                            <BarChart thousands="," label="Posts" colors={["#5DC0E0"]} data={[["Memorial Day", '1199823'], ["Holiday", '997572'], ["Vacation", '934832'], ["Hawaii", '689382'], ["Flight", '599132'], ["Hilton", '591112'], ["Golf", '575231'], ["BBQ", '597952'], ["Pablo Escobar", '560190'], ["Beach", '550513']]} />
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Current Sentiment</CardTitle>
                            <PieChart min={0} max={100} legend="left" colors={["#66CD00", "#FFFF00", "#FF0000", "#000", "#0000FF"]} data={[["Disgust", 3], ["Joy", 7], ["Anger", 13], ["Fear", 19], ["Sadness", 58]]} />
                        </Card>
                        <Card body>
                            <CardTitle>Select Trends for Campaign</CardTitle>
                            <label>
                                <input name="keyword1" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Memorial Day</span>
                            </label>
                            <label>
                                <input name="keyword2" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Holiday</span>
                            </label>
                            <label>
                                <input name="keyword3" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Vacation</span>
                            </label>
                            <label>
                                <input name="keyword4" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hawaii</span>
                            </label>
                            <label>
                                <input name="keyword5" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Flight</span>
                            </label>
                            <label>
                                <input name="keyword6" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hilton</span>
                            </label>
                            <label>
                                <input name="keyword7" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Golf</span>
                            </label>
                            <label>
                                <input name="keyword8" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">BBQ</span>
                            </label>
                            <label>
                                <input name="keyword9" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Pablo Escobar</span>
                            </label>
                            <label>
                                <input name="keyword10" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Beach</span>
                            </label>
                            <button className="standard-button" onClick={ this.props.createCampaign }>Create Campaign</button>
                        </Card>
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Selection and Results</CardTitle>
                            <div className="bubble-item-div">
                                <CardText className="bubble-item">Keyword: Hotel</CardText>
                                <CardText className="bubble-item">Location: Seattle</CardText>
                                <CardText className="bubble-item">Area: Country</CardText>
                                <CardText className="bubble-item">Driver: Convenience</CardText>
                                <CardText className="bubble-item">Type: B2B</CardText>
                            </div>
                            <CardText><span className="emphasis">3,143,482 posts</span> were found.</CardText>
                        </Card>
                        <Card body>
                            <CardTitle>Top Trends</CardTitle>
                            <CardText>Relevance</CardText>
                            <BarChart min={0} max={100} suffix="%" label="Relevance" colors={["#5DC0E0"]} data={[["Memorial Day", '93.2'], ["Holiday", '72.0'], ["Vacation", '59.1'], ["Hawaii", '47.6'], ["Flight", '41.3'], ["Hilton", '40.0'], ["Golf", '37.9'], ["BBQ", '35.5'], ["Pablo Escobar", '30.9'], ["Beach", '27.9']]} />
                            <CardText>Total Conversation</CardText>
                            <BarChart thousands="," label="Posts" colors={["#5DC0E0"]} data={[["Memorial Day", '1199823'], ["Holiday", '997572'], ["Vacation", '934832'], ["Hawaii", '689382'], ["Flight", '599132'], ["Hilton", '591112'], ["Golf", '575231'], ["BBQ", '597952'], ["Pablo Escobar", '560190'], ["Beach", '550513']]} />
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Current Sentiment</CardTitle>
                            <PieChart min={0} max={100} legend="left" colors={["#66CD00", "#FFFF00", "#FF0000", "#000", "#0000FF"]} data={[["Disgust", 3], ["Joy", 7], ["Anger", 13], ["Fear", 19], ["Sadness", 58]]} />
                        </Card>
                        <Card body>
                            <CardTitle>Select Trends for Campaign</CardTitle>
                            <label>
                                <input name="keyword1" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Memorial Day</span>
                            </label>
                            <label>
                                <input name="keyword2" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Holiday</span>
                            </label>
                            <label>
                                <input name="keyword3" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Vacation</span>
                            </label>
                            <label>
                                <input name="keyword4" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hawaii</span>
                            </label>
                            <label>
                                <input name="keyword5" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Flight</span>
                            </label>
                            <label>
                                <input name="keyword6" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hilton</span>
                            </label>
                            <label>
                                <input name="keyword7" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Golf</span>
                            </label>
                            <label>
                                <input name="keyword8" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">BBQ</span>
                            </label>
                            <label>
                                <input name="keyword9" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Pablo Escobar</span>
                            </label>
                            <label>
                                <input name="keyword10" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Beach</span>
                            </label>
                            <button className="standard-button" onClick={ this.props.createCampaign }>Create Campaign</button>
                        </Card>
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="5">
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Selection and Results</CardTitle>
                            <div className="bubble-item-div">
                                <CardText className="bubble-item">Keyword: Hotel</CardText>
                                <CardText className="bubble-item">Location: Seattle</CardText>
                                <CardText className="bubble-item">Area: Country</CardText>
                                <CardText className="bubble-item">Driver: Convenience</CardText>
                                <CardText className="bubble-item">Type: B2B</CardText>
                            </div>
                            <CardText><span className="emphasis">3,143,482 posts</span> were found.</CardText>
                        </Card>
                        <Card body>
                            <CardTitle>Top Trends</CardTitle>
                            <CardText>Relevance</CardText>
                            <BarChart min={0} max={100} suffix="%" label="Relevance" colors={["#5DC0E0"]} data={[["Memorial Day", '93.2'], ["Holiday", '72.0'], ["Vacation", '59.1'], ["Hawaii", '47.6'], ["Flight", '41.3'], ["Hilton", '40.0'], ["Golf", '37.9'], ["BBQ", '35.5'], ["Pablo Escobar", '30.9'], ["Beach", '27.9']]} />
                            <CardText>Total Conversation</CardText>
                            <BarChart thousands="," label="Posts" colors={["#5DC0E0"]} data={[["Memorial Day", '1199823'], ["Holiday", '997572'], ["Vacation", '934832'], ["Hawaii", '689382'], ["Flight", '599132'], ["Hilton", '591112'], ["Golf", '575231'], ["BBQ", '597952'], ["Pablo Escobar", '560190'], ["Beach", '550513']]} />
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Current Sentiment</CardTitle>
                            <PieChart min={0} max={100} legend="left" colors={["#66CD00", "#FFFF00", "#FF0000", "#000", "#0000FF"]} data={[["Disgust", 3], ["Joy", 7], ["Anger", 13], ["Fear", 19], ["Sadness", 58]]} />
                        </Card>
                        <Card body>
                            <CardTitle>Select Trends for Campaign</CardTitle>
                            <label>
                                <input name="keyword1" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Memorial Day</span>
                            </label>
                            <label>
                                <input name="keyword2" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Holiday</span>
                            </label>
                            <label>
                                <input name="keyword3" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Vacation</span>
                            </label>
                            <label>
                                <input name="keyword4" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hawaii</span>
                            </label>
                            <label>
                                <input name="keyword5" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Flight</span>
                            </label>
                            <label>
                                <input name="keyword6" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Hilton</span>
                            </label>
                            <label>
                                <input name="keyword7" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Golf</span>
                            </label>
                            <label>
                                <input name="keyword8" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">BBQ</span>
                            </label>
                            <label>
                                <input name="keyword9" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Pablo Escobar</span>
                            </label>
                            <label>
                                <input name="keyword10" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                                <span className="results-keyword">Beach</span>
                            </label>
                            <button className="standard-button" onClick={ this.props.createCampaign }>Create Campaign</button>
                        </Card>
                    </Col>
                    </Row>
                </TabPane>
                </TabContent>
            </div>
        )   
    }   
}

export default DigitalMarketingResultsContainer;
