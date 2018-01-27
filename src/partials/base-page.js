import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import BodyClassName from "../utils/body-class-name";
import noImg from "../assets/images/no-img.jpg";

const defaultKeywords =
  "alightechs, workshops, android, python " +
  "hyderabad, hyderabad android, python hyderabad";
const defaultDescription =
  "Learn latest technologies from experts in industry" +
  " Alightechs provides best training in hyderabad.";

export default class BasePage extends Component {
  static displayName = "BasePage";

  static propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    isOpen: PropTypes.bool,
    keywords: PropTypes.string,
    pageClass: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  };

  static defaultProps = {
    description: defaultDescription,
    image: noImg,
    keywords: defaultKeywords
  };

  render() {
    const {
      children,
      description,
      pageClass,
      imageUrl,
      isOpen,
      keywords,
      title,
      url
    } = this.props;

    return (
      <main role="main" aria-hidden={isOpen}>
        <Helmet
          title={title}
          meta={[
            { name: "description", content: description },
            { name: "keywords", content: keywords },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:url", content: url },
            { property: "og:image", content: imageUrl },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
            { name: "twitter:url", content: url },
            {
              name: "twitter:image",
              content: `http://alightechs.com${imageUrl}`
            }
          ]}
          link={[{ rel: "canonical", href: url }]}
        />
        <BodyClassName className={pageClass} />

        {children}
      </main>
    );
  }
}