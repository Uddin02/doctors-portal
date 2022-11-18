import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-40 rounded-md'
        style={{
            background: `url(${appointment})`
        }}
            >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row pb-0">
                    <img src={doctor} alt="" className="-mt-36 hidden md:block lg:w-1/2 rounded-lg "/>
                    <div className='py-8'>
                        <h4 className='text-lg text-[#19D3AE] font-bold mb-3'>Appointment</h4>
                        <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-4 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;