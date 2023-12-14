import styled from "styled-components";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

const BreadCrumbItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const BreadCrumbItem = ({ children, href, active, __TYPE, ...props }) => {
  return (
    <BreadCrumbItemContainer {...props}>
      <Anchor href={href}>
        <Text size={14} strong={active}>
          {children}
        </Text>
      </Anchor>
      {!active && <Icon name="chevron-right" size={22} strokeWidth={1} />}
    </BreadCrumbItemContainer>
  );
};

BreadCrumbItem.defaultProps = {
  __TYPE: "BreadCrumbItem",
};

BreadCrumbItem.propTypes = {
  __TYPE: "BreadCrumbItem",
};
export default BreadCrumbItem;
