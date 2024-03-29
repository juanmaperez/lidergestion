import React from "react";
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
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
import CardPricing from '../sections/home1/CardPricing'

const PageTemplate = ({ data, location}) => {
  const { wpPage } = data;
  const queryParams = new URLSearchParams(location.search)
  const subject = queryParams.get("subject")
  const { pathname } = location
  const block = wpPage.sections.blocks && wpPage.sections.blocks.find(block => block.fieldGroupName === "page_Sections_Blocks_Hero")
  const image = block && block.backgroundImage ? block.backgroundImage.sourceUrl : null
  return (
    <>
    	<Helmet>
				<meta charSet="utf-8" />
				<title>{wpPage.seo.title}</title>
				<link rel="canonical" href={`https://seguroslidergestion.com${wpPage.uri}`} />
				<meta name="description" content={wpPage.seo.metaDesc} />
        <meta property="og:url" content={`https://seguroslidergestion.com${wpPage.uri === '/home' ? '' : wpPage.uri}`} />
        <meta property="og:type" content={wpPage.seo.title} />
        <meta property="og:title" content={wpPage.seo.title} />
        <meta property="og:description" content={wpPage.seo.metaDesc} />
        <meta property="og:image" content={image} />
			</Helmet>
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
      return <Company {...rest} className="pt-13 pt-md-17 pt-lg-24 pb-13 pb-md-14 pb-lg-23" key={fieldGroupName + index}/>
    case "page_Sections_Blocks_Service":
      return <ContentLeft {...rest} className="pt-21 pt-md-24 pt-lg-26 pb-15 pb-md-19 pb-lg-24" key={fieldGroupName + index}/>
    case "page_Sections_Blocks_Menublock":
      return <MenuBlocks {...rest} className="pt-lg-19 pt-10 pb-12 pb-lg-17" key={fieldGroupName + index}/>
    case "page_Sections_Blocks_Testimonials":
      return <Testimonial { ...rest } className="pt-13 pt-md-18 pt-lg-24 pb-13 pb-md-19 pb-lg-24 position-relative" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_LatestPosts": 
			return <Blog { ...rest } className="pt-14 pt-md-18 pt-lg-26 pb-5 pb-md-7 pb-lg-10" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_Contactform": 
			return <ContactForm subject={subject} { ...rest } className="d-flex align-items-center pt-18 pt-md-18 pt-lg-24 pb-13 pb-md-17 pb-lg-26" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_Textcontent":
			return <TextContent {...rest} className="pt-24 pt-md-22 pt-lg-28 pb-16 pb-md-10 pb-lg-16" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_Progress":
			return <Progress {...rest } className="pt-14 pt-md-16 pt-lg-18 pb-14 pb-md-16 pb-lg-18" key={fieldGroupName + index}/>
		case "page_Sections_Blocks_Faqs":
			return <Faq { ...rest } className="pt-21 pt-md-20 pt-lg-26 pb-13 pb-md-18 pb-lg-25" key={fieldGroupName + index} />
    case "page_Sections_Blocks_Pricing":
      return <Pricing { ...rest } className="pt-13 pt-lg-25 pb-8 pb-lg-22" key={fieldGroupName + index} />
    case "page_Sections_Blocks_Contentright":
      return <ContentRight subject={subject } { ...rest } className="pt-21 pt-md-24 pt-lg-32 pb-15 pb-md-19 pb-lg-24" key={fieldGroupName + index} />
    case"page_Sections_Blocks_Cardpricing":
      return <CardPricing subject={subject } { ...rest } className="pt-16 pt-md-20 pt-lg-23 pb-5 pb-md-11 pb-lg-19" key={fieldGroupName + index}/>
    default:
      return null
  }
}

export const query = graphql`
  query($id: String) {
    wpPage(id: { eq: $id}){
      seo {
        title
        metaDesc
      }
      uri
      title
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
            fullwidth
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
          ... on WpPage_Sections_Blocks_Cardpricing {
            fieldGroupName
            title
            subtitle
            priceannotation
            cards {
              name
              description
              price
              highlights {
                title
              }
            }
          }
        }
      }
    }
  }
`



export default PageTemplate;
