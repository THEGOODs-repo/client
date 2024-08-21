import React from "react";
import styled from "styled-components";

const TOUWrapper = styled.div`
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

const TermsOfUse = () => {
  return (
    <TOUWrapper>
      <Title>이용약관</Title>
      <Body>
        더굿즈 이용약관
        <div>
          이용약관
          <br />
          <br />.
        </div>
      </Body>
    </TOUWrapper>
  );
};

export default TermsOfUse;
