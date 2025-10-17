import React from 'react';
import { Link } from 'react-router';
import useAppsData from '/hooks/useAppsData';
import AppCard from '../Components/AppCard';

const Home = () => {
    const { loading, apps } = useAppsData();

    const trendingApps = apps.slice(0, 8);

    return (
        <div>
            <div className='text-center pt-5 md:pt-10 lg:pt-15'>
                <h2 className='text-[#001931] font-bold text-2xl md:text-[36px] lg:text-[54px] leading-none'>We Build<br /><span className='font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
                <p className='max-w-[800px] mx-auto text-[10px] md:text-[12px] lg:text-[16px] w-9/10 md:w-full text-[#627382] mt-1 md:mt-2 lg:mt-3'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='flex gap-2.5 w-fit mx-auto mt-3 md:mt-5 lg:mt-7.5'>
                    <a href='https://play.google.com/store/' className="btn btn-soft text-[10px] md:text-[12px] lg:text-[16px] bg-white text-[#001931] font-semibold border-gray-400">
                        <img src="/PlayStoreLogo.png" className='w-3 md:w-6' alt="" />
                        Google Play
                    </a>
                    <a href='https://www.apple.com/app-store/' className="btn btn-soft text-[10px] md:text-[12px] lg:text-[16px] bg-white text-[#001931] font-semibold border-gray-400">
                        <img src="/AppStoreLogo.png" className='w-3 md:w-6' alt="" />
                        App Store
                    </a>
                </div>
                <div className='mx-auto px-2 w-fit mt-3 md:mt-5 lg:mt-7.5'>
                    <img src="/hero.png" alt="" />
                </div>
            </div>
            <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center pt-5 md:pt-10 lg:pt-15 pb-5 md:pb-10 lg:pb-15'>
                <h2 className='font-bold text-[18px] md:text-2xl lg:text-[36px] text-white'>
                    Trusted by Millions, Built for You
                </h2>
                <div className='flex flex-col md:flex-row w-fit mx-auto gap-5 md:gap-30 mt-3 md:mt-5 lg:mt-7.5'>
                    <div>
                        <p className='text-[8px] md:text-[10px] lg:text-[12px] text-[#FFFFFF90]'>
                            Total Downloads
                        </p>
                        <h1 className='text-[30px] md:text-[38px] lg:text-[48px] font-extrabold text-white leading-none'>
                            29.6M
                        </h1>
                        <p className='text-[8px] md:text-[10px] lg:text-[12px] text-[#FFFFFF90]'>
                            21% more than last month
                        </p>
                    </div>
                    <div>
                        <p className='text-[8px] md:text-[10px] lg:text-[12px] text-[#FFFFFF90]'>
                            Total Reviews
                        </p>
                        <h1 className='text-[30px] md:text-[38px] lg:text-[48px] font-extrabold text-white leading-none'>
                            906K
                        </h1>
                        <p className='text-[8px] md:text-[10px] lg:text-[12px] text-[#FFFFFF90]'>
                            46% more than last month
                        </p>
                    </div>
                    <div>
                        <p className='text-[8px] md:text-[10px] lg:text-[12px] text-[#FFFFFF90]'>
                            Active Apps
                        </p>
                        <h1 className='text-[30px] md:text-[38px] lg:text-[48px] font-extrabold text-white leading-none'>
                            132+
                        </h1>
                        <p className='text-[8px] md:text-[10px] lg:text-[12px] text-[#FFFFFF90]'>
                            31 more will Launch
                        </p>
                    </div>
                </div>
            </div>

            <div className='text-center mt-5 md:mt-10 lg:mt-15'>
                <div>
                    <h2 className='text-[20px] md:text-[28px] lg:text-[36px] text-[#001931] font-bold'>
                        Trending Apps
                    </h2>
                    <p className='text-[10px] md:text-[12px] lg:text-[16px] text-[#627382] mt-1 md:mt-2 lg:mt-3'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>


                {
                    loading ? ('Loading...') : (
                        <div className="mt-3 md:mt-5 lg:mt-7.5 p-1 lg:p-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
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
                    <button className="btn btn-soft mt-3 md:mt-5 lg:mt-7.5 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-none ">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;