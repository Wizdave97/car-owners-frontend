import React, {useState, useEffect} from 'react';
import FilterImage from '../assets/filter.png';
import ListItem from './ListItem';

const Filters = (props) => {
    const [pages, setPages] = useState({nextPage: null,
                                prevPage:null})
    const [data, setData] = useState(null);
    const [fetchProgress, setFetchProgress] = useState({fetchStart: false, 
        fetchSuccess: false, fetchFail: false});
    const fetchFilters = (url) => {
        setFetchProgress({fetchStart: true, 
            fetchSuccess: false, fetchFail: false});
        fetch(url).then((res) => res.json())
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
    const selectFilter = (filter) => (location) => {
        return {
            ...location,
            pathname: '/people',
            state: {filter}
        }
    }
    useEffect(() => {
        fetchFilters('http://localhost:3000/filters?page=1');
    }, []);
    let list = (
        <div className='w-full flex flex-wrap my-2 p-2 justify-center'>
                <span className='bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2'>Loading Filters</span>
        </div>
    )
    if (fetchProgress.fetchSuccess)
    {
        if (data && data.length > 0)
        {
            list = data.map((obj) => {
                for (let key in obj)
                {
                    if (obj[key]) continue;
                    else delete obj[key];
                }
                return <ListItem 
                key = {String(obj.id)}
                selectFilter = {selectFilter(obj)}
                startYear = {obj["start_year"]} 
                endYear = {obj["end_year"]}
                gender = {obj.gender}
                colors = {obj.colors}
                countries = {obj.countries}/>
            })
        } 
        else {
            list = (
                <div className='w-full flex flex-wrap my-2 p-2 justify-center'>
                    <span className='bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2'>No filters found</span>
                </div>
            )
        }
    }
    if (fetchProgress.fetchFail)
    {
        list = (
            <div className='w-full flex flex-wrap my-2 p-2 justify-center'>
                <span className='bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2'>An error occured, please retry</span>
                <button onClick={() => fetchFilters(pages.nextPage)} className='bg-indigo-600 rounded-md text-center px-2 py-0 text-2xl text-gray-100 mx-2'>Click to retry</button>
            </div>
        )
    }
    return (
        <div className='w-full p-4'>
            <div className='w-full flex flex-no-wrap justify-start items-center mb-4'>
                <div className='w-8 h-8 rounded-md mx-2'>
                    <img className='w-full' src={FilterImage} alt='filters'/>
                </div>
                <h1 className='text-gray-900 text-2xl mx-2 font-extrabold'>Filters</h1>
            </div>
            <div className='w-full flex flex-wrap p-4'>
                {list}
            </div>
            <div className='w-full flex flex-wrap p-4 justify-between'>
                <button onClick={() => fetchFilters(pages.prevPage)} 
                className={`bg-indigo-600 rounded text-center p-2 text-2xl text-gray-100 mx-2 ${!pages.prevPage ? 'opacity-50 cursor-not-allowed' : ''}`}>Previous Page</button>
                <button onClick={() => fetchFilters(pages.nextPage)} 
                className={`bg-indigo-600 rounded text-center p-2 text-2xl text-gray-100 mx-2 ${!pages.nextPage ? 'opacity-50 cursor-not-allowed' : ''}`} >Next Page</button>
            </div>
        </div>
    )
}
export default Filters;