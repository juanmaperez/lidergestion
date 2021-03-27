import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import imgB3 from "../../assets/image/home-1/png/post-thumbnails-3.png";

const query = graphql`
  query {
    allWpPost(limit: 4, sort: {
      fields: [date]
      order: DESC
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


const Blog = ({ className, ...rest }) => {
  const { title, linkText, blogUrl } = rest
  const { allWpPost } = useStaticQuery(query)
  const options = React.useRef({ year: 'numeric', month: 'short', day: '2-digit'});

  return (
    <>
      <div className={className} >
        <div className="container">
          {/* <!-- Section Title --> */}
          { title && (
            <div className="mb-10 mb-lg-17">
              <div className="row align-items-center justify-content-center justify-content-lg-start">
                <div className="col-xl-8 col-lg-8 col-xs-10">
                  {/* <!-- Section Title --> */}
                  <div
                    className="text-center text-lg-left"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <h2 className="font-size-11 font-weight-medium pr-md-6 pr-lg-9 pr-xl-0 mb-0">
                      { title }
                    </h2>
                  </div>
                  {/* <!-- End Section Title --> */}
                </div>
              </div>
            </div>
          )}
          {/* <!-- End Section Title --> */}
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            { allWpPost.nodes.map(({ id, title, featuredImage, date, slug }) => {
              const formatDate = new Intl.DateTimeFormat('es-es', options.current).format(new Date(date))
              return (
                <div key={id} className="col-lg-6 col-md-10 mt-lg-n23">
                  <Link to={`/blog/${slug}`}>
                    <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                      { featuredImage && (
                        <div className="mr-10">
                          <img className="square-116" src={ featuredImage ? featuredImage.node.sourceUrl : imgB3} alt="" />
                        </div>
                      )}
                      <div className="mt-8 mt-xs-0">
                        {title && (
                          <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                            { title }
                          </h4>
                        )}
                        <div className="d-flex align-items-center flex-wrap">
                          <span className="text-bali-gray font-size-3 pr-9">
                            <i className="fa fa-clock mr-2"></i>{ formatDate } 
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            )}
            <div className="col-lg-6 offset-lg-6 offset-md-1 col-md-10 mt-lg-n23">

              {/* <!-- Btn Section --> */}
              <div className="btn-section text-right mt-10 mt-lg-13">
                <a className="btn-link gr-hover-text-primary" href={blogUrl}>
                  { linkText }
                </a>
              </div>
              {/* <!-- End Btn Section --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
