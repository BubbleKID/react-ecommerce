import React, { Component } from "react";
const styles = {
  imamge: {
    display: "block"
  },
  gridItem: {
    visibility: "visible",
    animationName: "fadeInUp"
  }
};
class Products extends Component {
  render() {
    return (
      <div className="la-shop-products">
        <div className="row">
         <div className="col-xs-12">
            <ul className="products products-grid grid-space-default products-grid-1 grid-items xlg-grid-3-items lg-grid-3-items md-grid-3-items sm-grid-2-items xs-grid-1-items mb-grid-1-items">
              {this.props.data.map(product => {
                return (
                  <div
                    key={product.title}
                    className="grid-item product_item wow fadeInUp"
                    style={styles.gridItem}
                  >
                    <div className="product_item--inner">
                      <div className="product_item--thumbnail">
                        <div className="product_item--thumbnail-holder">
                          <a
                            href="/collections/all/products/hebes-good-chair"
                            className="product__link"
                            tabIndex="0"
                          >
                            <img
                              className="wp-post-image loading lazy"
                              src={product.featured_image}
                              alt={product.title}
                              style={styles.image}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product_item--info ">
                        <div className="product_item--info-inner text-center">
                          <h2 className="product_item--title">
                            <a
                              href="/collections/all/products/hebes-good-chair"
                              tabIndex="0"
                            >
                              {product.title}
                            </a>
                          </h2>
                          <span className="price">
                            <span className="money">{`$ ${(
                              product.price / 100
                            ).toFixed(2)} USD`}</span>
                          </span>
                          <div className="short-description">
                            {product.description}
                          </div>
                        </div>
                        <div className="product_item_thumbnail_action product_item--action product_item_thumbnail_action-1">
                          <div className="wrap-addto">
                            <a
                              href="/?add-to-cart=12550975651909"
                              className="globo-add-to-cart"
                              rel="nofollow"
                              tabIndex="0"
                              title="Add to cart"
                            >
                              <span>Add to cart</span>
                            </a>
                            <a
                              href="/collections/all/products/hebes-good-chair/?view=quick_view"
                              data-href="/collections/all/products/hebes-good-chair/?view=quick_view"
                              className="globo-quick-view-button quickview button la-quickview-button"
                              title="Quick view"
                              tabIndex="0"
                            >
                              <span>Quick view</span>
                            </a>
                            <div className="gpw-action">
                              <a
                                className="add_wishlist button la-core-wishlist globo-add-to-wishlist"
                                title="Add to wishtlist"
                                rel="nofollow"
                              >
                                <span>Add to wishtlist</span>
                              </a>
                            </div>
                            <div className="gpc-action">
                              <a
                                className="globo-add-to-compare"
                                title="Add to compare"
                                rel="nofollow"
                              >
                                <span>Add to compare</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
