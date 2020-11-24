import React, { useState } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import PostSerway from '../../REST/SubmitSerway.js';
import Spinner from '../Spinner/Spinner.js';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const [issubmited, setissubmited] = useState(false)

    const handelFormSubmit = () => {
        setissubmited(true)
        console.log('name', name)
        console.log('email', email)
        console.log('message', message)

        let api_url = "api/user/contact/create";
        let data = {
            'name': name,
            'email': email,
            'message': message
        }
        PostSerway
            .postSerway(api_url, data)
            .then(response => {
                alert(response.msg);
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
                console.log("Response Data...", response);
                setissubmited(false)
            }).catch((err) =>{
                notify.show('Failed to Submit Details', "custom", 4000, { background: '#0E1717', text: "#FFFFFF" })
                setissubmited(false)
            })
    }

    return (
        <React.Fragment>
            <div className="flex flex-col text-center w-full mb-0">
                {/* <h3 style={{ fontFamily: 'Paytone One' }} className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">CONTACT <span style={{ color: '#D00F7F' }}>US</span></h3> */}
                <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:text-4xl md:mt-32 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-0 sm:mb-10">
                CONTACT <span class="text-indigo-600" style={{ color: '#D00F7F' }}> US</span>
                </h3>
            </div>
            <section class="text-gray-700 body-font relative">
                <div class="container px-5 py-16 mx-auto flex sm:flex-no-wrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
                        <div class="bg-white relative flex flex-wrap py-6">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">ADDRESS</h2>
                                <p class="leading-relaxed">2, Ground floor, Pradhan Bhavan, Akshikar Marg, opp. to Chabildas CBSC school, Dadar West, Dadar, Mumbai, Maharashtra 400028</p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">EMAIL</h2>
                                <a class="text-indigo-500 leading-relaxed">drsnehaladsule@gmail.com</a>
                                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">PHONE</h2>
                                <p class="leading-relaxed">091376 17952</p>
                            </div>
                            <div class="bg-gray-200">
                                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                        <a class="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-3 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-3 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-3 text-gray-500">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                        <p class="leading-relaxed mb-5 text-gray-600">Please contact us if you have any queries or suggestions.</p>
                        <input id='name' onChange={event => { setName(event.target.value) }} class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="text" />
                        <input id='email'  onChange={event => { setemail(event.target.value) }} class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
                        <textarea id='message' onChange={event => { setmessage(event.target.value) }} class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
                        <button onClick={handelFormSubmit} style={{ backgroundColor: '#D00f7F', fontFamily: 'Open Sans', color: '#FFF' }} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            {
                                issubmited?<Spinner size='lg' spinning='spinning' />
                                : 'Submit'
                            }
                        </button>
                        {/* <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Contact;