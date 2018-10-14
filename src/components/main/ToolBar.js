import React, { Component } from 'react';

class ToolBar extends Component {
    render() {
        return (
            <div className="wc-toolbar-container">
                <div className="wc-toolbar wc-toolbar-top clearfix">
                    <div className="wc-toolbar-left">
                        <p className="woocommerce-result-count">
                            Showing 1–9 of 16 results
                        </p>
                    </div>
                    <div className="wc-toolbar-right">
                        <div className="wc-view-toggle">
                            <span data-view_mode="grid" className="active">
                                <i title="Grid view" className="fa fa-th" />
                            </span>
                            <span data-view_mode="list">
                                <i title="List view" className="fa fa-list" />
                            </span>
                        </div>
                        <div className="wc-ordering">
                            <p>Sort by</p>
                            <ul>
                                <li className="">
                                    <a href="/collections/all?sort_by=manual">
                                        Featured
                              </a>
                                </li>
                                <li className="">
                                    <a href="/collections/all?sort_by=title-ascending">
                                        Alphabetically, A-Z
                              </a>
                                </li>
                                <li className="">
                                    <a href="/collections/all?sort_by=title-descending">
                                        Alphabetically, Z-A
                              </a>
                                </li>
                                <li className="">
                                    <a href="/collections/all?sort_by=price-ascending">
                                        Price, low to high
                              </a>
                                </li>
                                <li className="">
                                    <a href="/collections/all?sort_by=price-descending">
                                        Price, high to low
                              </a>
                                </li>
                                <li className="">
                                    <a href="/collections/all?sort_by=created-descending">
                                        Date, new to old
                              </a>
                                </li>
                                <li className="">
                                    <a href="/collections/all?sort_by=created-ascending">
                                        Date, old to new
                              </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToolBar;