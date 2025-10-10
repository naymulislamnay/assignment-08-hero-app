import React from 'react';
import appData from '../../public/appData.json';

const AppCard = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-2.5">
                {appData.map(app => (
                    <div key={app.id} className="p-3 rounded-lg bg-white hover:cursor-pointer transition-transform duration-100 hover:scale-[1.03] hover:shadow">
                        <div>
                            <img src={app.image} className='rounded-lg' alt="" />
                        </div>
                        <p className='text-[#001931] font-medium text-[16px] mt-3'>
                            {app.title}
                        </p>
                        <div className='flex justify-between items-center mt-3'>
                            <div className='flex gap-1 items-center bg-[#F1F5E8] font-medium text-[#00D390] text-[12px] p-[8px] rounded-sm'>
                                <i class="fa-solid fa-arrow-down"></i>
                                {app.downloads}
                            </div>
                            <div className='flex gap-1 items-center bg-[#F1F5E8] font-medium text-[#FF8811] text-[12px] p-[8px] rounded-sm'>
                                <i class="fa-solid fa-star"></i>
                                {app.ratingAvg}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppCard;