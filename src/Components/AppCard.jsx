import React from 'react';
import { Link } from 'react-router';
import { formatNumbers } from '/utils/formatNumber';


const AppCard = ({ app }) => {
    const { title, image, downloads, ratingAvg, id } = app


    return (
        <div>
            <Link to={`/app/${id}`}>
                <div className="p-3 rounded-lg bg-white hover:cursor-pointer transition-transform duration-100 hover:scale-[1.03] hover:shadow">
                    <div>
                        <img src={image} className='rounded-lg' alt="" />
                    </div>
                    <p className='text-[#001931] text-left font-medium text-[10px] md:text-[12px] lg:text-[16px] mt-1 md:mt-2 lg:mt-3'>
                        {title}
                    </p>
                    <div className='flex justify-between items-center mt-1 md:mt-2 lg:mt-3'>
                        <div className='flex gap-1 items-center bg-[#F1F5E8] font-medium text-[#00D390] text-[8px] md:text-[10px] lg:text-[12px] p-1 md:p-2 rounded-sm'>
                            <i class="fa-solid fa-arrow-down"></i>
                            {formatNumbers(downloads)}
                        </div>
                        <div className='flex gap-1 items-center bg-[#F1F5E8] font-medium text-[#FF8811] text-[8px] md:text-[10px] lg:text-[12px] p-1 md:p-2 rounded-sm'>
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