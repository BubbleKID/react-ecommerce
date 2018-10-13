import React, { Component } from 'react';
import banner from'../images/banner-category.jpg';
const styles={
    sectionPageHeader:{
        backgroundImage: `url(${banner})`,
    },
    pageHeader:{
        visibility: "visible",
        animationName: "fadeIn",
    }
}
class Banner extends Component {
    render() {
        return (
            <div className="vc_row wpb_row vc_row-fluid section-page-header" style={styles.sectionPageHeader}>
                <div className="container">
                    <div className="page-header-inner wow fadeIn" style={styles.pageHeader}>
                        <div className="row">
                            <div className="col-xs-12">
                                <header>
                                    <h1>All</h1>
                                </header>
                                <div className="la-breadcrumbs hidden-xs">
                                    <div>
                                        <div className="la-breadcrumb-content">
                                            <div className="la-breadcrumb-wrap">
                                                <div className="la-breadcrumb-item">
                                                    <a href="https://hebes-globo.myshopify.com" className="la-breadcrumb-item-link is-home" rel="home" title="hebes-globo">Home</a>
                                                </div>
                                                <div className="la-breadcrumb-item">
                                                    <div className="la-breadcrumb-item-sep">
                                                        <i className="icon dl-icon-right"></i>
                                                    </div>
                                                </div>
                                                <div className="la-breadcrumb-item">
                                                    <span className="la-breadcrumb-item-target">All</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;