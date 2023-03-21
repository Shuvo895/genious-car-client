import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mb-10 pb-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className='relative w-1/2'>
          <img src={person} alt="" className="w-96 h-96 rounded-lg shadow-2xl" />
          <img src={parts} alt="" className="absolute right-0 border-8 top-1/2 w-80 h-80 rounded-lg shadow-2xl" />
          </div>
          <div className='w-1/2'>
            <p className='text-2xl font-bold text-orange-600 py-6'>About Us</p>
            <h1 className="text-5xl font-bold">
                We are qualified<br/> 
                $ of experience <br/>
                in this field</h1>
            <p className="py-6">There Are Many Variations og passages of Lorem Ipsum <br/> Avilable,But The Majority Have Suffered Atteration In Some Form, By Injected Humour Or Randomised Words Which <br/> Don't Look Even Slightly Believable.</p>
           <p className="py-2"> The Majority Have Suffered Alterstion in Some Form,By <br/>Injected Humour Or Randomised Words Which don't Look <br/> Even Slightly Believable.</p>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;