import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BodyClassName from "../utils/body-class-name";
import {Header} from '../partials'

// import './index.css'
import "../assets/scss/index.scss";

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    history: PropTypes.any,
    location: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    // Fade in the very first page after load.
    this.state = {
      pageClass: "",
      navOpen: false
    };
  }

  handleToggleMenu = (navOpen) => {
    this.setState({
      navOpen
    });
    this.toggleBodyClasses(navOpen);
  }

  toggleBodyClasses(navOpen) {
    const isOpenClass = "js-menu--is-open";

    if (navOpen) {
      const initialPageClass = this.state.pageClass;
      // Menu is opening, add isOpening class
      this.setState({
        pageClass: `${initialPageClass} ${isOpenClass}`
      });
    } else {
      this.setState({
        pageClass: ""
      });
    }
  }

  render() {
    return (
      <div>
        <BodyClassName className={this.state.pageClass}/>
        {/* SITE HEADER */}
        <Header
          onToggleMenu={this.handleToggleMenu}
          isOpen={this.state.navOpen}
          location={this.props.location}
        />

        {React.cloneElement(
          this.props.children(),
          { isOpen: this.state.isOpen }
        )}

        {/* SITE FOOTER */}
        {/* <Footer/> */}
      </div>
    );
  }
}
