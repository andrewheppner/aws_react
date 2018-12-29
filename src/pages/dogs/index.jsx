import React from "react";
import Styled from "styled-components";

const BlueBox = Styled.div.attrs({
  className: "bg-red"
})`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

export const Dogs = () => (
  <section>
    <h1>Dogs</h1>
    <BlueBox />
  </section>
);
