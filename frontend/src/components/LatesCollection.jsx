import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const LatesCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div>
            <div className='my-10'>
                <div className='text-center py-8 text-3xl '>
                    <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque placeat facere hic fugit eveniet cupiditate quisquam laboriosam? Debitis, esse atque quam, cumque ab, exercitationem officiis porro magnam temporibus necessitatibus eius!
                    </p>
                </div>

                {/* Rendering Products */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatesCollection;
