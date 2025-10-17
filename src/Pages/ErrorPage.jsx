import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router'

const ErrorPage = () => {

    return (
        <div>
            <Navbar />
            <div>
                <img src="/src/assets/error-404.png" className='w-fit mx-auto mt-5 md:mt-10 lg:mt-15 px-10 lg:px-0' alt="" />
                <div className='text-center'>
                    <h2 className='text-2xl md:text-[30px] lg:text-[36px] text-[#001931] font-bold'>
                        Oops, page not found!
                    </h2>
                    <p className='text-[10px] md:text-[12px] lg:text-[16px] text-[#627382]'>
                        The page you are looking for is not available.
                    </p>
                </div>
                <div className='w-fit mx-auto'>
                    <Link to='/'>
                        <button className="btn btn-soft mt-3 md:mt-5 lg:mt-7.5 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-none">Go Back</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage