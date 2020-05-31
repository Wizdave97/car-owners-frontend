import React, {useState, useEffect} from 'react';
import Person from './Person';
import BackIcon from '../assets/back.svg';
import { useLocation,useHistory } from 'react-router-dom';

const People = (props) => {
    const location = useLocation();
    const { push } = useHistory();
    let filter = {};
    if (location.state)
    {
        filter = location.state.filter;
    }
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
        document.title = 'Car Owners'
        fetchPeople('https://immense-ravine-06184.herokuapp.com/people?page=1')
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
        <div className='w-full mx-auto p-4'>
            <div className='w-full flex flex-no-wrap justify-start items-center mb-4'>
                <div role="link" className='mx-2 flex flex-no-wrap cursor-pointer items-center' onClick={()=> push('/')} >
                    <div className='w-8 h-8 p-0 mx-2'>
                        <img className='w-full' src={BackIcon} alt='go home'/>
                    </div>
                    <h1 className='text-gray-900 text-md md:text-2xl mx-auto font-normal'>Filters</h1>
                </div>
                <h1 className='w-full text-center text-gray-900 text-lg md:text-2xl font-extrabold'>Car Owners</h1>
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