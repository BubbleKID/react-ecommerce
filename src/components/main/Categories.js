import React, { Component } from 'react';

class Categories extends Component {
    render() {
        return (
            <div className="widget widget_nav_menu">
                <h4 className="widget-title">
                    <span>Categories</span>
                </h4>
                <div className="menu-shop-category-menu-container">
                    <ul id="menu-shop-category-menu" className="menu">
                        <li className="menu-item ">
                            <a href="/collections/accessories">
                                Accessories <span className="count">(16)</span>
                            </a>
                        </li>
                        <li className="menu-item ">
                            <a href="/collections/chair">
                                Chair <span className="count">(16)</span>
                            </a>
                        </li>
                        <li className="menu-item ">
                            <a href="/collections/lamps">
                                Lamps <span className="count">(16)</span>
                            </a>
                        </li>
                        <li className="menu-item ">
                            <a href="/collections/shop-categories">
                                Shop Categories{" "}
                                <span className="count">(16)</span>
                            </a>
                        </li>
                        <li className="menu-item ">
                            <a href="/collections/sofas">
                                Sofas <span className="count">(16)</span>
                            </a>
                        </li>
                        <li className="menu-item ">
                            <a href="/collections/tables">
                                Tables <span className="count">(16)</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Categories;