import React, { Component } from 'react';
import signMale from '../../src/assets/img/signmale.png';
import signFemale from '../../src/assets/img/signfemale.png';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions.js";
import classnames from "classnames";
import Spinner from '../components/Spinner/Spinner.js';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { loginUser, googleRegister } from "../actions/authActions.js";
import logo from '../../src/assets/img/logo.png';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      sendingEmail: false
    };
  }
  componentWillMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      console.log('sendingEmail', nextProps.errors)
      if (nextProps.errors.name) {
        this.setState({ sendingEmail: false })
      }
      if (nextProps.errors.email === 'Email already exists') {
        this.setState({ sendingEmail: false })
      }
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  responseGoogle = (response) => {
    //Google
    //OG => 974319766461-sl24j1uanrhgto3mkacao9gcnmgpcvn6.apps.googleusercontent.com
    //prod => 129584180577-d9c9ejb2tqu1q1hua57k57174c89ui0s.apps.googleusercontent.com
    //production => 781211842293-ut2setg9ed4q53q90du78ss42nd7361o.apps.googleusercontent.com
    //development => 426378221340-idlmvnc00edci66h1k345p2f61437vhu.apps.googleusercontent.com

    //Facebook
    //production =>  628171701217446
    //development => 646713102629526
    console.log('response google', response)
    if (!!response) {
      const newUser = {
        name: response.profileObj.name,
        email: response.profileObj.email,
        password: response.profileObj.email,
      };
      this.props.googleRegister(newUser, this.props.history);
    }
  }

  responseFacebook = (response) => {
    console.log('face res', response);
  }

  facebookcallback = (data) => {
    console.log('face callback', data);
    if (!!data) {
      const newUser = {
        name: data.name,
        email: 'Not Available',
        password: data.id
      };
      this.props.googleRegister(newUser, this.props.history);
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    this.setState({ sendingEmail: true })
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    const { sendingEmail } = this.state
    return (
      <React.Fragment>
        <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
          <div
            class="max-w-screen-xl m-0 sm:m-20 bg-white shadow md:m-0 md:p-0 sm:rounded-lg flex justify-center flex-1"
          >

            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div class="mt-0 flex flex-col items-center">
                <h3  class="text-3xl sm:text-5xl md:text-4xl md:mt-0 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-0 sm:mb-10">
                  <Link to='/'><img width='100px' src={logo} /></Link>
                </h3>
                <h1 style={{ fontFamily: 'Paytone One' }} className="text-2xl xl:text-3xl font-extrabold">
                  <span>Sign Up For</span> <span style={{color:'#D00F7F'}}>Curvicare</span>
                </h1>
                <div class="w-full flex-1 mt-8">
                  <div class="flex flex-col items-center">
                    <div>
                      <GoogleLogin
                        clientId='974319766461-sl24j1uanrhgto3mkacao9gcnmgpcvn6.apps.googleusercontent.com'
                        buttonText='Sign In with Google'
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        responseType='code,token'
                      />
                    </div>
                    <div className="mt-4">
                      <div style={{
                        display: 'flex',
                        background: '#4267b2',
                        color: 'white',
                        padding: '9px 10px 6px 10px',
                        fontSize: '12px',
                        borderRadius: '4px'
                      }}>
                        <svg xmlns="" width="35" height="26" viewBox="10 0 45 45" version="1">
                          <path fill="#FFFFFF" d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z" />
                          <path fill="#4267b2" d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z" />
                        </svg>
                        <FacebookLogin
                          appId="628171701217446"
                          autoLoad={false}
                          fields="name,email,picture"
                          scope="public_profile, email"
                          callback={this.facebookcallback}
                          onClick={this.responseFacebook}
                          cssClass="my-facebook-button-class"
                          textButton="Sign In with Facebook"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="my-12 border-b text-center">
                    <div
                      class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                    >
                      Or sign up with e-mail
                    </div>
                  </div>

                  <form noValidate onSubmit={this.onSubmit}>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>                      <input
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                        type="text"
                        className={classnames("", {
                          invalid: errors.name,
                          "px-16 py-4 md:px-2 ml-4 md:ml-0 lg:px-10  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white": true
                        })}
                        placeholder="Name"
                      />
                        <span className="text-red-600">{errors.name}</span>
                      </div>
                      <div>
                        <input
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          id="email"
                          type="email"
                          className={classnames("", {
                            invalid: errors.email,
                            "px-16 py-4 md:px-2 ml-4 md:ml-0 lg:px-10 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-0": true
                          })}
                          placeholder="Email"
                        />
                        <span className="text-red-600">{errors.email}</span>
                      </div>
                      <div>
                        <input
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          className={classnames("", {
                            invalid: errors.password,
                            "px-16 py-4 md:px-2 ml-4 md:ml-0 lg:px-10 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-0": true
                          })}
                          placeholder="Password"
                        />
                        <span className="text-red-600">{errors.password}</span>
                      </div>
                      <div>
                        <input
                          onChange={this.onChange}
                          value={this.state.password2}
                          error={errors.password2}
                          id="password2"
                          type="password"
                          className={classnames("", {
                            invalid: errors.password2,
                            "px-16 py-4 md:px-2 ml-4 md:ml-0 lg:px-10 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-0": true
                          })}
                          placeholder="Confirm Password"
                        />
                        <span className="text-red-600">{errors.password2}</span>
                      </div>
                    </div>
                    <button
                      style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans',color:'#FFF' }}
                      type='submit'
                      class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      {sendingEmail
                        ? <Spinner size='lg' spinning='spinning' />
                        : <React.Fragment>
                          <svg
                            class="w-6 h-6 -ml-2"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <path d="M20 8v6M23 11h-6" />
                          </svg>
                          <span class="ml-3">
                            Sign Up
                            </span>
                        </React.Fragment>
                      }

                    </button>
                    <Link to="/">
                      <button
                        style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans',color:'#FFF' }}
                        type='submit'
                        class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      >
                        <KeyboardBackspaceIcon style={{ color: 'white' }} />
                        <span class="ml-3">
                          Back
                            </span>
                      </button>
                    </Link>
                    <p className="mt-4" style={{ float: 'right' }} style={{fontFamily: 'Open Sans',float: 'right'}}>Already have an account? <Link to="/login" className="text-blue-600">Sign In</Link></p>
                    <p style={{fontFamily: 'Open Sans'}} class="mt-12 text-xs text-gray-600 text-center">
                      I agree to the  
                 <a href="#" style={{fontFamily: 'Open Sans'}} class="border-b border-gray-500 border-dotted">
                         Terms of Service
                 </a>
                        and its
                <a href="#" style={{fontFamily: 'Open Sans'}} class="border-b border-gray-500 border-dotted">
                        Privacy Policy
                </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div class="flex-1 bg-indigo-100 text-center hidden lg:flex" style={{ display: 'none' }}>
              <div
                class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}
              ></div>
            </div>
          </div>
          <div class="REMOVE-THIS-ELEMENT-IF-YOU-ARE-USING-THIS-PAGE hidden treact-popup fixed inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
            <div class="max-w-lg p-8 sm:pb-4 bg-white rounded shadow-lg text-center sm:text-left">

              <h3 class="text-xl sm:text-2xl font-semibold mb-6 flex flex-col sm:flex-row items-center">
                <div class="bg-green-200 p-2 rounded-full flex items-center mb-4 sm:mb-0 sm:mr-2">
                  <svg class="text-green-800 inline-block w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                </div>
                Free TailwindCSS Component Kit!
          </h3>
              <p>I recently released Treact, a <span class="font-bold">free</span> TailwindCSS Component Kit built with React.</p>
              <p class="mt-2">It has 52 different UI components, 7 landing pages, and 8 inner pages prebuilt. And they are customizable!</p>
              <div class="mt-8 pt-8 sm:pt-4 border-t -mx-8 px-8 flex flex-col sm:flex-row justify-end leading-relaxed">
                <button class="close-treact-popup px-8 py-3 sm:py-2 rounded border border-gray-400 hover:bg-gray-200 transition duration-300">Close</button>
                <a class="font-bold mt-4 sm:mt-0 sm:ml-4 px-8 py-3 sm:py-2 rounded bg-purple-700 text-gray-100 hover:bg-purple-900 transition duration-300 text-center" href="https://treact.owaiskhan.me" target="_blank">See Treact</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser, googleRegister }
)(withRouter(SignUp));