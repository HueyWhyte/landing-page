import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50px;

  h4 {
    font-size: 22px;
    color: orange;
    font-weight: bold;
  }

  p {
  }
`;

export default function Ach(props) {
  console.log(props);
  return (
    <Container>
      <h4>{props.number}</h4>
      <p>{props.name}</p>
    </Container>
  );
}
