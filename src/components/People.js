import React from 'react';
import { useLocation } from 'react-router-dom';


const People = (props) => {
    const location = useLocation();
    console.log(location);
    return (
        <div className='w-full p-4'>
            <h1 className='text-gray-600 text-lg'>People</h1>
        </div>
    )
}
export default People;