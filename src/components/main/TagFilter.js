import React, { Component } from 'react';

class TagFilter extends Component {
    render() {
        return (
            <div
                id="Filter-other-1536543164390"
                className="widget widget_layered_nav"
            >
                <h4 className="widget-title">
                    <span>Shop by tags</span>
                </h4>
                <ul>
                    <li>
                        <a title="Beauty" href="/collections/all/beauty">
                            Beauty
                        </a>
                    </li>
                    <li>
                        <a title="Globo" href="/collections/all/globo">
                            Globo
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TagFilter;