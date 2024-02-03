import React from 'react'
import ProductSlider from '../productSlider/ProductSlider'
import { useParams } from 'react-router-dom';
import ProductData from '../../data/ProductData.json';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import ProductQuantitySelector from '../productSlider/ProductQuantitySelector';
import ProductAccordion from '../productSlider/ProductAccordion';
const Product = () => {
  const { id } = useParams();
  const selectedProduct = ProductData.find((product) => product.id === parseInt(id));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const productImages = [selectedProduct];
  return (
    <section className='pd_section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 '>
            <div>
              {selectedProduct && <ProductSlider product={selectedProduct} />}
            </div>
          </div>
          <div className='col-lg-4 '>
            <div className='pd_detail'>
              <div>
                <h2 className='pd_heading'>{selectedProduct.name}</h2>
                <span className='pd_price'>₹{selectedProduct.price}</span>
              </div>
              <div>
                <span className='pd_color'>Color:{selectedProduct.color}</span>
                <br />
                <Box sx={{ minWidth: 120, maxWidth: '100%' }} className='pd_size'>
                  <FormControl fullWidth>
                    <InputLabel id="clothing-size-label" className='abc'>Clothing Size</InputLabel>
                    <Select labelId="clothing-size-label" label="Clothing Size">
                      <MenuItem value="M">M</MenuItem>
                      <MenuItem value="L">L</MenuItem>
                      <MenuItem value="XL">XL</MenuItem>
                      <MenuItem value="XXL">XXL</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <br />
                <div className='pd_count'>
                  {selectedProduct && <ProductQuantitySelector product={selectedProduct} />}
                </div>
                <div className='product_grid_btn pd_white mt-3'>
                  <a className='btn-primary pd_btn'>ADD to cart</a>
                </div>
                <div className='product_grid_btn mt-3'>
                  <a className='btn-primary pd_btn'>Buy now</a>
                </div>
                <div className='product_grid_btn mt-3'>
                  <a className='btn-primary pd_btn'>Add to wishlist</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <ProductAccordion product={selectedProduct} />
        </div>
      </div>
    </section>
  );
};


export default Product;
