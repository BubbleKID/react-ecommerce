import React, { Component } from 'react';

class PageInation extends Component {
    render() {
        return (
            <nav className="la-pagination clearfix">
                <ul className="page-numbers">
                    <li
                        className="disabled"
                    //style="display:none"
                    >
                        <span className="pagicon arrow_left" />
                    </li>
                    <li>
                        <span className="page-numbers current">1</span>
                    </li>
                    <li>
                        <a
                            className="page-numbers"
                            href="/collections/all?page=2"
                        >
                            2
                          </a>
                    </li>
                    <li>
                        <a
                            href="/collections/all?page=2"
                            className="next page-numbers"
                        >
                            Next
                          </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default PageInation;