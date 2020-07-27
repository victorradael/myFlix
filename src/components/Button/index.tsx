import React, { LinkHTMLAttributes } from "react";

import { Button } from "./styles";

type ButtonProps = LinkHTMLAttributes<HTMLLinkElement>;

const ButtonLink: React.FC<ButtonProps> = ({ children, href, className }) => {
  return (
    <Button as="a" className={className} href={href}>
      {children}
    </Button>
  );
};

export default ButtonLink;
