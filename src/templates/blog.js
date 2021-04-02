import React from "react";
import { graphql, Link } from "gatsby";
import Hero from '../sections/home1/Hero'
import imgB3 from "../assets/image/home-1/png/post-thumbnails-3.png";
import cover from "../assets/image/home-1/jpg/blog-cover.jpg"

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpPost(
			limit: $limit,	
			skip: $skip,
 			sort: {
				fields: [date]
				order: DESC,
    	}) {
      nodes {
        id
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`


const Blog = ({ data, pageContext }) => {
	const { nodes: posts } = data.allWpPost;
	const { currentPage, numPages } = pageContext 
	const isFirst = currentPage === 1;
	const isLast = currentPage ===  numPages;
	const prevPage = currentPage -1 === 1 ? '/blog' : `/blog/${(currentPage - 1 ).toString()}`
	const nextPage = `/blog/${(currentPage  + 1).toString()}`

  return (
    <>
			<Hero backgroundImage={{sourceUrl:cover}} title="Blog de seguros" subtitle="Los mejores artículos sobre seguros" form={false}/>
      <div className={`${!isLast || !isFirst ? "pb-3 pb-md-7 pb-lg-16": "pb-13 pb-md-17 pb-lg-26"} pt-14 pt-md-18 pt-lg-27`}>
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            { posts
              .map(({ id, title, featuredImage, slug }) => {
              return (
                <div key={id} className="col-lg-6 col-md-10 mt-lg-n23">
                  <Link to={`/blog/${slug}`}>
                    <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                      { featuredImage && (
                        <div className="mr-10 square-116 overflow-hidden">
                          <img className="mw-100" src={ featuredImage ? featuredImage.node.sourceUrl : imgB3} alt="" />
                        </div>
                      )}
                      <div className="mt-8 mt-xs-0">
                        {title && (
                          <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                            { title }
                          </h4>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
			<div className="pb-10">
				<div className="container">
					<div className="row">
						<div className="col-3 offset-3 text-right p-10">
							{!isFirst && (
								<Link  to={prevPage} rel="prev">
									← Anterior
								</Link>
							)}
						</div>
						<div className="col-3 p-10">
							{!isLast && (
								<Link to={nextPage} rel="next">
									Siguiente →
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
    </>
  );
};

export default Blog;
