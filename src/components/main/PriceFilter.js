import React, { Component } from 'react';

class PriceFilter extends Component {
    render() {
        return (
            <div
                id="Filter-other-1531276876742"
                className="widget widget_layered_nav"
            >
                <h4 className="widget-title">
                    <span>Filter by price</span>
                </h4>
                <ul>
                    <li>
                        <a
                            title="$20.00 - $40.00"
                            href="/collections/all/20-00-40-00"
                        >
                            $20.00 - $40.00
                            </a>
                    </li>
                    <li>
                        <a
                            title="$40.00 - $60.00"
                            href="/collections/all/40-00-60-00"
                        >
                            $40.00 - $60.00
                            </a>
                    </li>
                    <li>
                        <a
                            title="$80.00 - $100.00"
                            href="/collections/all/80-00-100-00"
                        >
                            $80.00 - $100.00
                            </a>
                    </li>
                    <li>
                        <a
                            title="$100.00 - $120.00"
                            href="/collections/all/100-00-120-00"
                        >
                            $100.00 - $120.00
                            </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PriceFilter;