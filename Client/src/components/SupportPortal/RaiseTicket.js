import React from 'react';
import './raiseticket.css';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import Spinner from '../../components/Spinner/Spinner';
import PostRaiseTicket from '../../REST/Raiseticket.js';
import Notifications, { notify } from 'react-notify-toast';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     icon: {
//         '&::after': {
//             content: '',
//             display: 'block',
//             position: 'absolute',
//             borderTop: '23px solid transparent',
//             borderBottom: '17px solid transparent',
//             borderLeft: '12px solid #3182ce',
//             left: '100%',
//             top: '0',
//         }
//       }
// }));

const RaiseTicket = () => {
    const [name, setName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState(0);
    const [email, setEmail] = React.useState('');
    const [userQuery, setUserQuery] = React.useState('');
    const [issubmited, setissubmited] = React.useState(false);

    // const generateOrderID = () => {
    //     let s4 = () => {
    //         return Math.floor((1 + Math.random()) * 0x10000)
    //             .toString(16)
    //             .substring(1);
    //     }
    //     //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    //     return '#'+ s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    // }
    const handelFormSubmit = () => {
        setissubmited(true)

        let api_url = "api/user/raiseticket/create";
        let ticketid = Math.floor(1000000000 + Math.random() * 9000000000);
        
        let data = {
            'name': name,
            'email': email,
            'phone': phoneNumber,
            'query': userQuery,
            'ticketid': '#'+ticketid.toString().replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
            'ticketstatus':'Pending'
        }
        PostRaiseTicket
            .postUserTicket(api_url, data)
            .then(response => {
                notify.show(response.msg, "custom", 4000, { background: '#0E1717', text: "#FFFFFF" })
                
                    document.getElementById('name').value = '';
                    document.getElementById('phonenumber').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('userquery').value = '';

                    console.log("Response Data...", response);
                    setissubmited(false)
            }).catch(err => setissubmited(false))
    }
    return (
        <React.Fragment>
            <div class="form bg-white p-6 my-10 relative shadow-lg shadow-md shadow" noValidate>

                <div class="icon text-white w-6 h-6 absolute flex items-center justify-center p-5" style={{ left: '-40px', background: '#D00F7F' }}><ReportProblemIcon /></div>
                <h3 class="text-2xl text-gray-900 font-semibold">Let us fix your problem!</h3>
                <p class="text-gray-600">We are here to help you.</p>
                <div class="flex space-x-5 mt-3">
                    <input onChange={event => { setName(event.target.value) }} type="text" name="" id="name" placeholder="Your Name" class="border p-2  w-1/2" />
                    <input onChange={event => { setPhoneNumber(event.target.value) }} type="tel" name="" id="phonenumber" placeholder="Your Number" class="border p-2 w-1/2" />
                </div>
                <input onChange={event => { setEmail(event.target.value) }} type="email" name="" id="email" placeholder="Your Email" class="border p-2 w-full mt-3" />
                <textarea onChange={event => { setUserQuery(event.target.value) }} name="" id="userquery" cols="10" rows="3" placeholder="Tell us about your query" class="border p-2 mt-3 w-full"></textarea>
                {/* <p class="font-bold text-sm mt-3">GDPR Agreement *</p>
                <div class="flex items-baseline space-x-2 mt-2">
                    <input type="checkbox" name="" id="" class="inline-block" />
                    <p class="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                </div> */}
                <button onClick={handelFormSubmit} style={{ outline: 'none',backgroundColor: '#D00f7F', fontFamily: 'Open Sans', color: '#FFF' }} class="w-full mt-6 text-white font-semibold p-3">
                    {
                        issubmited ? <Spinner size='lg' spinning='spinning' />
                            : 'Submit'
                    }
                </button>
            </div>

        </React.Fragment>
    );
}

export default RaiseTicket;