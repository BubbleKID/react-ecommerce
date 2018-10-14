import React, { Component } from "react";
import data from "../data/data.json";
import Banner from "./Banner";
import Products from "./main/Products";
import Categories from "./main/Categories";
import PriceFilter from "./main/PriceFilter";
import ColorFilter from "./main/ColorFilter";
import SizeFilter from "./main/SizeFilter";
import TagFilter from "./main/TagFilter";
import RecentProduct from "./main/RecentProduct";
import ToolBar from "./main/ToolBar";
import PageInation from "./main/PageInation";

const styles = {
  image: {
    display: "block"
  }
};
class PageContainer extends Component {
  render() {
    return (
      <div>
        <div className="page-container" id="PageContainer">
          <main className="main-content" id="MainContent" role="main">
            <Banner />
            <div className="container">
              <div className="collection-sidebar row">
                <aside id="sidebar_primary" className="col-md-3 col-xs-12">
                  <div className="sidebar-inner">
                    <div
                      id="shopify-section-filter"
                      className="shopify-section g_filter"
                    >
                      <Categories />
                      <PriceFilter />
                      <ColorFilter />
                      <SizeFilter />
                      <TagFilter />
                      <div className="widget widget_text">
                        <h4 className="widget-title">
                          <span>Free Shipping</span>
                        </h4>

                        <div className="textwidget">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean pharetra, ligula non mollis pretium,
                          lectus libero sodales augue, interdum auctor mauris
                          dui non risus. Nulla facilisi.
                        </div>
                      </div>
                      <div className="widget widget_banner">
                        <div className="col-banner-hover banner-type-shop">
                          <div className="col-relative">
                            <div className="banner--image">
                              <img
                                alt=""
                                className="lazy"
                                src="//cdn.shopify.com/s/files/1/0017/9653/8437/files/contact2-img.progressive.jpg"
                                //style="display: inline-block;"
                              />
                            </div>
                            <div className="banner--info">
                              <div className="b-title1">#Sport new</div>
                              <div className="b-title2">Off 20%</div>
                            </div>
                            <a
                              href="/collections/all"
                              className="overflow-link"
                            />
                          </div>
                        </div>
                      </div>
                      <RecentProduct />
                    </div>
                  </div>
                </aside>
                <div
                  id="main-collection"
                  className="col-md-9 col-xs-12 site-content content-collection-loadmore"
                >
                  <ToolBar />
                  <div id="la_shop_products" className="la-shop-products">
                    <div className="row">
                      <div className="col-xs-12">
                        <ul
                          className="products products-grid grid-space-default products-grid-1 grid-items xlg-grid-3-items lg-grid-3-items md-grid-3-items sm-grid-2-items xs-grid-1-items mb-grid-1-items"
                          data-item_selector=".product_item"
                          data-item_margin="30"
                          data-item-width="270"
                          data-item-height="390"
                          data-md-col="3"
                          data-sm-col="2"
                          data-xs-col="1"
                          data-mb-col="1"
                        >
                          <Products data={data} />
                        </ul>
                      </div>
                    </div>
                   <PageInation />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default PageContainer;
