import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import imgLB from "../../assets/image/logo_lidergestion-200.svg";


const query = graphql`
  query {
    wpMenu(id: {eq: "dGVybToxNzE="}) {
      id
      name
      menuItems {
        nodes {
          parentId
          url
          label
          childItems {
            nodes {
              url
              label
              childItems {
                nodes {
                  label
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

const Footer = ({ className, ...rest }) => {
  const { wpMenu } = useStaticQuery(query)

  return (
    <>
      <div className={`pb-13 pb-lg-10 ${className}`} {...rest}>
        <div className="container">
          <hr className="border-top border-default-color-2 m-0 p-0" />
          <div
            className="row pt-12 pt-lg-20 justify-content-center"
          >
            <div className="col-lg-3 col-md-5 col-md-3">
              <div className="pr-xl-20 mb-11 mb-lg-0">
                <div className="brand-logo mb-7 mb-lg-8">
                  <Link to="/">
                    <img
                      className="mx-auto mx-0 light-version-logo default-logo"
                      src={imgLB}
                      alt=""
                    />
                    <img
                      className="dark-version-logo mx-auto mx-0"
                      src={imgLB}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 offset-lg-1">
              <div className="row">
              { wpMenu && wpMenu.menuItems.nodes.filter(({ parentId}) => parentId === null).map(
                ({ label, url, childItems, parentId, ...rest }, index) => {
                  const isExternal = !url.startsWith('/')
                  const hasSubItems = Array.isArray(childItems.nodes) && childItems.nodes.length > 0;
                  return (
                    <React.Fragment key={label + index}>
                      { hasSubItems ? (
                        <div className="col-md-4 col-xs-6">
                          <div className="mb-10 mb-lg-0">
                            <h4 className="font-size-6 font-weight-medium mb-5">
                              {label}
                            </h4>
                            <ul className="list-unstyled">
                              { childItems.nodes.map(
                                (itemInner, indexInnerMost) => (
                                  <li className="mb-2"
                                    key={itemInner.label + indexInnerMost}
                                  >
                                    { !itemInner.url.startsWith('/') ? (
                                      <a
                                        href={`${itemInner.url}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {itemInner.label}
                                      </a>
                                    ) : (
                                      <Link to={`${itemInner.url}`}>
                                        {itemInner.label}
                                      </Link>
                                    )}
                                  </li>
                                )
                              )}
                            </ul>

                          </div>
                        </div>
                      ):(
                        <ul className="list-unstyled">
                          <li className="mb-2"
                            key={label}
                          >
                            { isExternal ? (
                              <a
                                href={`${ url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                { label}
                              </a>
                            ) : (
                              <Link to={`${ url}`}>
                                {label}
                              </Link>
                            )}
                          </li>
                        </ul>
                      )}
                    </React.Fragment>
                  )}
              )}                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
