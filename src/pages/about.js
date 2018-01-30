import React, { Component } from "react";
import { BasePage } from "../partials";
import noImg from "../assets/images/no-img.jpg";

const title = "Courses | Alightechs";
const description =
  "Alightechs is a hyderabad based institute " +
  "android training, python and javascript " +
  "digital marketing courses";
const url = "/courses/";
const pageClass = "course page";

export default class About extends Component {
  render() {
    return (
      <BasePage
        pageclassName={pageClass}
        description={description}
        imageUrl={noImg}
        isOpen={this.props.isOpen}
        title={title}
        url={url}
      >
        <div className="about-container">
          <section className="aboutHeader">
            <div className="innerWrapper">
              <h1 className="white">About Us</h1>
              <p className="titlesmall white">
                Alightechs is a registered Private lorem ipsum
              </p>
            </div>
          </section>
        </div>

        <div>
          {/* content */}

          <div className="aboutSummary">
            <div className="aboutHY">
              <h5>
                There&#8217;s never been more energy around the importance of
                learning to code.
              </h5>
              <p>
                But sometimes videos, one-day workshops and Codecademy
                doesn&#8217;t cut it. At HackerYou, we&#8217;re on a mission to
                offer the best learning experiences for people who want to learn
                coding, design or other digital skills. Our recipe is a
                combination of hands-on, project based learning from
                industry-leading professionals. Our courses feature small
                classes and a 10:1 ratio of students to instructors, hosted at
                our custom-designed 12,000 square foot learning centre in
                downtown Toronto. With both
                <a
                  href="http://hackeryou.com/front-end-web-development-immersive/"
                  target="_blank"
                >
                  full-time
                </a>{" "}
                and
                <a href="http://hackeryou.com/part-time-courses/">
                  part-time
                </a>{" "}
                courses, we&#8217;re confident that HackerYou can fit into your
                life.
              </p>
              <p>
                <span
                  data-sheets-value="[null,2,&quot;There's never been more energy around the importance of learning to code. But sometimes videos, one-day workshops and Codeacademy doesn't cut it. Neither do many university or college courses. At HackerYou, we're on a mission to offer the best learning experience for people who want to learn to code. Our recipe is a combination of hands-on, project based learning from the best in the industry. Small classes and a 10:1 ratio of students to instructors. Housed on a central campus that inspires. With both full-time and part-time courses, HackerYou can fit into your life. This is the year you should finally learn to code. You can climbe the corporate ladder, upgrade your skills, or start an exciting new career. We're here to help you get there.&quot;]"
                  data-sheets-userformat="[null,null,769,[null,0],null,null,null,null,null,null,null,4,0]"
                >
                  This is the year you should finally learn to code. Join our
                  1000+ alumni and climb the corporate ladder, upgrade your
                  skills, or start an exciting new career. We&#8217;re here to
                  help you get there.
                </span>
              </p>
              <a href="#team" className="button redBtn">
                meet the team
              </a>
              <p className="exlarge">
                <a href="../#courses" className="borderbottom">
                  view course calendar
                </a>
              </p>
            </div>

            <div className="whyHY">
              <p className="titlesmall grey1">Why HackerYou?</p>
              <ul>
                <li>
                  <img
                    src="http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/why-handson.svg"
                    alt=""
                  />
                  <p className="titlesmall">Hands on, project-based learning</p>
                </li>
                <li>
                  <img
                    src="http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/why-pros.svg"
                    alt=""
                  />
                  <p className="titlesmall">
                    Learn from industry leading professionals
                  </p>
                </li>
                <li>
                  <img
                    src="http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/why-ratio.svg"
                    alt=""
                  />
                  <p className="titlesmall">
                    Small classes with a low ratio of students to instructors
                  </p>
                </li>
                <li>
                  <img
                    src="http://hackeryou.com/wp-content/themes/hackeryou/assets/images/svg/why-social.svg"
                    alt=""
                  />
                  <p className="titlesmall">
                    A social and collaborative learning environment
                  </p>
                </li>
              </ul>
              <p>
                HackerYou’s talented lead instructors and dedicated mentors are
                the reason Alumni are so proud to be part of our community.
                <a href="#student-stories">Hear what people are saying.</a>
              </p>
            </div>
          </div>

          {/* <!-- Team Loop --> */}
          <section className="content alternate" id="team">
            <div className="innerWrapper1">
              <div className="teamHeader">
                <h2>The Team</h2>
                <div>
                  <p>
                    At HackerYou, we love what we do. Our team is made up of the
                    very best in the industry. Everyone on our team has
                    something else in common, too. We love teaching. This isn’t
                    just a job for us. It’s our opportunity to help people
                    change their lives. And guess what? It’s a lot of fun.
                  </p>
                </div>
              </div>
              <div className="teamWrapper">
                {/* <!-- Testimonial Loop for hiring partners --> */}

                <div className="teamMember">
                  <img src="http://hackeryou.com/wp-content/uploads/2014/01/RyanChristiani-530x462.jpg" />
                  <p>Ryan Christiani</p>
                  <p>CTO</p>
                  <p>
                    <a href="http://twitter.com/rchristiani">@rchristiani</a>
                  </p>
                  <p>
                    <a href="http://ryanchristiani.com">
                      http://ryanchristiani.com
                    </a>
                  </p>
                </div>
                <div id="kristen-spencer" className="teamMember">
                  <img src="http://hackeryou.com/wp-content/uploads/2015/04/kristenheadshot-530x462.jpg" />
                  <p>Kristen Spencer</p>
                  <p>Lead Instructor, Web Development</p>
                  <p>
                    <a href="http://twitter.com/kristencodes">@kristencodes</a>
                  </p>
                  <p>
                    <a href="http://kristenspencer.ca/">
                      http://kristenspencer.ca/
                    </a>
                  </p>
                </div>
                <div className="teamMember">
                  <img src="http://hackeryou.com/wp-content/uploads/2016/02/PAM_7913-e1461171304382-530x462.jpg" />
                  <p>Sylvia Nguyen</p>
                  <p>Lead Instructor, Web Development</p>
                  <p>
                    <a href="http://twitter.com/sylviacreates">
                      @sylviacreates
                    </a>
                  </p>
                  <p>
                    <a href="http://sylvia.io">http://sylvia.io</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </BasePage>
    );
  }
}
