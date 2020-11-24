import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { notify } from 'react-notify-toast';
import Header from "./DashHeader.js";
import HeaderLinks from "../Header/HeaderLinks.js";
import { validateAdmin } from "../../actions/validateAdmin.js";
import Admin from "../AdminPanel/Admin.js";
import DashHeaderLinks from "./dashboardHeaderLinks.js";
import Pricing from '../Pricing/Pricing.js';
import UserBlogs from '../../views/UserBlogs/UserBlogs.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (localStorage.getItem("authorizer") === 'ghdglkglg-jioru5867-qroighn-heou-509') {
      this.props.validateAdmin(true)
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
  }

  render() {
    const { user } = this.props.auth;

    return (
      <React.Fragment>
        {
          this.props.is_admin.isAdmin? <Admin /> : 
          
          <React.Fragment>
          <Header
            brand="Curvicare"
            rightLinks={<DashHeaderLinks />}
            fixed
            color="white"
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
          />
          <div className="mt-16">
            <UserBlogs />
          </div>
        </React.Fragment>
        }
        
      </React.Fragment>

    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  is_admin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  is_admin: state.is_admin
});

export default connect(
  mapStateToProps,
  { logoutUser, validateAdmin }
)(Dashboard);
