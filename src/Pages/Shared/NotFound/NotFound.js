import React from 'react';
import sleeping from '../../../images/sleepy-mechanic.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mecchanic is sleeping</h2>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;