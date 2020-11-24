import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import Notifications from 'react-notify-toast'

import { setCurrentUser, logoutUser } from "./actions/authActions.js";
import { Provider } from "react-redux";
import store from "./store.js";

import Confirm from './components/ConfirmEmail/Confirm.js';
import PrivateRoute from "./components/private-route/PrivateRoute.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import LandingPage from "../src/views/LandingPage.js";
import SignIn from "../src/views/SignIn.js";
import SignUp from "../src/views/SignUp.js";
import StartJourney from "../src/views/StartJourney.js";
import YoutubeVideos from "../src/views/YoutubeVideos/youtubeVideos.js";
import TrialBlog from "../src/views/TrialBlogs/TrialBlogs.js";
import SingleBlog from "../src/views/UserBlogs/SingleBlog.js";
import Pricing from "../src/views/UserPricing.js";
import PrivacyPolicy from '../src/views/PrivacyPolicy.js';
import SingleAboutUs from '../src/views/AboutUs';
import KnowMore from '../src/components/HowItWorks/KnowMore.js';
import ComingSoon from './views/ComingSoon.js';
import Admin from '../src/components/AdminPanel/Admin.js';
import SupportPortal from '../src/components/SupportPortal/SupportPortal.js';

var hist = createBrowserHistory();
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router history={hist}>
        <Notifications />
        {/* <Route exact path="/" component={ComingSoon} /> */}

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path='/confirm/:id' component={Confirm} />
        <Route exact path="/startjourney" component={StartJourney} />
        <Route exact path="/TrialBlog" component={TrialBlog} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/singleaboutus" component={SingleAboutUs} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/YoutubeVideos" component={YoutubeVideos} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/blog/:id" component={SingleBlog} />
        <Route exact path="/knowmore" component={KnowMore} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/support" component={SupportPortal} />
        <Switch>
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          {/* <PrivateRoute exact path="/pricing" component={Pricing} /> */}
          {/* <PrivateRoute exact path="/blog/:id" component={SingleBlog} /> */}
          {/* <PrivateRoute exact path="/YoutubeVideos" component={YoutubeVideos} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
