import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/h1-logo-footer.png';

const styles={
  select:{
    display: "inline",
    width: "auto",
    verticalAlign: "inherit",
  }
    
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({
            hover: true,
        });
    }

    onMouseLeave() {
        this.setState({
            hover: false,
        })
    }
    render() {
        return (
            <div>
                <header className="main-section-header site-header">
                    <div className="header-content header-sticky">
                        <div className="container-full">
                            <div className="header-bottom">
                                <div className="header-main">
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-12 header-left">
                                            <div className="logo">
                                                <a href="/" itemProp="url" rel="home">
                                                    <figure className="logo--normal">
                                                        <img src={logo} alt="hebes-globo" itemProp="logo"/>
                                                    </figure>
                                                    <figure className="logo--transparency">
                                                        <img
                                                            src="//cdn.shopify.com/s/files/1/0017/9653/8437/files/h1-logo-footer.png"
                                                            alt="hebes-globo"
                                                            itemProp="logo"
                                                        /> 
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="header-component-inner menu-v5 clearfix">
                                                <div
                                                    className="header_component header_component--link la_compt_iem la_com_action--aside_header">
                                                    <a rel="nofollow" className="component-target" href="javascript:;">
                                                        <span className="icon--menu"></span>
                                                        <span className="icon--menu"></span>
                                                        <span className="icon--menu"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-12 header-right">
                                            <div className="header-component-inner clearfix">
                                                <div
                                                    className="header_component header_component--searchbox la_compt_iem la_com_action--searchbox searchbox__01">
                                                    <a className="component-target btn-search" href="javascript:;">
                                                        <i className="dl-icon-search1"></i>
                                                    </a>
                                                </div>
                                                <div
                                                    className="header_component header_component--linktext la_compt_iem la_com_action--linktext">
                                                    <a rel="nofollow" className="component-target" href="/account/login">
                                                        <i className="dl-icon-user12"></i>
                                                        <span className="component-target-text">Sign In</span>
                                                    </a>
                                                </div>
                                                <div className={`top-dropdown currency ${this.state.hover && 'hover'}`} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                                                    <div className="parent aux-currency">
                                                        <a className="selected-currency" href="javascript:;">USD</a>
                                                        <ul id="currency">
                                                            <li>
                                                                <a className="currency-link currency-USD current-currency"
                                                                    // onClick="jQuery('[name=currencies]').val('USD').change();"
                                                                    href="javascript:;">
                                                                    <span className="name">USD</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="currency-link currency-INR"
                                                                    //onClick="jQuery('[name=currencies]').val('INR').change();"
                                                                    href="javascript:;">
                                                                    <span className="name">INR</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="currency-link currency-GBP"
                                                                    //onClick="jQuery('[name=currencies]').val('GBP').change();"
                                                                    href="javascript:;">
                                                                    <span className="name">GBP</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="currency-link currency-CAD"
                                                                    //onClick="jQuery('[name=currencies]').val('CAD').change();"
                                                                    href="javascript:;">
                                                                    <span className="name">CAD</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="currency-link currency-AUD"
                                                                    //onClick="jQuery('[name=currencies]').val('AUD').change();"
                                                                    href="javascript:;">
                                                                    <span className="name">AUD</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="currency-link currency-EUR"
                                                                    //onClick="jQuery('[name=currencies]').val('EUR').change();"
                                                                    href="javascript:;">
                                                                    <span className="name">EUR</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="currency-link currency-JPY"
                                                                    //onClick="jQuery('[name=currencies]').val('JPY').change();"
                                                                    href="javascript:;">
                                                                    <span className="name">JPY</span>
                                                                </a>
                                                            </li>

                                                        </ul>
                                                        <div className="hidden-class">
                                                            <select
                                                                className="currency-picker hidden-class"
                                                                name="currencies"
                                                                style={styles.select}
                                                                defaultValue="AUD">
                                                                <option value="USD">USD</option>
                                                                <option value="INR">INR</option>
                                                                <option value="GBP">GBP</option>
                                                                <option value="CAD">CAD</option>
                                                                <option value="AUD">AUD</option>
                                                                <option value="EUR">EUR</option>
                                                                <option value="JPY">JPY</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                                </div>
                                                <div className="header_component header_component--cart la_compt_iem la_com_action--cart ">
                                                    <a rel="nofollow" className="component-target" href="/cart">
                                                        <i className="dl-icon-cart1"></i>
                                                        <span className="component-target-badget la-cart-count">0</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;