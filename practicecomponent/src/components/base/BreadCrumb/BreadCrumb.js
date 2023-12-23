import styled from "styled-components";
import BreadCrumbItem from "./BreadCrumbItem";
import React from "react";

const BreadcrumbContainer = styled.nav`
  display: inline-block;
`;

const BreadCrumb = ({ children, ...props }) => {
  const items = React.Children.toArray(children)
    .filter((element) => {
      if (
        React.isValidElement(element) &&
        element.props.__TYPE === "BreadCrumbItem"
      ) {
        return true;
      }
      console.warn("Only accepts BreadCrumb.Item as children");
      return false;
    })
    .map((element, index, elements) => {
      return React.cloneElement(element, {
        ...element.props,
        active: index === elements.length - 1,
      });
    });
  return <BreadcrumbContainer>{items}</BreadcrumbContainer>;
};

BreadCrumb.Item = BreadCrumbItem;

export default BreadCrumb;
