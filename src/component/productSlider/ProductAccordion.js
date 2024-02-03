import React from 'react';

const ProductAccordion = ({ product }) => {
    const { productDetail = {}, ProductDescription, ArtistDetails } = product ?? {};

    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item accordion_pd">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button accordion_pd_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Product Details
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body accordion_pd_body">
                        <p><strong className='pd_acc_detail'>Material & Care:</strong><span className='pd_acc_detail_span'>{productDetail.MaterialCare}</span></p>
                        <p><strong className='pd_acc_detail'>Country Origin:</strong><span className='pd_acc_detail_span'>{productDetail.CountryOrigin}</span></p>
                        <p><strong className='pd_acc_detail'>Manufactured:</strong><span className='pd_acc_detail_span'>{productDetail.Manufactured}</span></p>
                    </div>
                </div>
            </div>
            <div className="accordion-item accordion_pd">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button accordion_pd_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Product Description
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body accordion_pd_body">
                        <p><span className='pd_acc_discription_span'>{ProductDescription}</span></p>
                    </div>
                </div>
            </div>
            <div className="accordion-item accordion_pd">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button accordion_pd_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Artist's Details
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body accordion_pd_body">
                        <p><span className='pd_acc_artist_span'> {ArtistDetails}</span></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductAccordion;
