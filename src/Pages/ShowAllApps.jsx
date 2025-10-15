import React from 'react';
import SearchBox from '../Components/SearchBox';
import AppCard from '../Components/AppCard';
import useAppsData from '../../hooks/useAppsData';


const ShowAllApps = () => {
    const { apps, loading } = useAppsData();


    return (
        <div>
            <div className='mt-15 text-center'>
                <h2 className='text-[36px] text-[#001931] font-bold'>
                    Our All Applications
                </h2>
                <p className='text-[16px] text-[#627382]'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <div className='mt-[30px]'>
                <div className='flex justify-between'>
                    <p>
                        ({apps.length}) Apps Found
                    </p>
                    <SearchBox></SearchBox>
                </div>
                <div className='mt-3'>
                    {
                        loading ? ('Loading...') : (
                            <div className="grid grid-cols-4 gap-2.5">
                                {
                                    apps.map(app => (
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