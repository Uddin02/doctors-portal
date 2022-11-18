import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className="p-6 dark:text-gray-100 rounded-md mb-10" style={{background: `url(${appointment})`}}>
            <form  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md ng-untouched ng-pristine ng-valid">
                <h2 className="w-full text-md font-bold leading-tight text-center text-primary">Contact us</h2>
                <h2 className="w-full text-lg  leading-tight text-center text-white">Stay connected with us</h2>
                
                <div>
                    <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 text-gray-800 text-md font-medium rounded focus:outline-none focus:ring focus:ring-opacity-60 focus:ring-primary dark:bg-base" />
                </div>
                <div>
                    <input id="name" type="text" placeholder="Subject" required="" className="block w-full p-2 text-gray-800 text-md font-medium rounded focus:outline-none focus:ring focus:ring-opacity-60 focus:ring-primary dark:bg-base" />
                </div>
                <div>
                    <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 text-gray-800 text-md font-medium rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-60 focus:ring-primary dark:bg-base"></textarea>
                </div>
                <div className='flex justify-center'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;