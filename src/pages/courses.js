import React, { Component } from "react";
import { BasePage } from "../partials";


import noImg from "../assets/images/no-img.jpg";
import android from "../assets/images/courses/android.png";

const title = "Courses | Alightechs";
const description =
  "Alightechs is a hyderabad based institute " +
  "android training, python and javascript " +
  "digital marketing courses";
const url = "/courses/";
const pageClass = "course page";
export default class Courses extends Component {
  render() {
    console.log(android)
    return (
      <BasePage
        pageClass={pageClass}
        description={description}
        imageUrl={noImg}
        isOpen={this.props.isOpen}
        title={title}
        url={url}
      >
        <div id="stripes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <section className="courses-hero">
          <h1 className="courses--title" >Alightechs Training Program</h1>
          <p className="courses--subtitle" >Upgrade your career with our immersive training</p>
        </section>
        <section className="courses">
          <div className="course__box">
            <img className="course__image" src={android} alt="Android" />
            <h1 className="course__title">Android</h1>
            <p className="course__description">
              Create web and mobile applications with reusable components
            </p>
          </div>
          <div className="course__box">
            <img className="course__image" src={android} alt="Android" />
            <h1 className="course__title">Android</h1>
            <p className="course__description">
              Create web and mobile applications with reusable components
            </p>
          </div>
          <div className="course__box">
            <img className="course__image" src={android} alt="Android" />
            <h1 className="course__title">Android</h1>
            <p className="course__description">
              Create web and mobile applications with reusable components
            </p>
          </div>
          <div className="course__box">
            <img className="course__image" src={android} alt="Android" />
            <h1 className="course__title">Android</h1>
            <p className="course__description">
              Create web and mobile applications with reusable components
            </p>
          </div>
          <div className="course__box">
            <img className="course__image" src={android} alt="Android" />
            <h1 className="course__title">Android</h1>
            <p className="course__description">
              Create web and mobile applications with reusable components
            </p>
          </div>         
        </section>
      </BasePage>
    );
  }
}
