import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { loginUser, googleRegister } from "../../actions/authActions.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SignUpModal = (props) => {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        setOpen(props.showModal)
    }, [props])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const responseGoogle = (response) => {
        //Google
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

    const responseFacebook = (response) => {
        console.log('face res', response);
    }

    const facebookcallback = (data) => {
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

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle  style={{fontFamily: 'Paytone One'}} id="alert-dialog-title">{"SignUp For More Blogs."}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <div>
                                    <GoogleLogin
                                        clientId='974319766461-sl24j1uanrhgto3mkacao9gcnmgpcvn6.apps.googleusercontent.com'
                                        buttonText='Sign In with Google'
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
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
                                            callback={facebookcallback}
                                            onClick={responseFacebook}
                                            cssClass="my-facebook-button-class"
                                            textButton="Sign In with Facebook"
                                        />
                                    </div>

                                </div>

                            </div>

                            <div className="my-6 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                                >
                                    Or sign in with e-mail
                           </div>
                                <Link to="/signup">
                                    <button
                                    
                                    style={{    
                                        backgroundColor: '#D00F7F', fontFamily: 'Open Sans',color:'#FFF',
                                        width: '213px',
                                        margin: '0 auto',
                                        marginTop: '1rem',
                                        marginBttom: '1rem'}}
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    >
                                        <svg
                                            className="w-6 h-6 -ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Sign Up
                </span>
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

SignUpModal.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg: state.msg
});

export default connect(
    mapStateToProps,
    { loginUser, googleRegister }
)(SignUpModal);
