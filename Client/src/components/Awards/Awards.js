import React from 'react';

const Awards = () => {
    return (
        <React.Fragment>
            <h1 id="testimonials" style={{ color: '#4e6073', textAlign: 'center', fontFamily: 'Paytone One' }} className="sm:text-3xl mt-6 text-3xl md:text-4xl md:mt-16 lg:mt-16 font-extrabold title-font mb-4 text-gray-900"><span class="text-indigo-600" style={{ color: '#D00F7F' }}>AWARDS</span> AND <span class="text-indigo-600" style={{ color: '#D00F7F' }}> RECOGNITIONS</span></h1>
            <section className='p-12' style={{background: '#D00F7F'}}>
                <div class="bg-cover bg-center  h-auto text-white py-64 px-10 object-fill" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)" }}>
                    {/* <div class="md:w-1/2">
                    <p class="font-bold text-sm uppercase">Services</p>
                    <p class="text-3xl font-bold">Multimedia products</p>
                    <p class="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
                    <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
                </div> */}
                </div>
            </section>
        </React.Fragment>
    );
}

export default Awards;