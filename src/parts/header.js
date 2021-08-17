/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../components/Button/Button";
import React from "react";
import IconText from "./IconText";
import { Navbar, Container, Nav } from "react-bootstrap";
import Fade from "react-reveal/Fade";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm justify-content-center">
          <Navbar bg="light" expand="lg">
            <Container className="justify-content-center">
              <Navbar.Brand>
                <IconText />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
      </Fade>
    );
  return (
    <Fade>
      <header className="spacing-sm">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <IconText />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center"
              id="basic-navbar-nav"
            >
              <Nav className="ms-auto">
                <li className={`nav-item ${getNavLinkClass("/")}`}>
                  <Button className="text-center nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                  <Button
                    className="text-center nav-link"
                    type="link"
                    href="/checkout"
                  >
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                  <Button
                    className="text-center nav-link"
                    type="link"
                    href="/stories"
                  >
                    Stories
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                  <Button
                    className="text-center nav-link"
                    type="link"
                    href="/agents"
                  >
                    Agents
                  </Button>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </Fade>
  );
}
