import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router';

const MainBanner = () => {
    //  w-[80%] mx-auto bottom-20 left-0 right-0
    return (
        <div className='mt-10 relative w-full'>
            <img src={assets.main_banner_bg} alt="banner image" className='w-full hidden md:block' loading='lazy' />
            <img src={assets.main_banner_bg_sm} alt="banner image small screnn" className='w-full md:hidden' />

            <div className='absolute  md:top-10 md:w-1/2  md:left-5 md:flex md:flex-col md:justify-between md:items-start md:space-y-6 
               
            '>
                <div className='pb-4'>
                    <h1 className='text-5xl font-bold max-lg:text-4xl    '>Freshness You Can Trust, Savings You Will Love!</h1>
                </div>
                <div className='flex justify-center items-center space-x-4'>
                    <Link to='/products' className='flex items-center bg-primary hover:bg-primary-dull px-4 py-3 rounded-md
                        text-white  
                    '>
                        Shop now
                        <img src={assets.white_arrow_icon} alt="arrow" loading='lazy' className='ml-2'/>
                    </Link>
                    <Link to='/products' className='flex items-center px-3 py-3 rounded-md
                        text-black text-lg  '>
                        Explore deals
                        <img src={assets.black_arrow_icon} alt="arrow" loading='lazy' className='pl-2'/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;