import React from "react";
import { graphql } from "gatsby"
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home1/Hero";
import Company from "../sections/home1/Compnay";
import Testimonial from "../sections/home1/Testimonial";
import Content2 from "../sections/home1/Content2";
import Blog from "../sections/home1/Blog";
import Insurances from "../sections/home1/Insurances";


const IndexPage = ({ data }) => {
  const { wpPage } = data;
  const hero = wpPage.sections.blocks.find(block => block.fieldGroupName === "page_Sections_Blocks_Hero")

  return (
    <>
      <PageWrapper>
        <Hero { ...hero } className="position-relative z-index-1" />
        <Company className="bg-default-1 pt-13 pt-md-17 pt-lg-24 pb-13 pb-md-14 pb-lg-23" />
        <Insurances className="bg-default-1 pt-lg-19 pb-12 pb-lg-17" />

        {/* <Categories className="bg-default-1 pt-lg-13 pb-md-7 pb-lg-11 position-relative" /> */}
        <Content2 className="pt-21 pt-md-24 pt-lg-32 pb-15 pb-md-19 pb-lg-30" />
        <Testimonial className="pt-13 pt-md-18 pt-lg-24 pb-13 pb-md-19 pb-lg-28 position-relative" />
        <Blog className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" />
      </PageWrapper>
    </>
  );
};

export const homeQuery = graphql`
  query {
    wpPage(id: { eq:"cG9zdDoxMzI="}){
      sections {
        blocks {
        ... on WpPage_Sections_Blocks_Hero {
            fieldGroupName
            subtitle
            title
            textColor
            backgroundImage {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`



export default IndexPage;
