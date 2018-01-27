import React from 'react'
import Link from 'gatsby-link'
import './index.css'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  handleMenuClick = () => {
    this.setState(prevState => {
      return {isMenuOpen: !prevState.isMenuOpen}
    })
  }

  render() {
    return (
        <div>
          <header 
            className={'site-header'}
          >
            <Link
              to="/"
              title="Alightechs"
              className="site-header__logo"
            >
              Alightechs
            </Link>
            <nav className="site-header__nav display-desktop-only" >
              <Link
                to="/courses/"
                title="Courses"
                className="site-header__nav-links"
                activeClassName="active"
              >
                Courses
              </Link>
              <Link
                to="/workshops/"
                title="Workshops"
                className="site-header__nav-links"
                activeClassName="active"
              >
                Workshops
              </Link>
              <Link
                to="/about/"
                title="About"
                className="site-header__nav-links"
                activeClassName="active"
              >
                About
              </Link>
              <Link
                to="/connect/"
                title="Connect"
                className="site-header__nav-links"
                activeClassName="active"
              >
                Connect
              </Link>
            </nav>
            <div className="site-header__nav display-mobile-only" >
              <button
                title="navigation menu"
                className="site-header__menu-toggle"
                role="button"
                aria-label="navigation menu"
                onClick={this.handleMenuClick}
              >
                Menu
                <span className="site-header__menu-text"></span>
                <span className="site-header__menu-bar">
                </span>
              </button>
            </div>
          </header>
          <nav className="site-menu" aria-hidden={!this.state.isMenuOpen} >
            <ul className="site-menu__nav" >
              <li className="site-menu__nav-item" >
                <Link
                  to="/courses/"
                  title="Courses"
                  className="site-menu__nav-item-link"
                  activeClassName="active"
                  onClick={this.handleMenuClick}                
                >
                  Courses
                </Link>
              </li>
              <li className="site-menu__nav-item" >
                <Link
                  to="/workshops/"
                  title="Workshops"
                  className="site-menu__nav-item-link"
                  activeClassName="active"
                  onClick={this.handleMenuClick}                  
                >
                  Workshops
                </Link>
              </li>
              <li className="site-menu__nav-item" >
                <Link
                  to="/about/"
                  title="About"
                  className="site-menu__nav-item-link"
                  activeClassName="active"
                  onClick={this.handleMenuClick}                
                >
                  About
                </Link>
              </li>
              <li className="site-menu__nav-item" >
                <Link
                  to="/connect/"
                  title="Connect"
                  className="site-menu__nav-item-link"
                  activeClassName="active"
                  onClick={this.handleMenuClick}                
                >
                  Connect
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    )
  }
}

export default Header
