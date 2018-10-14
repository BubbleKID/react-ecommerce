import React, { Component } from 'react';

class RecentProduct extends Component {
    render() {
        return (
            <div className="g-product-row-slider widget">
                <h4 className="widget-title">
                    <span>Recent Product</span>
                </h4>
                <div
                //style="display: none;"
                >
                    {/* <svg id="dlicon-arrow-left2" viewBox="0 0 512 512" width="100%" height="100%">
                                                            <path fill="currentColor" d="m368 445c9 9 9 18 0 25c-8 9-17 9-24 0c0 0-201-202-201-202c-8-8-8-16 0-25c0 0 201-202 201-202c7-9 16-9 24 0c9 7 9 16 0 25c0 0-183 190-183 190c0 0 183 189 183 189"></path>
                                                        </svg>
                                                        <svg id="dlicon-arrow-right2" viewBox="0 0 512 512" width="100%" height="100%">
                                                                <path fill="currentColor" d="m144 445c0 0 183-189 183-189c0 0-183-190-183-190c-9-9-9-18 0-25c8-9 17-9 24 0c0 0 201 202 201 202c8 9 8 17 0 25c0 0-201 202-201 202c-7 9-16 9-24 0c-9-7-9-16 0-25"></path>
                                                        </svg> */}
                </div>
                <div
                    className="product_row-item slick-initialized slick-slider"
                // data-slick="{&quot;rows&quot;: 2, &quot;dots&quot;: false, &quot;arrows&quot;: true, &quot;infinite&quot;: true, &quot;speed&quot;: 300, &quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1,&quot;nextArrow&quot;:&quot;<button type=\&quot;button\&quot; style=\&quot;font-size:18px;width:18px;height:18px;line-height:18px;\&quot; className=\&quot;slick-next default\&quot;><svg><use xlink:href=\&quot;#dlicon-arrow-right2\&quot;><\/use><\/svg><\/button>&quot;,&quot;prevArrow&quot;:&quot;<button type=\&quot;button\&quot; style=\&quot;font-size:18px;width:18px;height:18px;line-height:18px;\&quot; className=\&quot;slick-prev default\&quot;><svg><use xlink:href=\&quot;#dlicon-arrow-left2\&quot;><\/use><\/svg><\/button>&quot;}"
                >
                    {/* <button type="button" style="font-size: 18px; width: 18px; height: 18px; line-height: 18px; display: block;" className="slick-prev default slick-arrow">
                                                        <svg>
                                                            <use xlink: href="#dlicon-arrow-left2">
                                                            </use>
                                                        </svg>
                                                    </button> */}
                    <div className="slick-list draggable">
                        <div
                            className="slick-track"
                        //style="opacity: 1; width: 1325px; transform: translate3d(-265px, 0px, 0px);"
                        >
                            <div
                                className="slick-slide slick-cloned"
                                data-slick-index="-1"
                                aria-hidden="true"
                                tabIndex="-1"
                            //style="width: 265px;"
                            >
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/globo-hebes-chair"
                                                tabIndex="-1"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src={
                                                        "https://cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-8-1_large.jpg?v=1534407812"
                                                    }
                                                    alt="Globo Hebes Chair"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-7-1_medium.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/globo-hebes-chair"
                                                    tabIndex="-1"
                                                >
                                                    Globo Hebes Chair
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$120.00"
                                                    data-currency-cad="$156.38 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $156.38 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/hebes-cool-bed"
                                                tabIndex="-1"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src="//cdn.shopify.com/s/files/1/0017/9653/8437/t/36/assets/pixel.gif"
                                                    alt="Hebes Cool Bed"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-9-1_medium.jpg?v=1536216107"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/hebes-cool-bed"
                                                    tabIndex="-1"
                                                >
                                                    Hebes Cool Bed
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$29.00"
                                                    data-currency-cad="$37.79 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $37.79 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slick-slide slick-current slick-active"
                                data-slick-index="0"
                                aria-hidden="false"
                                tabIndex="0"
                            //style="width: 265px;"
                            >
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/hebes-beauty-chair"
                                                tabIndex="0"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src="//cdn.shopify.com/s/files/1/0017/9653/8437/t/36/assets/pixel.gif?6606624414261653917"
                                                    alt="Hebes Beauty Chair"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-8-1_medium.jpg?v=1534407812"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/hebes-beauty-chair"
                                                    tabIndex="0"
                                                >
                                                    Hebes Beauty Chair
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$45.00"
                                                    data-currency-cad="$58.64 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $58.64 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/globo-sofa-hebes"
                                                tabIndex="0"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src="//cdn.shopify.com/s/files/1/0017/9653/8437/t/36/assets/pixel.gif?6606624414261653917"
                                                    alt="Globo Sofa Hebes"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-10-1_medium.jpg?v=1534408180"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/globo-sofa-hebes"
                                                    tabIndex="0"
                                                >
                                                    Globo Sofa Hebes
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$58.00"
                                                    data-currency-cad="$75.58 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $75.58 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slick-slide"
                                data-slick-index="1"
                                aria-hidden="true"
                                tabIndex="-1"
                            //style="width: 265px;"
                            >
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/globo-hebes-chair"
                                                tabIndex="-1"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src={
                                                        "https://cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-8-1_large.jpg?v=1534407812"
                                                    }
                                                    alt="Globo Hebes Chair"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-7-1_medium.jpg?v=1534408109"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/globo-hebes-chair"
                                                    tabIndex="-1"
                                                >
                                                    Globo Hebes Chair
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$120.00"
                                                    data-currency-cad="$156.38 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $156.38 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/hebes-cool-bed"
                                                tabIndex="-1"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src="//cdn.shopify.com/s/files/1/0017/9653/8437/t/36/assets/pixel.gif?6606624414261653917"
                                                    alt="Hebes Cool Bed"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-9-1_medium.jpg?v=1536216107"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/hebes-cool-bed"
                                                    tabIndex="-1"
                                                >
                                                    Hebes Cool Bed
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$29.00"
                                                    data-currency-cad="$37.79 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $37.79 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slick-slide slick-cloned"
                                data-slick-index="2"
                                aria-hidden="true"
                                tabIndex="-1"
                            //style="width: 265px;"
                            >
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/hebes-beauty-chair"
                                                tabIndex="-1"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src="//cdn.shopify.com/s/files/1/0017/9653/8437/t/36/assets/pixel.gif?6606624414261653917"
                                                    alt="Hebes Beauty Chair"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-8-1_medium.jpg?v=1534407812"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/hebes-beauty-chair"
                                                    tabIndex="-1"
                                                >
                                                    Hebes Beauty Chair
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$45.00"
                                                    data-currency-cad="$58.64 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $58.64 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/globo-sofa-hebes"
                                                tabIndex="-1"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src="//cdn.shopify.com/s/files/1/0017/9653/8437/t/36/assets/pixel.gif?6606624414261653917"
                                                    alt="Globo Sofa Hebes"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-10-1_medium.jpg?v=1534408180"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/globo-sofa-hebes"
                                                    tabIndex="-1"
                                                >
                                                    Globo Sofa Hebes
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$58.00"
                                                    data-currency-cad="$75.58 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $75.58 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slick-slide slick-cloned"
                                data-slick-index="3"
                                aria-hidden="true"
                                tabIndex="-1"
                            //style="width: 265px;"
                            >
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/globo-hebes-chair"
                                                tabIndex="-1"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src={
                                                        "https://cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-8-1_large.jpg?v=1534407812"
                                                    }
                                                    alt="Globo Hebes Chair"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-7-1_medium.jpg?v=1534408109"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/globo-hebes-chair"
                                                    tabIndex="-1"
                                                >
                                                    Globo Hebes Chair
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$120.00"
                                                    data-currency-cad="$156.38 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $156.38 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="product_column-item clearfix"
                                    //style="width: 100%; display: inline-block;"
                                    >
                                        <div className="image">
                                            <a
                                                href="/collections/accessories/products/hebes-cool-bed"
                                                tabIndex="-1"
                                            >
                                                <img
                                                    className="wp-post-image loading lazy"
                                                    src="//cdn.shopify.com/s/files/1/0017/9653/8437/t/36/assets/pixel.gif?6606624414261653917"
                                                    alt="Hebes Cool Bed"
                                                    data-src="//cdn.shopify.com/s/files/1/0017/9653/8437/products/p-d-9-1_medium.jpg?v=1536216107"
                                                />
                                            </a>
                                        </div>
                                        <div className="excerpt">
                                            <h5>
                                                <a
                                                    href="/collections/accessories/products/hebes-cool-bed"
                                                    tabIndex="-1"
                                                >
                                                    Hebes Cool Bed
                                        </a>
                                            </h5>
                                            <span className="price">
                                                <span
                                                    className="money"
                                                    data-currency-usd="$29.00"
                                                    data-currency-cad="$37.79 CAD"
                                                    data-currency="CAD"
                                                >
                                                    $37.79 CAD
                                        </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button type="button" style="font-size: 18px; width: 18px; height: 18px; line-height: 18px; display: block;" className="slick-next default slick-arrow">
                                                                                            <svg><use xlink: href="#dlicon-arrow-right2"></use></svg></button> */}
                </div>
            </div>
        );
    }
}

export default RecentProduct;