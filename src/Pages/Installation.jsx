import React, { useState } from 'react';
import { loadInstalled, removeFromInstalled } from '/utils/localStorage';
import { Link } from 'react-router';
import { formatNumbers } from '/utils/formatNumber';

const Installation = () => {
    const [installed, setInstalled] = useState(() => loadInstalled())
    const [sortOrder, setSortOrder] = useState('none');

    if (!installed.length) return (<div className='pt-5 md:pt-10 lg:pt-15 text-center'>
        <h2 className='text-2xl md:text-[30px] lg:text-[36px] text-[#001931] font-bold'>
            You don't have any App Installed !!!
        </h2>
        <p className='text-[10px] md:text-[12px] lg:text-[16px] text-[#627382]'>
            Explore All Trending Apps on the Market developed by us
        </p>
        <Link to='/all-apps'>
            <button className="btn btn-soft mt-[30px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-none">Show All Apps</button>
        </Link>
    </div>)

    const sortedApps = (() => {
        if (sortOrder === 'price-asc') {
            return [...installed].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'price-desc') {
            return [...installed].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installed
        }
    })();

    const handleUninstall = id => {
        removeFromInstalled(id);
        setInstalled(prev => prev.filter(ap => ap.id !== id))
    }


    return (
        <div>
            <div className='pt-5 md:pt-10 lg:pt-15 text-center'>
                <h2 className='text-2xl md:text-[30px] lg:text-[36px] p-1 lg:p-0 text-[#001931] font-bold'>
                    Your Installed Apps
                </h2>
                <p className='text-[10px] md:text-[12px] lg:text-[16px] text-[#627382]'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className='mt-3 md:mt-5 lg:mt-7.5 p-1 lg:p-0'>
                <div className='flex justify-between items-center text-[10px] md:text-[12px] lg:text-[16px]'>
                    <p>
                        ({sortedApps.length}) Apps Found
                    </p>
                    <label className='form-control w-fit max-w-xs'>
                        <select
                            className='select select-bordered bg-white text-[10px] md:text-[12px] lg:text-[16px]' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                            <option value='none'>Sort by Number of Downloads</option>
                            <option value='price-asc'>Low-&gt;High</option>
                            <option value='price-desc'>High-&gt;Low</option>
                        </select>
                    </label>
                </div>
                <div className='mt-3 flex flex-col gap-1 md:gap-2 lg:gap-3'>
                    {
                        sortedApps.map(app => (
                            <div className='bg-white flex items-center justify-between p-3 rounded-sm'>
                                <div className='flex items-center gap-3'>
                                    <img src={app.image} alt={app.title} className='w-[40px] md:w-[50px] lg:w-[60px] rounded-lg' />
                                    <div className='flex flex-col gap-2'>
                                        <h2 className='text-[10px] md:text-[12px] lg:text-[16px]'>{app.title}</h2>
                                        <div className='flex items-center gap-3'>
                                            <div className='flex items-center gap-1 text-[#00D390]'>
                                                <img src="../../src/assets/icon-downloads.png" className='max-w-[30px] h-fit w-2 md:w-3' />
                                                <h3 className='font-extrabold text-[8px] md:text-[10px] lg:text-[12px]'>{

                                                    formatNumbers(app.downloads)
                                                }</h3>
                                            </div>
                                            <div className='flex items-center gap-1 text-[#FF8811]'>
                                                <img src="../../src/assets/icon-ratings.png" className='max-w-[30px] h-fit w-2 md:w-3' />
                                                <h3 className='font-extrabold text-[8px] md:text-[10px] lg:text-[12px]'>{app.ratingAvg}</h3>
                                            </div>
                                            <p className='text-[#627382] text-[8px] md:text-[10px] lg:text-[12px]'>
                                                {app.size} MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => handleUninstall(app.id)} className='bg-[#05a773] text-white py-[11px] px-4 rounded-lg text-[10px] md:text-[12px] lg:text-[16px] hover:cursor-pointer w-fit h-fit'>
                                    Uninstall
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;