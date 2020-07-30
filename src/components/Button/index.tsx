import React, { LinkHTMLAttributes } from "react";

import { Container } from "./styles";
import { Link, NavLinkProps } from "react-router-dom";

type ButtonProps = NavLinkProps<Link>;

const ButtonLink: React.FC<ButtonProps> = ({ children, to, ...rest }) => {
  return (
    <Container>
      <Link {...rest} to={to}>
        {children}
      </Link>
    </Container>
  );
};

export default ButtonLink;
