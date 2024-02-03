import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import ProductData from '../../data/ProductData.json'


const GridProduct = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 9;

    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function getItemsPerPage() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 572) {
            return 6;
        } else if (screenWidth <= 992) {
            return 8;
        } else {
            return 9; // Default itemsPerPage for other screen sizes
        }
    }
    //   -------------------------------------------------------------------------
    const totalPages = Math.ceil(ProductData.length / itemsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <section className='product_grid'>
            <div className='container-fluid product_fluid'>
                <div className='product_grid_bg' />
            </div>
            <div className='container'>
                <div>
                    <ProductsGrid products={ProductData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
};

const ProductsGrid = ({ products, currentPage, itemsPerPage }) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div >
            <h2 className='pd_grid_main_heading'>Products</h2>
            <div className='row'>
                {visibleProducts.map(product => (
                    <div className='col-lg-4 col-md-6 col-sm-6' key={product.id} >
                        <div className='pd_grid_card'>
                            <div className='product_grid_img'>
                                <img src={product.thumb} />
                            </div>
                            <div className='product_grid_detail'>
                                <h3 className='product_grid_heading'>{product.name}</h3>
                                <p className='product_grid_price'>₹{product.price}</p>
                            </div>
                            <div className='product_grid_btn mt-3'>
                                <Link to={`/product/${product.id}`} className='btn-primary view_btn'>View product</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridProduct;
