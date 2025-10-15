import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { title, image, downloads, ratingAvg, id } = app


    return (
        <div>
            <Link to={`/app/${id}`}>
                <div className="p-3 rounded-lg bg-white hover:cursor-pointer transition-transform duration-100 hover:scale-[1.03] hover:shadow">
                    <div>
                        <img src={image} className='rounded-lg' alt="" />
                    </div>
                    <p className='text-[#001931] font-medium text-[16px] mt-3'>
                        {title}
                    </p>
                    <div className='flex justify-between items-center mt-3'>
                        <div className='flex gap-1 items-center bg-[#F1F5E8] font-medium text-[#00D390] text-[12px] p-[8px] rounded-sm'>
                            <i class="fa-solid fa-arrow-down"></i>
                            {downloads}
                        </div>
                        <div className='flex gap-1 items-center bg-[#F1F5E8] font-medium text-[#FF8811] text-[12px] p-[8px] rounded-sm'>
                            <i class="fa-solid fa-star"></i>
                            {ratingAvg}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AppCard;