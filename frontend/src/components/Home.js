import React from 'react';

const Home = () => {
    return (
        <div className="tm-section-wrap">
            <div className="tm-parallax" data-parallax="scroll" data-image-src="img/img-01.jpg"></div>                   
            <section id="home" className="tm-section">
                <h2 className="tm-text-primary">Welcome to ShuttleSky</h2>
                <hr className="mb-5"></hr>
                <div className="row">
                    <div className="col-lg-6 tm-col-home mb-4">
                        <div className="tm-text-container">
                            <div className="tm-icon-container mb-5 mr-0 ml-auto">
                                <i className="fas fa-satellite-dish fa-4x tm-text-primary"></i>
                            </div>                                
                            <p>
                                Leftmost column is placed for logo and main menu.
                                After that is an image column. Right side column 
                                is a 100% full-width content.
                            </p>
                            <p>
                                Right side can put many contents and it will
                                scroll up / down. Left side is fixed. Parallax
                                Image changes for different pages.
                            </p>
                        </div>                                
                    </div>
                    <div className="col-lg-6 tm-col-home mb-4">
                        <div className="tm-text-container">
                            <div className="tm-icon-container mb-5 mr-0 ml-auto">
                                <i className="fas fa-broadcast-tower fa-4x tm-text-primary"></i>
                            </div>                                 
                            <p>
                                Quisque tincidunt, sem rutrum euismod ornare, tortor arcu tempus 
                                lorem, accumsan suscipit mauris lorem at lorem. Praesent feugiat 
                                mi at tortor tincidunt, ac consequat ante cursus.
                            </p>
                            <div className="text-right">
                                <a href="#gallery" className="btn btn-primary tm-btn-next">Next Page</a>
                            </div>                                    
                        </div>
                    </div>
                </div>
                <hr className="tm-hr-short mb-5"></hr>
                <div className="row tm-row-home">                            
                    <div className="tm-col-home tm-col-home-l">
                        <div className="media mb-4">
                            <i className="fas fa-scroll fa-4x tm-post-icon tm-text-primary"></i>
                            <div className="media-body">
                                <a href="#" className="d-block mb-2 tm-text-primary tm-post-link">24 September 2020</a>  
                                <p>
                                    Upright is free responsive HTML CSS template by <a href="https://templatemo.com/page/1" target="_parent" rel="sponsored">TemplateMo</a>. 
                                    You can feel free to adapt and apply this layout for your 
                                commercial or non-commercial websites. </p>
                            </div>                                    
                        </div>
                        <div className="media mb-4">
                            <i className="fas fa-cloud-sun fa-4x tm-post-icon tm-text-primary"></i>
                            <div className="media-body">
                                <a href="#" className="d-block mb-2 tm-text-primary tm-post-link">22 September 2020</a>  
                                <p>
                                    You are not allowed to re-distribute this template as a ZIP file 
                                    on any template collection website for the template download purpose. 
                                    Please contact us for more information.
                                </p>
                            </div>                                    
                        </div>
                        <div className="media mb-4">
                            <i className="fas fa-dove fa-4x tm-post-icon tm-text-primary"></i>
                            <div className="media-body">
                                <a href="#" className="d-block mb-2 tm-text-primary tm-post-link">16 September 2020</a>  
                                <p>
                                    You may want to support us by making   <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a small donation via PayPal</a>. That will be helpful. We hope you like this Upright Template for your work.
                                </p>
                            </div>                                    
                        </div>
                    </div>
                    <div className="tm-col-home mr-0 ml-auto">
                        <div className="tm-img-home-container"></div>                                
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
