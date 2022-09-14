import React from 'react';
import './subscribe.scss';

const Subscribe = () => {
  return (
    <>
        <div className="subscribe">
        <h2 className='subscribe__title'>
        Subscribe our newsletter to be notified when it’ll be live.
        </h2>
        <div className="subscribe__inputs">
            <input type="text" placeholder='Email address' />
            <button className='btn'>
            Subscribe
            </button>
        </div>
        </div>
    </>
  )
}

export default Subscribe