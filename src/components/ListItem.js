import React from 'react';
import { Link } from 'react-router-dom';
import ColorTag from './ColorTag';

const ListItem = (props) => {

    return (
        <Link to={props.selectFilter} className='w-full p-0 my-4'>
        <div className='w-full bg-white rounded-lg shadow-inner overflow-hidden'>
            <div className='w-full my-2 p-2'>
                <h2 className='w-full text-center text-2xl text-gray-900 font-bold'>{`${props.startYear} - ${props.endYear}`}</h2>
            </div>
            <div className='w-full my-2 p-2'>
                <h3 className='w-full text-center text-xl text-gray-700 font-normal capitalize'>{props.gender}</h3>
            </div>
            {props.countries && props.countries.length > 0 ? <div className='w-full flex flex-wrap my-2 p-2 justify-center'>
                {props.countries.map( country => (
                    <span key={country} className='bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2 my-2'>{country}</span>
                ))}
            </div> : null}
            {props.colors && props.colors.length > 0 ?<div className='w-full flex flex-wrap my-2 p-2 justify-center'>
                {props.colors.map( color => (
                    <ColorTag key={color} color={color}/>
                ))}
            </div> : null}
        </div>
        </Link>
    )
}

export default ListItem;