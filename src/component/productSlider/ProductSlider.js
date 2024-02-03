import React from 'react';

const ProductSlider = ({ product }) => {
    const { images } = product;

    return (
        <div className='row'>
            {images.map((image, index) => (
                <div key={index} className='col-lg-6 col-md-12 pe-1'>
                    <div className='slider_pd_img'>
                        <img src={process.env.PUBLIC_URL + '/images/' + image} alt={`Product ${index + 1}`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSlider;
