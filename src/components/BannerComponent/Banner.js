import './Banner.css';
import { useState, useEffect } from 'react';
function Banner() {

    const [BannerContent, setBannerContent] = useState()

    useEffect(() => {
        if (localStorage.getItem("token") != undefined)
            setBannerContent(<></>);
        else {
            setBannerContent(
                <div class="container-fluid p-0 mb-5">
                    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="w-100" src="assets/img/banner2.jpg" height="1000" width="1820" alt="Image" />
                                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div class="p-3" style={{ "max-width": "900px;" }}>
                                        <h5 class="text-white text-uppercase animated bounceInDown">ONLINE BIDDING PORTAL</h5>
                                        <h1 class="display-1 text-white mb-md-4 animated zoomIn">#1 Place For Your Product Selling
                                        </h1>
                                        <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</a>
                                        <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="w-100" src="assets/img/banner4.jpg" height="1000" width="1820" alt="Image" />
                                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div class="p-3" style={{ "max-width": "900px;" }}>
                                        <h5 class="text-white text-uppercase animated bounceInDown">ONLINE BIDDING PORTAL</h5>
                                        <h1 class="display-1 text-white mb-md-4 animated zoomIn">#1 Place For Your Product Selling
                                        </h1>
                                        <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</a>
                                        <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>);
        }
    });
    return (
        <>
            {/* Carousel Start */}
            {BannerContent}
            {/* Carousel End */}

        </>
    );
}
export default Banner;