import React from "react";
import bgbike from '../../assets/images/bike.jpg';


const Contact = () => {
  return (
    <div style={{
        background:`url(${bgbike})`
    }} className='bg-primary px-10 py-14 '>
      <div className='text-center pb-14 text-white'>
        <p className='text-xl font-bold '>
          Contact Us
        </p>
        <h1 className='text-4xl'>Stay connected with us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button className="btn btn-primary">Submit</button>
        
      </div>
    </div>
  );
};

export default Contact;