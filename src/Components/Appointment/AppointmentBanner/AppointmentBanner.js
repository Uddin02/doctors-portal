import React from 'react';
import { DayPicker } from 'react-day-picker';
import appointmentChair from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    const css = `
        .my-selected:not([disabled]) { 
            font-weight: bold; 
            border: 2px solid currentColor;
        }
        .my-selected:hover:not([disabled]) { 
            border-color: blue;
            color: blue;
        }
        .my-today { 
            font-weight: bold;
            font-size: 140%; 
            color: skyblue;
        }
    `
    return (
        <section className='hero min-h-screen' style={{
            background: `url(${appointmentChair})`
        }}>
            <div className="hero">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="lg:max-w-xl rounded-lg shadow-2xl" />
                    <div className='mr-12 sm:w-full'>
                    <style>{css}</style>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                              }}
                              modifiersStyles={{
                                disabled: { fontSize: '75%' }
                              }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;