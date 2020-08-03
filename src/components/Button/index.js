import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./styles";

function ButtonLink(props) {
  // props => { className: "o que alguém passar", href: "/" }
  return (
    <Button>
      <Link to={props.href} className={props.className}>
        {props.children}
      </Link>
    </Button>
  );
}

export default ButtonLink;
