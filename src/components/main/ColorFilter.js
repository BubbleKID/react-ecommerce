import React, { Component } from 'react';
const styles = {
    yellow: {
        textIndent: "-9999px",
        width: "30px",
        height: "30px",
        backgroundColor: "Yellow"
    },
    blue: {
        textIndent: "-9999px",
        width: "30px",
        height: "30px",
        backgroundColor: "#9bbfda"
    },
    pink: {
        textIndent: "-9999px",
        width: "30px",
        height: "30px",
        backgroundColor: "Pink"
    },
}
class ColorFilter extends Component {
    render() {
        return (
            <div
                id="color_filter_1531211315533"
                className="widget widget_layered_nav widget_layered_nav--color"
            >
                <h4 className="widget-title">
                    <span>Shop By Color</span>
                </h4>
                <ul className="la-swatches-widget-opts">
                    <li className="wc-layered-nav-term">
                        <a href="/collections/all/pink">
                            <div
                                className="select-option swatch-wrapper la-swatch-item-style-default"
                                data-attribute="pa_color"
                                data-value="pink"
                            >
                                <span
                                    className="swatch-anchor g-bg-color-pink globo-swatch-pink"
                                    style={styles.pink}
                                    title="Pink"
                                >
                                    Pink
                                </span>
                                <span className="swatch-anchor-label">
                                    Pink
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className="wc-layered-nav-term">
                        <a href="/collections/all/yellow">
                            <div
                                className="select-option swatch-wrapper la-swatch-item-style-default"
                                data-attribute="pa_color"
                                data-value="yellow"
                            >
                                <span
                                    className="swatch-anchor g-bg-color-yellow globo-swatch-yellow"
                                    style={styles.yellow}
                                    title="Yellow"
                                >
                                    Yellow
                                </span>
                                <span className="swatch-anchor-label">
                                    Yellow
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className="wc-layered-nav-term">
                        <a href="/collections/all/blue">
                            <div
                                className="select-option swatch-wrapper la-swatch-item-style-default"
                                data-attribute="pa_color"
                                data-value="blue"
                            >
                                <span
                                    className="swatch-anchor g-bg-color-blue globo-swatch-blue"
                                    style={styles.blue}
                                    title="Blue"
                                >
                                    Blue
                                </span>
                                <span className="swatch-anchor-label">
                                    Blue
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ColorFilter;