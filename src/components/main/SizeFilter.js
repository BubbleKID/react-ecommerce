import React, { Component } from 'react';

class SizeFilter extends Component {
    render() {
        return (
            <div
                id="Filter-other-1531211367403"
                className="widget widget_layered_nav"
            >
                <h4 className="widget-title">
                    <span>Shop By Size</span>
                </h4>
                <ul>
                    <li>
                        <a title="S" href="/collections/all/s">
                            S
                            </a>
                    </li>
                    <li>
                        <a title="M" href="/collections/all/m">
                            M
                            </a>
                    </li>
                    <li>
                        <a title="L" href="/collections/all/l">
                            L
                            </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SizeFilter;