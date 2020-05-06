/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import developerImage from "../../static/developer.svg";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <div className="pt-10 md:pt-48 w-full  flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center content-center justify-center">
      <div className=" w-1/2 overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-gray-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          Hi, I'm {author}
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          a Javascript {`{ developer }`}
        </p>
      </div>
      <div className="w-1/2  py-6 overflow-y-hidden">
        <img
          className="w-full mx-auto lg:mr-0 slide-in-bottom"
          src={developerImage}
          alt={author}
        />
      </div>
    </div>
  );
};

export default Hero;
