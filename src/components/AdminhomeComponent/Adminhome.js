import './Adminhome.css'
function Adminhome() {
    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">


                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Admin Home Pannel</h2>
                            <h1 class="display-5 mb-0">Quick Transport And Logistics Solutions</h1>

                        </div>


                        <div class="row g-3">
                            <div class="col-sm-6 wow fadeInLeft" data-wow-delay="0.6s">
                                <div class="bg-primary d-flex flex-column justify-content-center text-center border-bottom border-5 border-secondary rounded p-3"
                                    style={{ "height": "200px;" }}>
                                    <i class="fa fa-star fa-4x text-white mb-4"></i>
                                    <h4 class="text-white mb-0">15 Years Experience</h4>
                                </div>
                            </div>
                            <div class="col-sm-6 wow fadeInRight" data-wow-delay="0.9s">
                                <div class="bg-secondary d-flex flex-column justify-content-center text-center border-bottom border-5 border-primary rounded p-3"
                                    style={{ "height": "200px;" }}>
                                    <i class="fa fa-award fa-4x text-white mb-4"></i>
                                    <h4 class="text-white mb-0">Award Winning</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    )
}
export default Adminhome;