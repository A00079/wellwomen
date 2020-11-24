import React, { Component } from 'react';
import './pricing.css';
class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                {/* <svg className="absolute top-0 right-0 h-full" xmlns="http://www.w3.org/2000/svg" style={{width:"375", height:"658"}}>
    <g fill="none" fillRule="evenodd" stroke="#D0D5F6" strokeWidth="2">
                    <path d="M172.71-101C70.623-79.38 17.478-39.688 13.273 18.074c-6.307 86.643 231.598 17.186 136.358 198-95.241 180.813-181.318 185.29-136.358 298C58.233 626.784 178.96 685.954 319.21 641.2c93.501-29.836 144.652-140.545 153.453-332.126" />
                    <path d="M214.7-101C134.617-82.012 92.926-47.154 89.628 3.575c-4.948 76.093 181.679 15.094 106.966 173.89C121.882 336.262 54.36 340.192 89.628 439.18c35.269 98.986 129.974 150.95 239.995 111.646C402.97 524.622 443.096 427.395 450 259.141" />
                    <path d="M250.935-103c-60.604 16.56-92.153 46.963-94.65 91.208-3.743 66.367 137.488 13.165 80.949 151.664-56.54 138.5-107.638 141.927-80.948 228.261 26.69 86.335 98.359 131.656 181.618 97.376C393.41 442.655 423.775 357.855 429 211.108" />
                </g>
  </svg> */}


                <h3 class="text-3xl sm:text-5xl md:text-4xl md:mt-16  leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
                    OUR <span class="text-indigo-600"> PRICING</span>
                </h3>
                <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
                    <div className="border rounded-lg md:rounded-r-none text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-10 shadow-lg">
                        <div className="">Basic</div>
                        <div id="month" className="font-bold text-6xl month hidden">$ 19.99</div>
                        <div id="annual" className="font-bold text-6xl annual">$ 199.99</div>
                        <hr />
                        <div className="text-sm my-3">500 GB Storage</div>
                        <hr />
                        <div className="text-sm my-3">2 Users Allowed</div>
                        <hr />
                        <div className="text-sm my-3">Send up to 3 GB</div>
                        <hr />
                        <a href="#" target="_blank">
                            <div className="bg-gradient-base border border-blue-600 hover:bg-white text-white hover:text-blue-600 font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">Learn More</div>
                        </a>
                    </div>

                    <div className="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 bg-gradient text-white font-medium z-10 shadow-lg">
                        <div className="py-4">Professional
        <div id="month" className="font-bold text-6xl month hidden"> $ 24.99</div>
                            <div id="annual" className="font-bold text-6xl annual">$ 249.99</div>
                            <hr />
                            <div className="text-sm my-3">1 TB Storage</div>
                            <hr />
                            <div className="text-sm my-3">5 Users Allowed</div>
                            <hr />
                            <div className="text-sm my-3">Send up to 10 GB</div>
                            <hr />
                            <a href="#" target="_blank">
                                <div className="bg-white border border-white hover:bg-transparent text-blue-600 hover:text-white font-bold uppercase text-xs mt-5 py-2 mpx-4 rounded cursor-pointer">Learn More</div>
                            </a>
                        </div>
                    </div>

                    <div className="border rounded-lg  md:rounded-l-none text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-10 shadow-lg">
                        <div className="">Master</div>
                        <div id="month" className="font-bold text-6xl month hidden">$ 39.99</div>
                        <div id="annual" className="font-bold text-6xl annual">$ 399.99</div>
                        <hr />
                        <div className="text-sm my-3">2 TB Storage</div>
                        <hr />
                        <div className="text-sm my-3">10 Users Allowed</div>
                        <hr />
                        <div className="text-sm my-3">Send up to 20 GB</div>
                        <hr />
                        <a href="#" target="_blank">
                            <div className="bg-gradient-base border border-blue-600 hover:bg-transparent text-white hover:text-blue-600 font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">Learn More</div>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Pricing;