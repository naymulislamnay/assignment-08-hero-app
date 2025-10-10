import React from 'react';

const AppNotFound = () => {
    return (
        <div>
            <Navbar />
            <div>
                <img src="/src/assets/error-404.png" className='w-fit mx-auto mt-15' alt="" />
                <div className='text-center'>
                    <h2 className='text-[36px] text-[#001931] font-bold'>
                        Oops, page not found!
                    </h2>
                    <p className='text-[16px] text-[#627382]'>
                        The page you are looking for is not available.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AppNotFound;