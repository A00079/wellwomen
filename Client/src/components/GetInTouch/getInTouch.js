import React, { Component } from 'react';

class getIntouch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <h1 style={{ color: '#4e6073', textAlign: 'center', fontFamily: 'Paytone One' }} className="sm:text-3xl text-3xl md:text-4xl md:mt-16 mt-24 lg:mt-16 font-extrabold title-font mb-4 text-gray-900">GET IN  <span class="text-indigo-600" style={{ color: '#D00F7F' }}>TOUCH WITH US</span></h1>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 md:px-0 py-8 lg:py-2 md:py-24 mx-auto" id="contactus">
                        <h1 style={{ fontFamily: 'Open Sans' }} class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10">Still confuse Get a FREE Suggetion from our Health Expert on WhatsApp
                    </h1>
                        <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10'>
                            <a href="https://api.whatsapp.com/send?phone=9109137617952&text=Hello." style={{ width: '20%', background: '#D00F7F', color: '#fff', margin: '0 auto', fontFamily: 'Open Sans' }} className="flex-shrink-0 text-white  border-0 py-2 px-8 focus:outline-none  rounded text-lg mt-20 sm:mt-0">
                                Click Here To Chat</a>
                        </h1>

                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default getIntouch;