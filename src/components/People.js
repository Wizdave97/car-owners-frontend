import React, {useState, useEffect} from 'react';
import Person from './Person';
import { useLocation } from 'react-router-dom';

const People = (props) => {
    const { filter } = useLocation().state;
    const [pages, setPages] = useState({nextPage: null,
                                prevPage:null})
    const [data, setData] = useState(null);
    const [fetchProgress, setFetchProgress] = useState({fetchStart: false, 
        fetchSuccess: false, fetchFail: false});
    const fetchPeople = (url) => {
        setFetchProgress({fetchStart: true, 
            fetchSuccess: false, fetchFail: false});
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filter)
        }).then((res) => res.json())
        .then(async (res) => {
            if(res.status === 500)
            {
        
                await setFetchProgress({fetchStart: false, 
                fetchSuccess: false, fetchFail: true});
                return;
            }
            if(res.status === 400){
                await setFetchProgress({fetchStart: false, 
                    fetchSuccess: true, fetchFail: true});
                return;
            }
            await setData(res.data);
            await setPages({nextPage: res.nextPage, prevPage: res.prevPage});
            await setFetchProgress({fetchStart: false, 
                fetchSuccess: true, fetchFail: false});
            
        })
        .catch(err => {
            setFetchProgress({fetchStart: false, 
                fetchSuccess: false, fetchFail: true});
        })
    }

    useEffect(() => {
        fetchPeople('http://localhost:3000/people?page=1')
    }, []);
    let list = (
        <div className='w-full flex flex-wrap my-2 p-2 justify-center'>
                <span className='bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2'>Loading Car Owners</span>
        </div>
    )
    if (fetchProgress.fetchSuccess)
    {
        if (data && data.length > 0)
        {
            list = data.map((obj) => {
                return <Person
                key = {String(obj.id)}
                firstName = {obj['first_name']}
                lastName = {obj['last_name']}
                email = {obj['email']}
                carModel = {obj['car_model']}
                carModelYear = {obj['car_model_year']}
                carColor = {obj['car_color']}
                country = {obj['country']}
                gender = {obj['gender']}
                jobTitle = {obj['job_title']}
                bio = {obj['bio']} />
            })
        } 
        else {
            list = (
                <div className='w-full flex flex-wrap my-2 p-2 justify-center'>
                    <span className='bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2'>There are no car owners that match the selected filter</span>
                </div>
            )
        }
    }
    if (fetchProgress.fetchFail)
    {
        list = (
            <div className='w-full flex flex-wrap my-2 p-2 justify-center'>
                <span className='bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2'>An error occured, please retry</span>
                <button onClick={() => fetchPeople(pages.nextPage)} className='bg-indigo-600 rounded-md text-center px-2 py-0 text-2xl text-gray-100 mx-2'>Click to retry</button>
            </div>
        )
    }
    return (
        <div className='w-full p-4'>
            <div className='w-full flex flex-no-wrap justify-start items-center mb-4'>
                <h1 className='text-gray-900 text-2xl mx-2 font-extrabold'>Car Owners</h1>
            </div>
            <div className='w-full flex flex-wrap p-4'>
                {list}
            </div>
            <div className='w-full flex flex-wrap p-4 justify-between'>
                <button onClick={() => fetchPeople(pages.prevPage)} 
                className={`bg-indigo-600 rounded text-center p-2 text-2xl text-gray-100 mx-2 ${!pages.prevPage ? 'opacity-50 cursor-not-allowed' : ''}`}>Previous Page</button>
                <button onClick={() => fetchPeople(pages.nextPage)} 
                className={`bg-indigo-600 rounded text-center p-2 text-2xl text-gray-100 mx-2 ${!pages.nextPage ? 'opacity-50 cursor-not-allowed' : ''}`} >Next Page</button>
            </div>
        </div>
    )
}
export default People;