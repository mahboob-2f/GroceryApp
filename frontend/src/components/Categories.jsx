import React, { useContext } from 'react';
import { assets, categories } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Categories = () => {
    const { navigate } = useContext(AppContext);
    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Categories</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6 '>

                {
                    categories.map((category, index) => (
                        <div style={{ backgroundColor: category.bgColor }} key={index}
                            onClick={() => {
                                navigate(`/products/${category.path.toLowerCase()}`)
                                scrollTo(0, 0);
                            }}
                            className='rounded-md flex flex-col justify-center items-center hover:scale-105 transition-all duration-200'>
                            <img src={category.image} alt={category.text} loading='lazy' />
                            <p className='text-sm font-semibold pb-2'>{category.text}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Categories;