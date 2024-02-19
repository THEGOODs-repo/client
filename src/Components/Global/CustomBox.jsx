import React from "react";
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: flex-start;
  justify-content: center;
`;

const CheckBoxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0;
  margin: 0 0 0 0; /* 기본값 설정 */

  &:before {
    content: "";
    height: ${23 / 19.2}vw;
    width: ${23 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: ${2 / 19.2}vw;
    background-size: ${11 / 19.2}vw ${8 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%239C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }

  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: ${23 / 19.2}vw;
    width: ${23 / 19.2}vw;
    border: ${1 / 19.2}vw solid transparent;
    border-radius: ${2 / 19.2}vw;
    background-size: ${11 / 19.2}vw ${8 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #f0c920;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%23FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }
`;

const CheckBoxInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  transition: opacity 1s ease; // 추가된 부분

  &:checked + ${CheckBoxLabel} {
    &:after {
      opacity: 1;
      transition: opacity 0.1s;
    }
  }
`;

const CheckBoxDiv = styled.div`
  margin: 0 0 0 ${11 / 19.2}vw;
  white-space: pre-line;
  text-align: start;
  color: #202123;
`;

export const CheckBox = ({ index, state, onChange, label }) => {
  return (
    <CheckBoxWrapper>
      <CheckBoxInput
        type="checkbox"
        id={index}
        name={index}
        checked={state}
        onChange={onChange}
      />
      <CheckBoxLabel htmlFor={index}>
        <CheckBoxDiv>{label}</CheckBoxDiv>
      </CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

const RadioBoxWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: flex-start;
  justify-content: center;
`;

const RadioBoxDiv = styled.div`
  margin: 0 0 0 ${11 / 19.2}vw;
  white-space: pre-line;
  text-align: start;
  color: #202123;
`;

const RadioBoxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0;
  margin: 0;

  &:before {
    content: "";
    height: ${24 / 19.2}vw;
    width: ${24 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: 50%; /* Use border-radius to create a circular shape */
    background-size: ${12 / 19.2}vw ${12 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffffff;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="6" fill="%239C9C9C" fill-opacity="0.5"/></svg>');
  }

  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: ${24 / 19.2}vw;
    width: ${24 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: 50%; /* Use border-radius to create a circular shape */
    background-size: ${12 / 19.2}vw ${12 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffffff;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="6" fill="%23F0C920" fill-opacity="1"/></svg>');
  }
`;

const RadioBoxInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${RadioBoxLabel} {
    &:after {
      opacity: 1;
    }
  }
`;

export const RadioBox = ({ index, state, onChange, label, name }) => {
  return (
    <RadioBoxWrapper>
      <RadioBoxInput
        type="radio"
        id={index}
        name={name}
        checked={state}
        onChange={onChange}
      />
      <RadioBoxLabel htmlFor={index}>
        <RadioBoxDiv>{label}</RadioBoxDiv>
      </RadioBoxLabel>
    </RadioBoxWrapper>
  );
};
