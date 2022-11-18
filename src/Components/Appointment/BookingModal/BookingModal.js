import { format } from 'date-fns';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);
    
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        // console.log(name);
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
        }
  
        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTreatment(null);
            if(data.acknowledged){
                Swal.fire({
                    title: 'Booking Confirmed',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#05C3DD'
                })
                
                refetch();
            }
            else{
                Swal.fire({
                    title: `${data.message}`,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#c61a09'
                })
            }
        })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-6 top-5">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" required className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;