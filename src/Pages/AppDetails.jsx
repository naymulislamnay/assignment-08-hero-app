import React, { useState } from 'react';
import useAppsData from '/hooks/useAppsData';
import { Link, useParams } from 'react-router';
import RatingsGraph from '../Components/RattingsGraph';
import { updateInstalled } from '/utils/localStorage';
import { formatNumbers } from '/utils/formatNumber';
import { isInstalled } from '/utils/localStorage';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useAppsData();

    const app = apps.find(p => p.id === Number(id));

    const [installed, setInstalled] = useState(() => isInstalled(Number(id)));

    const handleInstall = () => {
        updateInstalled(app);
        setInstalled(true);
    };

    if (loading) return <p>Loading...</p>

    const { title, image, companyName, description, size, downloads, ratingAvg, reviews } = app || {}

    return (
        <div className='mt-5 md:mt-10 lg:mt-15 p-1 lg:p-0'>
            <div className='flex gap-2 md:gap-4 lg:gap-7'>
                <img className='w-1/5 h-fit rounded-sm' src={image} alt="" />
                <div className='w-full flex flex-col justify-between'>
                    <div>
                        <h2 className='text-[12px] md:text-[18px] lg:text-[24px] font-bold'>{title}</h2>
                        <p className='text-[8px] md:text-[12px] lg:text-[16px] text-[#627382]'>Developed by <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>{companyName}</span>
                        </p>
                    </div>
                    <hr className='text-[#62738290] w-full' />
                    <div className='flex gap-4.5 w-fit'>
                        <div>
                            <img src="../../src/assets/icon-downloads.png" className='w-[16px] md:w-[24px] lg:w-[30px]' alt="" />
                            <p className='text-[8px] md:text-[10px] lg:text-[12px] text-[#627382]'>Downloads</p>
                            <h3 className='text-[#001931] font-extrabold text-[16px] md:text-[24px] lg:text-[30px]'>{formatNumbers(downloads)}</h3>
                        </div>
                        <div>
                            <img src="../../src/assets/icon-ratings.png" className='w-[16px] md:w-[24px] lg:w-[30px]' alt="" />
                            <p className='text-[8px] md:text-[10px] lg:text-[12px] text-[#627382]'>Average Ratings</p>
                            <h3 className='text-[#001931] font-extrabold text-[16px] md:text-[30px]'>{ratingAvg}</h3>
                        </div>
                        <div>
                            <img src="../../src/assets/icon-review.png" className='w-[16px] md:w-[24px] lg:w-[30px]' alt="" />
                            <p className='text-[8px] md:text-[10px] lg:text-[12px] text-[#627382]'>Total Reviews</p>
                            <h3 className='text-[#001931] font-extrabold text-[16px] md:text-[30px]'>{formatNumbers(reviews)}</h3>
                        </div>
                    </div>
                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={` text-white py-1 md:py-2 lg:py-[11px] px-2 md:px-3 lg:px-4 w-fit ${installed ? 'bg-amber-600' : 'bg-[#05a773] hover:cursor-pointer'}  rounded-sm md:rounded-lg text-[10px] md:text-[12px] lg:text-[16px]`}>
                        {installed ? 'Already Installed' : <>Install Now (<span>{size}</span> MB)</>}
                    </button>
                </div>
            </div>
            <hr className='text-[#62738290] w-full mt-2 md:mt-5.5 mb-2 md:mb-5.5' />


            <div>
                <h2 className='text-[12px] md:text-[14px] lg:text-[18px] font-semibold text-[#001931] ml-4'>Rattings</h2>
                <RatingsGraph ratings={app.ratings}></RatingsGraph>
            </div>

            <hr className='text-[#62738290] w-full mt-2 md:mt-5.5 mb-2 md:mb-5.5' />
            <div>
                <h2 className='text-[12px] md:text-[14px] lg:text-[18px] font-semibold'>Description</h2>
                <p className='mt-2 md:mt-4.5 text-[10px] md:text-[12px] lg:text-[16px] text-[#627382]'>
                    {description}
                </p>
            </div>
            <Link to='/all-apps' className='flex'>
                <button className="btn btn-soft mt-[30px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-none mx-auto w-fit">Back</button>
            </Link>
        </div>
    );
};

export default AppDetails;