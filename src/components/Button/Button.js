/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Button as ButtonBootstrap } from "react-bootstrap";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.islight) className.push("btn-secondary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.hasShadow) className.push("btn-shadow");
  if (props.isBlock) className.push("btn-block");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border sprinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <ButtonBootstrap
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
      variant={props.variant}
    >
      {props.children}
    </ButtonBootstrap>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isLight: propTypes.bool,
  isDisabled: propTypes.bool,
  isExternal: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
