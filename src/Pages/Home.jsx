import React from 'react';
import { Link } from 'react-router';
import useAppsData from '../../hooks/useAppsData';
import AppCard from '../Components/AppCard';

const Home = () => {
    const { loading, apps } = useAppsData();

    const trendingApps = apps.slice(0, 8);

    return (
        <div>
            <div className='text-center pt-15'>
                <h2 className='text-[#001931] font-bold text-[54px] leading-none'>We Build<br /><span className='font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
                <p className='max-w-[800px] mx-auto text-[16px] text-[#627382] mt-3'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='flex gap-2.5 w-fit mx-auto mt-[30px]'>
                    <button className="btn btn-soft text-[16px] bg-white text-[#001931] font-semibold border-gray-400">
                        <img src="/src/assets/PlayStoreLogo.png" className='w-6' alt="" />
                        Google Play
                    </button>
                    <button className="btn btn-soft text-[16px] bg-white text-[#001931] font-semibold border-gray-400">
                        <img src="/src/assets/AppStoreLogo.png" className='w-6' alt="" />
                        App Store
                    </button>
                </div>
                <div className='mx-auto w-fit mt-[30px]'>
                    <img src="/src/assets/hero.png" alt="" />
                </div>
            </div>
            <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center pt-15 pb-15'>
                <h2 className='font-bold text-[36px] text-white'>
                    Trusted by Millions, Built for You
                </h2>
                <div className='flex w-fit mx-auto gap-30 mt-[30px]'>
                    <div>
                        <p className='text-[12px] text-[#FFFFFF90]'>
                            Total Downloads
                        </p>
                        <h1 className='text-[48px] font-extrabold text-white leading-none'>
                            29.6M
                        </h1>
                        <p className='text-[12px] text-[#FFFFFF90]'>
                            21% more than last month
                        </p>
                    </div>
                    <div>
                        <p className='text-[12px] text-[#FFFFFF90]'>
                            Total Reviews
                        </p>
                        <h1 className='text-[48px] font-extrabold text-white leading-none'>
                            906K
                        </h1>
                        <p className='text-[12px] text-[#FFFFFF90]'>
                            46% more than last month
                        </p>
                    </div>
                    <div>
                        <p className='text-[12px] text-[#FFFFFF90]'>
                            Active Apps
                        </p>
                        <h1 className='text-[48px] font-extrabold text-white leading-none'>
                            132+
                        </h1>
                        <p className='text-[12px] text-[#FFFFFF90]'>
                            31 more will Launch
                        </p>
                    </div>
                </div>
            </div>

            <div className='text-center mt-15'>
                <div>
                    <h2 className='text-[36px] text-[#001931] font-bold'>
                        Trending Apps
                    </h2>
                    <p className='text-[16px] text-[#627382] mt-3'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>


                {
                    loading ? ('Loading...') : (
                        <div className="mt-[30px] grid grid-cols-4 gap-2.5">
                            {
                                trendingApps.map(app => (
                                    <AppCard key={app.id} app={app}></AppCard>
                                ))
                            }
                        </div>
                    )
                }


                {/* this button will show all the apps */}
                <Link to='/all-apps'>
                    <button className="btn btn-soft mt-[30px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-none">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;