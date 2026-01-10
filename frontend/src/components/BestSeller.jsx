import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { AppContext } from '../context/AppContext';

const BestSeller = () => {
  const {product} = useContext(AppContext);
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
      <div className=''>
        <ProductCard product={product[0]}/>
      </div>
    </div>
  );
};

export default BestSeller;