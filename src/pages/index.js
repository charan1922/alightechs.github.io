import React, { Component } from 'react'
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import { BasePage } from "../partials";
import {Starfield} from "starfield-react";

import noImg from "../assets/images/no-img.jpg";

const title = "Welcome to Alightechs";
const description =
  "Alightechs is a hyderabad based institute " +
  "android training, python and javascript " +
  "digital marketing courses";
const url = "/";
const pageClass = "home page";

export default class Index extends Component {
  static displayName = "PagesIndex";

  static propTypes = {
    isOpen: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      starfieldHeight: 0,
      starfieldWidth: 0
    }
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    let starfieldHeight = this.refs.starfield.offsetHeight;
    let starfieldWidth = this.refs.starfield.offsetWidth;    
    // let starfieldDimensions = starfieldNode.getBoundingClientRect()
    this.setState({
      starfieldHeight,
      starfieldWidth
    })
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  render() {
    return(
      <BasePage
        pageClass={pageClass}
        description={description}
        imageUrl={noImg}
        isOpen={this.props.isOpen}
        title={title}
        url={url}
      >
        {/* MAST */}
        <section className="mast mast--left mast--home section--dark js-scene" data-mode="cursor"  style={{"backface-visibility": "hidden"}} >
          <figure className="mast__bg" alt="Outerspace" />

          <div className="grid">
            <div className="mast__content">
              <span className="mast__subtitle">We're Alightechs-</span>
              <h1 className="mast__title">The Training Experts.</h1>
            </div>

            {/* <figure className="mast__graphic">
              <img
                className="mast__graphic-img"
                alt="Formidable company logo"
                src={heroLogo}
              />
            </figure> */}
          </div>
          <div className="starfield" ref="starfield" >
            <Starfield width={this.state.starfieldWidth} height={this.state.starfieldHeight} />
          </div>
        </section>
        <section className="featured courses" >
          <h1>Featured Courses</h1>
        </section>
        <section className="featured workshops">
        
        </section>
        <section className="upcoming courses">
        
        </section>
        <section className="upcoming workshops">
        
        </section>
        <section className="feedback">
            {/* Testinomials */}
        </section>
      </BasePage>
    )
  }
}
