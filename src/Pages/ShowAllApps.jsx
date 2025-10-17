import React, { useState } from 'react';
import SearchBox from '../Components/SearchBox';
import AppCard from '../Components/AppCard';
import useAppsData from '/hooks/useAppsData';


const ShowAllApps = () => {
    const { apps, loading } = useAppsData();
    const [search, setSearch] = useState('');


    const term = search.trim().toLowerCase();
    const searchedApps = term ? apps.filter(app => app.title.toLowerCase().includes(term)) : apps;




    return (
        <div>
            <div className='pt-5 md:pt-10 lg:pt-15 text-center'>
                <h2 className='text-2xl md:text-[30px] lg:text-[36px] text-[#001931] font-bold'>
                    Our All Applications
                </h2>
                <p className='text-[10px] md:text-[12px] lg:text-[16px] w-3/4 md:w-full mx-auto text-[#627382]'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <div className='mt-3 md:mt-5 lg:mt-7.5'>
                <div className='flex justify-between items-center p-1 lg:p-0 text-[10px] md:text-[12px] lg:text-[16px]'>
                    <p>
                        ({searchedApps.length}) Apps Found
                    </p>
                    <SearchBox search={search} setSearch={setSearch}></SearchBox>
                </div>
                <div className='mt-3'>
                    {
                        loading ? ('Loading...') : searchedApps.length === 0 ? (
                            <div>
                                <div>
                                    <img src="/App-Error.png" className='w-fit mx-auto mt-5 md:mt-10 lg:mt-15' alt="" />
                                    <div className='text-center'>
                                        <h2 className='text-2xl md:text-[30px] lg:text-[36px] text-[#001931] font-bold'>
                                            Oops, App Not found!
                                        </h2>
                                        <p className='text-[10px] md:text-[12px] lg:text-[16px] text-[#627382]'>
                                            The App you are looking for is not available.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 p-1 lg:p-0">
                                {
                                    searchedApps.map(app => (
                                        <AppCard key={app.id} app={app}></AppCard>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowAllApps;