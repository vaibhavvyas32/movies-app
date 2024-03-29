import React, { Component } from "react";
import logo from "../logo.svg";
import styled from "styled-components";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

class Logo extends Component {
  render() {
    return (
      <>
        <Wrapper href="https://sambarros.com">
          <img src={logo} width="50" height="50" alt="sambarros.com" />
        </Wrapper>
      </>
    );
  }
}

export default Logo;
