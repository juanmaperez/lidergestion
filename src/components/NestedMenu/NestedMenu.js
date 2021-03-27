import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Link } from "gatsby";
import GlobalContext from "../../context/GlobalContext";
import { menuItems } from "../../components/Header/menuItems";

const NestedMenuContainer = styled.div`
  a {
    color: #121212 !important;
    transition: all 0.3s ease-out;
    font-weight: 700;
    text-transform: lowercase;

    &:hover,
    &:active {
      color: #121212;
      text-decoration: none;
    }
  }

  .list-group-item {
    font-weight: 700;
    text-transform: lowercase;
    color: #121212;
    &:hover,
    &:active,
    &.active {
      color: #121212;
      text-decoration: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(22, 28, 45, 0.125);
    }

    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const MenuItem = ({
  label,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(items);

  const gContext = useContext(GlobalContext);

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className={`d-flex align-items-center justify-content-between ${
            open ? "active" : ""
          }`}
        >
          <span>{label}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
          `}
        >
          {isExternal ? (
            <a
              href={`${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {label}
            </a>
          ) : (
            <Link
              to={`/${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {label}
            </Link>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
              <MenuItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = () => {
  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            depthStep={20}
            depth={0}
            {...menuItem}
          />
        ))}
      </ListGroup>
      <div>
        <ul style={{ margin: "20px 0px", listStyle: "none", padding: 0 }} className="main-menu d-flex">
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
              <i className="whatsapp icon icon-phone-2 font-weight-bold icon-bg-circle"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </NestedMenuContainer>
  );
};

export default NestedMenu;
