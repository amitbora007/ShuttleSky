import React from 'react';

const Contact = () => {
    return (
            <div className="tm-section-wrap">
                <div className="tm-parallax" data-parallax="scroll" data-image-src="assets/img/img-05.jpg"></div>
                <div id="contact" className="tm-section">
                    <h2 className="tm-text-primary">Contact </h2>
                    <hr className="mb-5"></hr>
                    <div className="row">
                        <div className="col-xl-6 tm-contact-col-l mb-4">
                            <form id="contact-form" action="" method="POST" className="tm-contact-form">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control rounded-0" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control rounded-0" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" id="contact-select" name="inquiry">
                                        <option value="-">Subject</option>
                                        <option value="sales">Sales &amp; Marketing</option>
                                        <option value="creative">Creative Design</option>
                                        <option value="uiux">UI / UX</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea rows="8" name="message" className="form-control rounded-0" placeholder="Message" required></textarea>
                                </div>

                                <div className="form-group tm-text-right">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-6 tm-contact-col-r">
                            <div className="mapouter mb-4">
                                <div className="gmap_canvas">
                                    <iframe width="100%" height="520" id="gmap_canvas" title="location_mark"
                                        src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>

                            <address className="mb-4">
                                120-240 eget purus luctus sodales. Sed<br></br>
                                auctor odio quis ligula dignissim efficitur<br></br>
                                vitae vitae quam 16502
                            </address>

                            <ul className="tm-contact-links mb-4">
                                <li className="mb-2">
                                    <a href="tel:0100200340">
                                        <i className="fas fa-phone mr-2 tm-contact-link-icon"></i>
                                        Tel: 010-020-0340
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@company.com">
                                        <i className="fas fa-at mr-2 tm-contact-link-icon"></i>
                                        Email: info@company.com
                                    </a>
                                </li>
                            </ul>
                            <ul className="tm-contact-social">
                                <li><a href="https://fb.com/templatemo" className="tm-social-link"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://youtube.com" className="tm-social-link"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Contact;
