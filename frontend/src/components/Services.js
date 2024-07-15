import React from 'react';

const Services = () => {
    return (
            <div className="tm-section-wrap">
                <div className="tm-parallax" data-parallax="scroll" data-image-src="assets/img/img-04.jpg"></div>
                <section id="services" className="tm-section">
                    <h2 className="tm-text-primary">Services Offered</h2>
                    <hr className="mb-5"></hr>

                    <div className="row tm-row-about">
                        <div className="tm-col-about tm-col-about-l">
                            <p className="mb-4">
                                Aliquam ornare varius erat vel aliquet. Proin ac neque a tortor tristique semper eget eget sapien. Morbi vitae diam a odio lobortis mattis sed nec justo. 
                            </p>
                            <p className="mb-4">
                                Suspendisse sagittis tortor vel turpis aliquet, vitae molestie erat luctus.
                            </p>
                        </div>
                        <div className="tm-col-about tm-col-about-r">
                            <img src="assets/img/img-about-01.jpg" alt="services" className="img-fluid mb-5 tm-img-about"></img>
                            <p>
                                Duis fringilla eget purus luctus sodales. Sed auctor odio quis ligula dignissim efficitur vitae vitae quam.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="tm-carousel">
                            <div className="tm-carousel-item">
                                <figure className="effect-honey mb-4">
                                    <img src="assets/img/about-01.jpg" alt="Featured Item"></img>
                                    {/* <figcaption>
                                        <ul className="tm-social">
                                            <li><a href="https://facebook.com" className="tm-social-link"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </figcaption> */}
                                </figure>
                                <div className="tm-about-text">
                                    <h3 className="mb-3 tm-text-primary tm-about-title">Installation</h3>
                                    <p>Aliquam efficitur, velit ut aliquet molestie, nulla dolor faucibus neque, quis hendrerit.</p>
                                    <h4 className="tm-text-secondary tm-about-subtitle">Founder and CEO</h4>
                                </div>
                            </div>

                            <div className="tm-carousel-item">
                                <figure className="effect-honey mb-4">
                                    <img src="assets/img/about-02.jpg" alt="Featured Item"></img>
                                    {/* <figcaption>
                                        <ul className="tm-social">
                                            <li><a href="https://facebook.com" className="tm-social-link"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </figcaption> */}
                                </figure>
                                <div className="tm-about-text">
                                    <h3 className="mb-3 tm-text-primary tm-about-title">Maintenance</h3>
                                    <p>This is a carousel for a list of 10 team members. Each member image hover has 3 social icons.</p>
                                    <h4 className="tm-text-secondary tm-about-subtitle">Managing Director</h4>
                                </div>
                            </div>

                            <div className="tm-carousel-item">
                                <figure className="effect-honey mb-4">
                                    <img src="assets/img/about-03.jpg" alt="Featured Item"></img>
                                    {/* <figcaption>
                                        <ul className="tm-social">
                                            <li><a href="https://facebook.com" className="tm-social-link"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </figcaption> */}
                                </figure>
                                <div className="tm-about-text">
                                    <h3 className="mb-3 tm-text-primary tm-about-title">Repair</h3>
                                    <p>Aliquam efficitur, velit ut aliquet molestie, nulla dolor faucibus neque, quis hendrerit.</p>
                                    <h4 className="tm-text-secondary tm-about-subtitle">Financial Officer</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
}

export default Services;
