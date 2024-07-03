import React from "react";
import styled from "styled-components";

const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: ${30 / 19.2}vw;
  font-weight: bold;
  padding: ${30 / 19.2}vw 0;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  width: ${932 / 19.2}vw;
  margin: 0 auto;
  font-size: ${20 / 19.2}vw;
  font-weight: bold;

  div {
    border: ${1 / 19.2}vw solid #e4e4e4;
    margin: ${10 / 19.2}vw 0 ${35 / 19.2}vw 0;
    font-size: ${12 / 19.2}vw;
    font-weight: normal;
  }
`;

const Policy = () => {
  return (
    <PolicyWrapper>
      <Title>운영정책</Title>
      <Body>
        운영정책
        <div>내용</div>
      </Body>
    </PolicyWrapper>
  );
};

export default Policy;
