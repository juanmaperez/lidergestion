import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home1/Hero";
import Company from "../sections/home1/Compnay";
import Categories from "../sections/home1/Categories";
import Testimonial from "../sections/home1/Testimonial";

import Content2 from "../sections/home1/Content2";
import Blog from "../sections/home1/Blog";
// import Section from "../layout/Section";
import Insurances from "../sections/home1/Insurances";


const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero className="position-relative z-index-1" />
        <Company className="bg-default-1 pt-13 pt-md-17 pt-lg-24 pb-13 pb-md-14 pb-lg-23" />
        <Insurances className="pt-lg-19 pb-12 pb-lg-17" />

        {/* <Categories className="bg-default-1 pt-lg-13 pb-md-7 pb-lg-11 position-relative" /> */}
        <Content2 className="pt-21 pt-md-24 pt-lg-32 pb-15 pb-md-19 pb-lg-30" />
        <Testimonial className="pt-13 pt-md-18 pt-lg-24 pb-13 pb-md-19 pb-lg-28 position-relative" />
        <Blog className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
