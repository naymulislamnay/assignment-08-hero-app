import React from 'react';
import useAppsData from '../../hooks/useAppsData';
import { useParams } from 'react-router';
import RatingsGraph from '../Components/RattingsGraph';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useAppsData();

    const app = apps.find(p => p.id === Number(id));

    if (loading) return <p>Loading...</p>
    const { title, image, companyName, description, size, downloads, ratingAvg, reviews } = app || {}

    return (
        <div className='mt-15'>
            <div className='flex gap-7'>
                <img className='w-1/5 h-fit rounded-sm' src={image} alt="" />
                <div className='w-full flex flex-col justify-between'>
                    <div>
                        <h2 className='text-[24px] font-bold'>{title}</h2>
                        <p className='text-[16px] text-[#627382]'>Developed by <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>{companyName}</span>
                        </p>
                    </div>
                    <hr className='text-[#62738290] w-full' />
                    <div className='flex gap-4.5 w-fit'>
                        <div>
                            <img src="../../src/assets/icon-downloads.png" className='max-w-[30px]' alt="" />
                            <p className='text-[12px text-[#627382]'>Downloads</p>
                            <h3 className='text-[#001931] font-extrabold text-[30px]'>{downloads}</h3>
                        </div>
                        <div>
                            <img src="../../src/assets/icon-ratings.png" className='max-w-[30px]' alt="" />
                            <p className='text-[12px text-[#627382]'>Average Ratings</p>
                            <h3 className='text-[#001931] font-extrabold text-[30px]'>{ratingAvg}</h3>
                        </div>
                        <div>
                            <img src="../../src/assets/icon-review.png" className='max-w-[30px]' alt="" />
                            <p className='text-[12px text-[#627382]'>Total Reviews</p>
                            <h3 className='text-[#001931] font-extrabold text-[30px]'>{reviews}</h3>
                        </div>
                    </div>
                    <button className='bg-[#05a773] text-white py-[11px] px-4 rounded-lg text-[16px] hover:cursor-pointer w-fit'>
                        Install Now (<span>{size}</span> MB)
                    </button>
                </div>
            </div>
            <hr className='text-[#62738290] w-full mt-5.5 mb-5.5' />

            <div>
                <h2 className='text-[18px] font-semibold text-[#001931] ml-4'>Rattings</h2>
                <RatingsGraph ratings={app.ratings}></RatingsGraph>
            </div>

            <hr className='text-[#62738290] w-full mt-5.5 mb-5.5' />
            <div>
                <h2 className='text-[18px] font-semibold'>Description</h2>
                <p className='mt-4.5 text-[16px] text-[#627382]'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;