import React from "react";
import styled from "styled-components";
import { colors, setupBorder } from "../utils";

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      {/* <div className="box"></div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
    text-transform: capitalize;
    font-family: cursive;
    color: purple;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 0 auto;
  }
  .box {
    height: 15px;
    border: ${setupBorder({ width: 5, type: "solid", color: "green" })};
  }
`;

export default ComplexTitle;
