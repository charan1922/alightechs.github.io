import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import { NavLink } from "../partials";

const navItems = ["Courses", "Workshops", "About", "Connect"];

const ESCSAPE_KEY_CODE = 27;

export default class Header extends Component {
  static displayName = "Header";

  static propTypes = {
    isOpen: PropTypes.bool,
    location: PropTypes.object,
    onToggleMenu: PropTypes.func
  };

  static defaultProps = {
    isOpen: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onEscape);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onEscape);
  }

  onEscape = ({ keyCode }) => {
    if (this.props.isOpen === true) {
      // If pressed escape key
      if (keyCode === ESCSAPE_KEY_CODE) {
        this.props.onToggleMenu(!this.props.isOpen);
      }
    }
  };

  toggleMenu = () => {
    this.props.onToggleMenu(!this.props.isOpen);
  };

  render() {
    const { isOpen } = this.props;
    return(
      <div>
        <header className={`site-header isOpen-${this.props.isOpen}`} >
          <Link
            to="/"
            title="Alightechs"
            className="site-header__logo"
          >
            Alightechs
          </Link>
          <nav className="site-header__nav display-desktop-only" >
            {navItems.map((item, i) => {
              return (
                <NavLink
                  className="site-header__nav-links"
                  destination={item}
                  current={this.props.location.pathname}
                  key={i}
                />
              );
            })}
          </nav>
          <div className="site-header__nav display-mobile-only">
            {/* Site-Header: Toggle */}
            <button
              className="site-header__menu-toggle"
              title="navigation menu"
              aria-label="navigation menu"
              role="button"
              onClick={this.toggleMenu}
            >
              Menu
              <span className="site-header__menu-text" />
              <span className="site-header__menu-bar" />
            </button>
          </div>
        </header>
        {/* SITE MENU FOR MOBILE */}
        <nav className="site-menu" aria-hidden={!isOpen}>
          <ul className="site-menu__nav">
            {navItems.map((item, i) => {
              return (
                <li
                  key={`navlink-${item}-${i}`}
                  className="site-menu__nav-item"
                >
                  <NavLink
                    className="site-menu__nav-item-link"
                    onClick={this.toggleMenu}
                    destination={item}
                    current={this.props.location.pathname}
                    key={i}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    )
  }
}