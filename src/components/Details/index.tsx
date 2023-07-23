import React, { useState } from 'react';
import "./index.css";
const Details = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (
        <div className='mb-4' style={{ background: "#f0eeee" }}>
            {/* Breadcrumb Start */}
            <div className="container-fluid">
                <div className="row px-xl-5 ">
                    <div className="col-12 ">
                        <nav className="breadcrumb mb-30 bg-light shadow px-4 mt-3" style={{ height: "40px" }}>
                            <a className="breadcrumb-item text-dark" style={{ lineHeight: "40px" }} href="#">Home</a>
                            <a className="breadcrumb-item text-dark" style={{ lineHeight: "40px" }} href="#">Shop</a>
                            <span className="breadcrumb-item active" style={{ lineHeight: "40px" }}>Shop Detail</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Shop Detail Start */}
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5">
                        <div id="carouselExampleControls" className="carousel slide shadow" data-bs-ride="carousel">
                            <div className="carousel-inner bg-light ">
                                <div className="carousel-item active">
                                    <img className="w-100 h-100" src="img/product-1.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="img/product-2.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="img/product-3.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="img/product-4.jpg" alt="Image" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark" />
                            </a>
                            <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 h-auto">
                        <div className="h-100 bg-light px-5 py-4 shadow">
                            <h2 className='text-dark fw-bold'>Product Name Goes Here</h2>
                            <div className="d-flex mb-3">
                                <div className="text-warning me-4">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                    <i className="bi bi-star" />
                                </div>
                                <small className="pt-1">(99 Reviews)</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                            <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                                clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                                Nonumy</p>
                            <div className="d-flex mb-3">
                                <strong className="text-dark mr-3">Sizes:</strong>
                                <form>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                        <label className="custom-control-label" htmlFor="size-1">XS</label>
                                    </div>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                        <label className="custom-control-label" htmlFor="size-2">S</label>
                                    </div>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                        <label className="custom-control-label" htmlFor="size-3">M</label>
                                    </div>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                        <label className="custom-control-label" htmlFor="size-4">L</label>
                                    </div>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                        <label className="custom-control-label" htmlFor="size-5">XL</label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex mb-4">
                                <strong className="text-dark mr-3">Colors:</strong>
                                <form>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                        <label className="custom-control-label" htmlFor="color-1">Black</label>
                                    </div>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                        <label className="custom-control-label" htmlFor="color-2">White</label>
                                    </div>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                        <label className="custom-control-label" htmlFor="color-3">Red</label>
                                    </div>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                        <label className="custom-control-label" htmlFor="color-4">Blue</label>
                                    </div>
                                    <div className="mx-2 d-inline">
                                        <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                        <label className="custom-control-label" htmlFor="color-5">Green</label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity" style={{ width: 130 }}>
                                    <button className="btn btn-warning rounded-0 btn-minus input-group-text" onClick={handleDecrement}>
                                        <i className="bi bi-dash" />
                                    </button>
                                    <input type="text" className="form-control border-1 text-center" defaultValue={1} value={quantity} readOnly />
                                    <button className="btn btn-warning rounded-0 btn-plus input-group-text" onClick={handleIncrement}>
                                        <i className="bi bi-plus" />
                                    </button>
                                </div>
                                <button className="btn btn-warning rounded-0 mx-5"><i className="bi bi-cart-check-fill" /> Add To
                                    Cart</button>
                            </div>
                            <div className="d-flex pt-2">
                                <strong className="text-dark mr-2">Share on:</strong>
                                <div className="d-inline-flex">
                                    <a className="text-dark px-2" href="">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="bi bi-instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5 mt-5 ">
                    <div className="col ">
                        <div className=" p-3 shadow bg-white">
                            <nav className="nav nav-tabs mb-4" id='nav-tab' role='tablist'>
                                <button className="nav-item btn btn-warning rounded-0 nav-link text-dark active" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#tab-pane-1" type="button" role="tab" aria-controls="nav-pane-1" aria-selected="true">Description</button>
                                <button className="nav-item btn btn-warning rounded-0 nav-link text-dark" id="nav-information-tab" data-bs-toggle="tab" data-bs-target="#tab-pane-2" type="button" role="tab" aria-controls="nav-pane-2" aria-selected="true">Information</button>
                                <button className="nav-item btn btn-warning rounded-0 nav-link text-dark" id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#tab-pane-3" type="button" role="tab" aria-controls="nav-pane-3" aria-selected="true">Reviews (0)</button>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active p-4 " id="tab-pane-1" role="tabpanel" aria-labelledby="nav-description-tab">
                                    <h4 className="mb-3">Product Description</h4>
                                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam
                                        invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                                        consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum
                                        diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam
                                        sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor
                                        aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam
                                        kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.
                                    </p>
                                    <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor
                                        consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita
                                        clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit
                                        rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
                                    </p>
                                </div>
                                <div className="tab-pane fade p-4" id="tab-pane-2" role="tabpanel" aria-labelledby="nav-information-tab">
                                    <h4 className="mb-3">Additional Information</h4>
                                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam
                                        invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                                        consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum
                                        diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam
                                        sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor
                                        aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam
                                        kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0">
                                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0">
                                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade p-4" id="tab-pane-3" role="tabpanel" aria-labelledby="nav-reviews-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="mb-4">1 review for "Product Name"</h4>
                                            <div className="media mb-4">
                                                <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                                                <div className="media-body">
                                                    <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                    <div className="text-warning mb-2">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-half" />
                                                        <i className="bi bi-star" />
                                                    </div>
                                                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam
                                                        ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod
                                                        ipsum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4 text-success fw-bolder">Leave a review</h3>
                                            <small>Your email address will not be published. Required fields are marked
                                                *</small>
                                            <div className="d-flex my-3">
                                                <p className="mb-0 mr-2 text-primary fw-bold">Your Rating * :</p>
                                                <div className="text-warning ms-2">
                                                    <i className="bi bi-star" />
                                                    <i className="bi bi-star" />
                                                    <i className="bi bi-star" />
                                                    <i className="bi bi-star" />
                                                    <i className="bi bi-star" />
                                                </div>
                                            </div>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="message" className='mb-2 fw-bold text-primary'>Your Review *</label>
                                                    <textarea id="message" cols={30} rows={5} className="form-control rounded-0 border-dark" defaultValue={""} />
                                                </div>
                                                <div className="form-group my-3">
                                                    <label htmlFor="name" className='mb-2 fw-bold text-primary '>Your Name *</label>
                                                    <input type="text" className="form-control rounded-0 border-dark" id="name" />
                                                </div>
                                                <div className="form-group my-3">
                                                    <label htmlFor="email" className='mb-2 fw-bold text-primary'>Your Email *</label>
                                                    <input type="email" className="form-control rounded-0 border-dark" id="email" />
                                                </div>
                                                <div className="form-group my-3">
                                                    <input type="submit" defaultValue="Leave Your Review" className="btn btn-warning px-3 rounded-0" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shop Detail End */}


        </div>
    );
}
export default Details;