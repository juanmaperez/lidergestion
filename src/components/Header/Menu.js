import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    wpMenu(id: {eq: "dGVybToxMjQ="}) {
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


const Menu = () => {
  const { wpMenu } = useStaticQuery(query)

  return (
    <>
      <ul className="navbar-nav main-menu d-none d-lg-flex">
        {wpMenu && wpMenu.menuItems.nodes.filter(({ parentId}) => parentId === null).map(
          ({ label, isExternal = false, url, childItems, parentId, ...rest }, index) => {
            const hasSubItems = Array.isArray(childItems.nodes) && childItems.nodes.length > 0;
            return (
              <React.Fragment key={label + index}>
                {hasSubItems ? (
                  <li className="nav-item dropdown" {...rest}>
                    <a
                      className="nav-link dropdown-toggle gr-toggle-arrow"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                    >
                      { label }
                      <i className="icon icon-small-down"></i>
                    </a>
                    <ul className="gr-menu-dropdown dropdown-menu">
                      { childItems.nodes.map((subItem, indexSub) => {
                        const hasInnerSubItems = Array.isArray(subItem.childItems.nodes) && subItem.childItems.nodes.length > 0;
                        return (
                          <React.Fragment key={subItem.label + indexSub}>
                            {hasInnerSubItems ? (
                              <li className="drop-menu-item dropdown">
                                <a
                                  className="dropdown-toggle gr-toggle-arrow"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  href="/#"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {subItem.label}
                                  <i className="icon icon-small-down"></i>
                                </a>
                                <ul className="gr-menu-dropdown dropdown-menu dropdown-right">
                                  {subItem.childItems.nodes.map(
                                    (itemInner, indexInnerMost) => (
                                      <li
                                        className="drop-menu-item"
                                        key={itemInner.label + indexInnerMost}
                                      >
                                        {itemInner.isExternal ? (
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
                              </li>
                            ) : (
                              <li className="drop-menu-item">
                                {subItem.isExternal ? (
                                  <a
                                    href={`${subItem.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {subItem.label} +
                                  </a>
                                ) : (
                                  <Link to={`${subItem.url}`}>
                                    {subItem.label}
                                  </Link>
                                )}
                              </li>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" {...rest}>
                    {isExternal ? (
                      <a
                        className="nav-link"
                        href={`${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        className="nav-link"
                        to={`${url}`}
                        role="button"
                        aria-expanded="false"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                )}
              </React.Fragment>
            );
          }
        )}
        <li className="nav-item">
          <a
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:lidergestion10@hotmail.com"
          >
            <span className="form-icon font-size-5">
              <i className="icon icon-email-84 font-weight-bold"></i>
            </span>
          </a>
        </li>
        {/* 
        <li>
          <a
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href="tel:625036750"
          >
            <span className="form-icon font-size-5">
              <i className="icon icon-phone-2 font-weight-bold"></i>
            </span>
          </a>
        </li>
   
        <li>
          <a
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href="intent://send/625036750#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end"
          >
            <span className="form-icon font-size-5">
              <i className="whatsapp icon icon-phone-2 font-weight-bold icon-bg-circle bg-green-dark"></i>
            </span>
          </a>
        </li> 
        */}
      </ul>
    </>
  );
};
export default Menu;
