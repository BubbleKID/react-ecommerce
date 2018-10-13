import React, { Component } from 'react';
const styles = {
    footerTop:{
        padding: "60px 0 35px 0",
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <div id="shopify-section-footer" className="shopify-section">
                    <div className="backtotop-container show"> 
                        <a href="#PageContainer" className="btn-backtotop btn btn-secondary">
                            <span className="fa fa-angle-up"></span>
                        </a>
                    </div>
                    <footer id="colophon" className="site-footer">
                        <div className="footer-top" style={styles.footerTop}>
                            <div className="container-full">
                                <div className="row"><div className="footer-column col-xs-12 col-sm-4 col-md-4">
                                        <div className="footer-column-inner">                                            
                                            <div className="widget widget_nav_menu widget_menu_horizontal">
                                                <div className="widget-inner">          	
                                                    <div className="menu--container">
                                                        <ul className="menu"><li><a href="/pages/about-1">About Us</a></li><li><a href="#">Policy</a></li><li><a href="#">Term</a></li><li><a href="/pages/contact-us">Contact</a></li></ul>
                                                    </div>
                                                </div>
                                            </div>	
                                        </div>
                                    </div>
                                    <div className="footer-column col-xs-12 col-sm-4 col-md-4">
                                        <div className="footer-column-inner">                       
                                            <div className="widget widget_text widget-logo-copyright text-center">
                                                <div className="textwidget">
                                                    <p>
                                                    <a href="/"><img src="//cdn.shopify.com/s/files/1/0017/9653/8437/files/h1-logo-footer.png" alt="hebes-globo"/></a>
                                                    </p> 
                                                    <p>
                                                    © 2018 Hebes - All Rights Reserved
                                                    </p>  
                                                </div>
                                            </div>                       	
                                        </div>
                                    </div>
                                    <div className="footer-column col-xs-12 col-sm-4 col-md-4">
                                        <div className="footer-column-inner">                                            
                                            <div className="text-right widget widget_text">
                                                <div className="textwidget">
                                                    <div className="social-media-link style-default pull-right">                        
                                                        <label>Follow Us On Social</label>                               
                                                        <a href="#" className="facebook" title="Facebook" target="_blank" rel="nofollow"><i className="fab fa-facebook-f"></i></a>                                                             
                                                        <a href="#" className="twitter" title="Twitter" target="_blank" rel="nofollow"><i className="fab fa-twitter"></i></a>                                                     
                                                        <a href="#" className="pinterest" title="Pinterest" target="_blank" rel="nofollow"><i className="fab fa-pinterest-p"></i></a>                   
                                                        <a href="#" className="instagram" title="Instagram" target="_blank" rel="nofollow"><i className="fab fa-instagram"></i></a>
                                                    </div>
                                                </div>
                                            </div>                      	
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;