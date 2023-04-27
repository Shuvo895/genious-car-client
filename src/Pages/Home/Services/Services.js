import React, { useEffect } from 'react';
import { useState } from 'react';
import ServiceCart from './ServiceCart';
const Services = () => {
    const [services,setServices] = useState([]);
    useEffect( ()  =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl font-semibold'>Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised<br/> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-col-2 lg:grid-cols-3 mb-4'>
                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;