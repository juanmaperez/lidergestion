import React from "react";
import { graphql } from "gatsby"
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home1/Hero";
import Company from "../sections/home1/Companies";
import Testimonial from "../sections/home1/Testimonial";
import ContentLeft from "../sections/home1/ContentLeft";
import Blog from "../sections/home1/Blog";
import MenuBlocks from "../sections/home1/MenuBlocks";
import ContactForm from "../sections/home1/ContactForm";
import TextContent from '../sections/home1/TextContent'
import Progress from '../sections/home1/Progress'
import Faq from '../sections/home1/Faq'
import Pricing from '../sections/home1/Pricing'
import ContentRight from '../sections/home1/ContentRight'

const PageTemplate = ({ data, location}) => {
  const { wpPage } = data;
  const queryParams = new URLSearchParams(location.search)
  const subject = queryParams.get("subject")
  const { pathname } = location

  return (
    <>
      <PageWrapper>
        { wpPage.sections.blocks && wpPage.sections.blocks.map((block, index) => renderComponent(block, index, subject || pathname)) }
      </PageWrapper>
    </>
  );
};


function renderComponent({ fieldGroupName, ...rest}, index, subject = null){
  switch(fieldGroupName){
    case "page_Sections_Blocks_Hero":
      return <Hero { ...rest } className="position-relative z-index-1" key={fieldGroupName + index}/>
    case "page_Sections_Blocks_Companies": 
      return <Company {...rest} className="bg-default-1 pt-13 pt-md-17 pt-lg-24 pb-13 pb-md-14 pb-lg-23" key={fieldGroupName + index}/>
    case "page_Sections_Blocks_Service":
      return <ContentLeft {...rest} className="pt-21 pt-md-24 pt-lg-32 pb-15 pb-md-19 pb-lg-24" key={fieldGroupName + index}/>
    case "page_Sections_Blocks_Menublock":
      return <MenuBlocks {...rest} className="bg-default-1 pt-lg-19 pt-10 pb-12 pb-lg-17" key={fieldGroupName + index}/>
    case "page_Sections_Blocks_Testimonials":
      return <Testimonial { ...rest } className="pt-13 pt-md-18 pt-lg-24 pb-13 pb-md-19 pb-lg-28 position-relative" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_LatestPosts": 
			return <Blog { ...rest } className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_Contactform": 
			return <ContactForm subject={subject } { ...rest } className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_Textcontent":
			return <TextContent {...rest} className="pt-21 pt-md-24 pt-lg-28 pb-15 pb-md-19 pb-lg-30" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_Progress":
			return <Progress {...rest } className="pt-21 pt-md-20 pt-lg-24 pb-15 pb-md-19 pb-lg-24" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_Faqs":
			return <Faq { ...rest } className="pt-21 pt-md-20 pt-lg-28 pb-13 pb-md-18 pb-lg-25" key={fieldGroupName + index} />
    case "page_Sections_Blocks_Pricing":
      return <Pricing { ...rest } className="pt-13 pt-lg-25 pb-8 pb-lg-22" key={fieldGroupName + index} />
    case "page_Sections_Blocks_Contentright":
      return <ContentRight subject={subject } { ...rest } className="pt-21 pt-md-24 pt-lg-32 pb-15 pb-md-19 pb-lg-24" key={fieldGroupName + index} />
    default:
      return null
  }
}

export const query = graphql`
  query($id: String) {
    wpPage(id: { eq: $id}){
      sections {
        blocks {
          ... on WpPage_Sections_Blocks_Hero {
            fieldGroupName
            subtitle
            title
            textColor
            form
            backgroundImage {
              altText
              sourceUrl
            }
          }
          ... on WpPage_Sections_Blocks_Menublock {
            fieldGroupName
            title
            items {
              page {
                ... on WpPage {
                  id
                  slug
                }
              }
              image {
                sourceUrl
              }
              name
            }
          }
          ...on WpPage_Sections_Blocks_Companies {
            fieldGroupName
            title
            company {
              name
              logo {
                sourceUrl
              }
            }
          }
          ...on WpPage_Sections_Blocks_Testimonials {
            fieldGroupName
            title
            subtitle
            testimonial {
              name
              avatar {
                sourceUrl
              }
              text
              rating
              insurance
            }
          }
          ...on WpPage_Sections_Blocks_Service {
            fieldGroupName
            title
						image {
							sourceUrl
						}
            highlight {
              icon {
                sourceUrl
              }
              title
              description
            }
          }
					...on WpPage_Sections_Blocks_LatestPosts {
						blogurl
						fieldGroupName
						title
						linktext
          }
					...on WpPage_Sections_Blocks_Contactform {
						title
						fieldGroupName
						subtitle
            contactdetails
						whatsapps {
							number
						}
						phones {
							phonenumber
						}
						emails {
							address
						}
					}
					... on WpPage_Sections_Blocks_Textcontent {
						content
						fieldGroupName
					}
					... on WpPage_Sections_Blocks_Progress {
						fieldGroupName
						title
						steps {
							title
							description
							icon {
								sourceUrl
							}
						}
					}
					... on WpPage_Sections_Blocks_Faqs {
					  fieldGroupName
						ordered
						subtitle
						title
						icon {
							sourceUrl
						}
						faqsitems {
							answer
							question
						}
					}
          ... on WpPage_Sections_Blocks_Pricing {
            fieldGroupName
            title
            lists {
              title
              offer {
                name
                price
                highlights {
                  title
                }
              }
            }
          }
          ... on WpPage_Sections_Blocks_Contentright {
            content
            fieldGroupName
            form
            image {
              sourceUrl
            }
            short
            title
          }
        }
      }
    }
  }
`



export default PageTemplate;
