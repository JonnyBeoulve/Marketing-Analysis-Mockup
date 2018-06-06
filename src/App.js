import React from 'react';
import { BrowserRouter,
         Route,
         Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import DashboardContainer from './containers/DashboardContainer/DashboardContainer';
import DigitalMarketingContainer from './containers/DigitalMarketingContainer/DigitalMarketingContainer';
import MyCampaignsContainer from './containers/MyCampaignsContainer/MyCampaignsContainer';
import MyProfileContainer from './containers/MyProfileContainer/MyProfileContainer';
import HelpContainer from './containers/HelpContainer/HelpContainer';

/*======================================================================
// This will handle all routes for the program. If one  of the 
// programmed paths isn't matched, it will load the default container.
======================================================================*/
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={LoginContainer} />
      <Route exact path={'/dashboard'} component={DashboardContainer} />
      <Route exact path={'/digitalmarketing'} component={DigitalMarketingContainer} />
      <Route exact path={'/mycampaigns'} component={MyCampaignsContainer} /> 
      <Route exact path={'/myprofile'} component={MyProfileContainer} /> 
      <Route exact path={'/help'} component={HelpContainer} /> 
      <Route component={LoginContainer} />
    </Switch>
  </BrowserRouter>
)

export default App;