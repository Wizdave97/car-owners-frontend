import React from 'react';
import carImage from '../assets/car.jpg';
import ColorTag from './ColorTag';

const Person = (props) => {

    return (
     
        <div className='w-full p-2 my-4 flex flex-wrap md:flex-no-wrap bg-white rounded-lg shadow-inner overflow-hidden items-center'>
            <div className='w-full md:w-3/12 bg-transparent my-2 px-2 py-5'>
                <div className='w-full rounded-md shadow-xl overflow-hidden'>
                    <img className='w-full' src={carImage} alt='Car' />
                </div>
            </div>
            <div className='w-full md:w-9/12 my-2 p-2'>
                <div className="w-full my-2"><h3 className='w-full px-2 text-left text-2xl text-gray-900 font-normal'>{`${props.firstName} ${props.lastName}`}</h3></div>
                <div className="w-full p-0 my-2 flex flex-no-wrap items-end">
                    <ul className="h-12 p-0 list-none">
                        <li className="px-2 py-0 text-md text-gray-600">Brand</li>
                        <li className="px-2 py-0 text-md text-gray-900">{props.carModel}</li>
                    </ul>
                    <div class="w-px h-12 mx-2 bg-gray-900"></div>
                    <ul className="h-12 p-0 list-none">
                        <li className="px-2 py-0 text-md text-gray-600">Year</li>
                        <li className="px-2 py-0 text-md text-gray-900">{props.carModelYear}</li>
                    </ul>
                    <div class="w-px h-12 mx-2 bg-gray-900"></div>
                    <ul className="h-12 p-0 list-none">
                        <li className="px-2 py-0 text-md text-gray-600">Color</li>
                        <li className="px-2 py-0">
                            <ColorTag color={props.carColor} />
                        </li>
                    </ul>
                </div>
                <div className="w-full p-0 my-2 flex flex-wrap md:flex-no-wrap items-start">
                    <ul className="p-0 list-none">
                        <li className="px-2 py-0 text-md text-gray-600">Country</li>
                        <li className="px-2 py-0 text-md text-gray-900">{props.country}</li>
                    </ul>
                    <div class="w-px h-full mx-2 bg-transparent"></div>
                    <ul className="p-0 list-none">
                        <li className="px-2 py-0 text-md text-gray-600">Gender</li>
                        <li className="px-2 py-0 text-md text-gray-900 capitalize">{props.gender}</li>
                    </ul>
                    <div class="w-px h-full mx-2 bg-transparent"></div>
                    <ul className="p-0 list-none">
                        <li className="px-2 py-0 text-md text-gray-600">Job</li>
                        <li className="px-2 py-0 text-md text-gray-900">{props.jobTitle}</li>
                    </ul>
                </div>
                <div className="w-full p-0 my-2">
                    <p className="px-2 py-0 m-0 text-md text-gray-900 truncate">
                        <span className="pr-2 py-0 text-md text-gray-600">Email:</span>
                        {props.email}
                    </p>
                </div>
                <div className="w-full p-0 my-2">
                    <p className="px-2 py-0 m-0 text-md text-gray-900 truncate">
                        <span className="pr-2 py-0 text-md text-gray-600">Bio:</span>
                        {props.bio}
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default Person;