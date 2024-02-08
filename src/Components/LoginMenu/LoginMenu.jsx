import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  margin: ${105 / 19.2}vw 0 0 0;
  font-family: NotoSans;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const LogoWrapper = styled.img`
  width: ${487 / 19.2}vw;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: ${17 / 19.2}vw 0 ${60 / 19.2}vw 0;
  font-size: ${20 / 19.2}vw;
  justify-content: center;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginImg = {
  display: "flex",
  width: `${570 / 19.2}vw`,
  margin: `0 0 ${23 / 19.2}vw 0`,
  padding: 0,
};

const EmailWrapper = styled.div`
  display: flex;
  padding: ${8 / 19.2}vw 0 0 0;
  flex-direction: column;
  align-items: flex-start;
`;

const InputWrapper = styled.input`
  display: flex;
  margin: ${11 / 19.2}vw 0 ${7 / 19.2}vw 0;
  width: ${550 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  border: ${1.3 / 19.2}vw solid #9c9c9c;
  font-size: ${16 / 19.2}vw;
  padding: 0 0 0 ${17 / 19.2}vw;

  &.invalidinput {
    border: ${1.3 / 19.2}vw solid #fd3c56;
  }
`;

const WarningText = styled.div`
  font-size: ${14 / 19.2}vw;
  color: #fd3c56;
  padding: 0 0 0 ${1 / 19.2}vw;
  margin: 0;
  align-text: flex-start;
`;

const SaveWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: ${14 / 19.2}vw;
  margin: ${12 / 19.2}vw 0 ${18 / 19.2}vw 0;
  padding: 0 0 0 ${6 / 19.2}vw;
`;

const FindLink = styled.div`
  margin: 0 ${7 / 19.2}vw 0 auto;
`;

const LoginButton = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  background: #f0c920;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  margin: 0 0 ${18 / 19.2}vw 0;
`;

const ExtraWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  flex-direction: row;
  justify-content: space-between;
`;

const ExtraButton = styled.div`
  display: flex;
  width: ${270 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  border: ${1 / 19.2}vw solid #f0c920;
  color: #f0c920;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
`;

const EmailSaveLabel = styled.label`
  position: relative;
  display: flex;
  align-items: flex-start;
  user-select: none;
  padding: 0;
  margin: 0 0 ${(e) => e.$interval / 19.2}vw 0;

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

const EmailSaveInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${EmailSaveLabel} {
    &:after {
      opacity: 1;
      transition: opacity 0.1s;
    }
  }
`;

const EmailSaveDiv = styled.div`
  margin: 0 0 0 ${11 / 19.2}vw;
  font-size: ${14 / 19.2}vw;
  white-space: pre-line;
  text-align: start;
  color: #202123;
`;

const LoginMenu = () => {
  const navigate = useNavigate();
  const [Email, SetEmail] = useState("");
  const [ValidEmail, SetValidEmail] = useState(false);
  const [Password, SetPassword] = useState("");
  const [ValidPassword, SetValidPassword] = useState(false);
  const [EmailSave, SetEmailSave] = useState(false);

  useEffect(() => {
    var pattern = new RegExp(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    );
    SetValidEmail(pattern.test(Email));
  }, [Email]);

  useEffect(() => {
    var pattern = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
    );
    SetValidPassword(pattern.test(Password));
  }, [Password]);

  const EmailChange = (e) => {
    SetEmail(e.target.value);
  };

  const PasswordChange = (e) => {
    SetPassword(e.target.value);
  };

  useEffect(() => {
    SetValidEmail(true);
    SetValidPassword(true);
  }, []); // set bool variables to true when page init(mount)

  return (
    <LoginWrapper>
      <LogoWrapper src={logo} />
      <TextWrapper>로그인을 진행해주세요.</TextWrapper>
      <SocialWrapper>
        <svg
          viewBox="0 0 570 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
        >
          <line
            x1="4.37114e-08"
            y1="8.5"
            x2="175"
            y2="8.50002"
            stroke="#202123"
          />
          <line x1="395" y1="8.5" x2="570" y2="8.50002" stroke="#202123" />
          <path
            d="M248.169 0.479999H249.829V13.7H248.169V0.479999ZM249.309 5.96H252.509V7.34H249.309V5.96ZM243.229 1.88H244.989C244.989 6.56 241.709 9.98 236.529 11.64L235.809 10.28C240.369 8.88 243.229 6.08 243.229 2.6V1.88ZM236.549 1.88H244.069V3.24H236.549V1.88ZM238.549 16.8H250.629V18.16H238.549V16.8ZM238.549 12.36H240.209V17.34H238.549V12.36ZM267.407 0.479999H269.067V13.94H267.407V0.479999ZM254.727 1.94H264.247V3.3H254.727V1.94ZM254.427 11.22L254.247 9.8C257.207 9.8 261.427 9.76 264.807 9.36L264.907 10.6C261.427 11.16 257.367 11.22 254.427 11.22ZM256.527 3.1H258.127V10.04H256.527V3.1ZM260.847 3.1H262.447V10.04H260.847V3.1ZM264.407 3.9H268.287V5.26H264.407V3.9ZM264.407 7.36H268.287V8.72H264.407V7.36ZM257.507 16.8H269.547V18.16H257.507V16.8ZM257.507 12.84H259.167V17.66H257.507V12.84ZM282.996 14.96H299.376V16.34H282.996V14.96ZM290.316 11.08H291.976V15.54H290.316V11.08ZM284.976 1.82H297.356V7.3H286.676V10.92H285.036V5.96H295.716V3.16H284.976V1.82ZM285.036 10.22H297.776V11.58H285.036V10.22ZM303.155 2.4H314.795V3.74H303.155V2.4ZM301.395 14.54H317.735V15.92H301.395V14.54ZM313.915 2.4H315.535V4.2C315.535 6.52 315.535 9.1 314.855 13L313.195 12.84C313.915 9.14 313.915 6.44 313.915 4.2V2.4ZM332.933 0.499999H334.613V13.7H332.933V0.499999ZM322.993 16.8H335.153V18.16H322.993V16.8ZM322.993 12.34H324.633V17.26H322.993V12.34ZM324.913 1.74C327.613 1.74 329.613 3.58 329.613 6.2C329.613 8.8 327.613 10.66 324.913 10.66C322.213 10.66 320.193 8.8 320.193 6.2C320.193 3.58 322.213 1.74 324.913 1.74ZM324.913 3.18C323.153 3.18 321.813 4.42 321.813 6.2C321.813 7.96 323.153 9.2 324.913 9.2C326.673 9.2 328.013 7.96 328.013 6.2C328.013 4.42 326.673 3.18 324.913 3.18Z"
            fill="#202123"
          />
        </svg>

        <svg // 카카오 로그인
          viewBox="0 0 570 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
        >
          <rect width="570" height="54" rx="5" fill="#FEE500" />
          <g clip-path="url(#clip0_139_1886)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M224.5 10.2031C214.558 10.2031 206.5 16.429 206.5 24.1077C206.5 28.8832 209.617 33.0931 214.363 35.597L212.366 42.8921C212.19 43.5367 212.927 44.0505 213.493 43.677L222.247 37.8995C222.985 37.9708 223.736 38.0124 224.5 38.0124C234.441 38.0124 242.5 31.7867 242.5 24.1077C242.5 16.429 234.441 10.2031 224.5 10.2031Z"
              fill="black"
            />
          </g>
          <path
            d="M265.52 20.036H267.86C267.86 25.184 266.636 29.468 260.426 32.618L259.148 30.8C264.332 28.19 265.52 25.004 265.52 20.324V20.036ZM260.174 20.036H266.942V21.926H260.174V20.036ZM265.574 24.122V25.958L259.598 26.534L259.31 24.482L265.574 24.122ZM269.876 18.416H272.288V35.084H269.876V18.416ZM271.658 24.788H274.592V26.75H271.658V24.788ZM282.079 20.036H284.419C284.419 25.184 283.195 29.468 276.985 32.618L275.707 30.8C280.891 28.19 282.079 25.004 282.079 20.324V20.036ZM276.733 20.036H283.501V21.926H276.733V20.036ZM282.133 24.122V25.958L276.157 26.534L275.869 24.482L282.133 24.122ZM286.435 18.416H288.847V35.084H286.435V18.416ZM288.217 24.788H291.151V26.75H288.217V24.788ZM298.673 27.812H301.067V31.61H298.673V27.812ZM299.879 19.28C303.443 19.28 306.107 21.098 306.107 23.87C306.107 26.678 303.443 28.478 299.879 28.478C296.315 28.478 293.651 26.678 293.651 23.87C293.651 21.098 296.315 19.28 299.879 19.28ZM299.879 21.17C297.593 21.17 296.009 22.178 296.009 23.87C296.009 25.598 297.593 26.588 299.879 26.588C302.165 26.588 303.749 25.598 303.749 23.87C303.749 22.178 302.165 21.17 299.879 21.17ZM292.355 31.232H307.439V33.176H292.355V31.232ZM313.59 31.322H328.674V33.266H313.59V31.322ZM319.908 28.172H322.302V32.114H319.908V28.172ZM315.282 19.514H326.982V25.058H317.694V27.866H315.318V23.186H324.606V21.404H315.282V19.514ZM315.318 26.912H327.36V28.838H315.318V26.912ZM331.678 19.964H342.244V21.854H331.678V19.964ZM330.148 30.98H345.214V32.924H330.148V30.98ZM340.984 19.964H343.36V21.944C343.36 24.284 343.36 26.552 342.766 29.972L340.372 29.774C340.984 26.57 340.984 24.194 340.984 21.944V19.964ZM358.137 18.452H360.549V30.422H358.137V18.452ZM349.443 32.906H360.963V34.814H349.443V32.906ZM349.443 29.216H351.837V33.68H349.443V29.216ZM351.477 19.496C354.033 19.496 355.995 21.26 355.995 23.726C355.995 26.174 354.033 27.956 351.477 27.956C348.921 27.956 346.941 26.174 346.941 23.726C346.941 21.26 348.921 19.496 351.477 19.496ZM351.477 21.566C350.235 21.566 349.281 22.358 349.281 23.726C349.281 25.076 350.235 25.868 351.477 25.868C352.701 25.868 353.655 25.076 353.655 23.726C353.655 22.358 352.701 21.566 351.477 21.566Z"
            fill="black"
            fill-opacity="0.85"
          />
          <defs>
            <clipPath id="clip0_139_1886">
              <rect
                width="35.9999"
                height="36"
                fill="white"
                transform="translate(206.5 9)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg // 네이버 로그인
          viewBox="0 0 570 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
        >
          <rect width="570" height="54" rx="5" fill="#03C75A" />
          <g clip-path="url(#clip0_139_1885)">
            <path
              d="M227.849 27.5627L221.917 19H217V35H222.151V26.436L228.083 35H233V19H227.849V27.5627Z"
              fill="white"
            />
          </g>
          <path
            d="M249.35 20.018H251.726V29.702H249.35V20.018ZM249.35 29.09H250.52C252.536 29.09 254.21 29.018 256.136 28.622L256.442 30.62C254.444 31.052 252.644 31.124 250.52 31.124H249.35V29.09ZM260.798 18.434H263.084V35.102H260.798V18.434ZM253.994 23.69H257.792V25.616H253.994V23.69ZM257.27 18.722H259.502V34.364H257.27V18.722ZM276.709 18.416H279.121V35.138H276.709V18.416ZM270.139 19.586C272.659 19.586 274.513 21.89 274.513 25.526C274.513 29.198 272.659 31.502 270.139 31.502C267.619 31.502 265.765 29.198 265.765 25.526C265.765 21.89 267.619 19.586 270.139 19.586ZM270.139 21.764C268.897 21.764 268.051 23.078 268.051 25.526C268.051 28.01 268.897 29.342 270.139 29.342C271.381 29.342 272.209 28.01 272.209 25.526C272.209 23.078 271.381 21.764 270.139 21.764ZM293.447 18.416H295.823V35.138H293.447V18.416ZM289.667 24.284H294.131V26.21H289.667V24.284ZM282.449 19.73H284.825V23.762H288.101V19.73H290.459V31.214H282.449V19.73ZM284.825 25.616V29.288H288.101V25.616H284.825ZM303.09 31.322H318.174V33.266H303.09V31.322ZM309.408 28.172H311.802V32.114H309.408V28.172ZM304.782 19.514H316.482V25.058H307.194V27.866H304.818V23.186H314.106V21.404H304.782V19.514ZM304.818 26.912H316.86V28.838H304.818V26.912ZM321.178 19.964H331.744V21.854H321.178V19.964ZM319.648 30.98H334.714V32.924H319.648V30.98ZM330.484 19.964H332.86V21.944C332.86 24.284 332.86 26.552 332.266 29.972L329.872 29.774C330.484 26.57 330.484 24.194 330.484 21.944V19.964ZM347.637 18.452H350.049V30.422H347.637V18.452ZM338.943 32.906H350.463V34.814H338.943V32.906ZM338.943 29.216H341.337V33.68H338.943V29.216ZM340.977 19.496C343.533 19.496 345.495 21.26 345.495 23.726C345.495 26.174 343.533 27.956 340.977 27.956C338.421 27.956 336.441 26.174 336.441 23.726C336.441 21.26 338.421 19.496 340.977 19.496ZM340.977 21.566C339.735 21.566 338.781 22.358 338.781 23.726C338.781 25.076 339.735 25.868 340.977 25.868C342.201 25.868 343.155 25.076 343.155 23.726C343.155 22.358 342.201 21.566 340.977 21.566Z"
            fill="white"
          />
          <defs>
            <clipPath id="clip0_139_1885">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(217 19)"
              />
            </clipPath>
          </defs>
        </svg>
      </SocialWrapper>
      <EmailWrapper>
        <svg
          viewBox="0 0 570 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
        >
          <line
            x1="4.37114e-08"
            y1="8.5"
            x2="175"
            y2="8.50002"
            stroke="#202123"
          />
          <line x1="395" y1="8.5" x2="570" y2="8.50002" stroke="#202123" />
          <path
            d="M233.148 0.46H234.808V18.58H233.148V0.46ZM225.268 1.86C226.161 1.86 226.948 2.12 227.628 2.64C228.321 3.14667 228.861 3.87333 229.248 4.82C229.648 5.76667 229.848 6.88 229.848 8.16C229.848 9.44 229.648 10.5533 229.248 11.5C228.861 12.4467 228.321 13.18 227.628 13.7C226.948 14.22 226.161 14.48 225.268 14.48C224.374 14.48 223.581 14.22 222.888 13.7C222.194 13.18 221.648 12.4467 221.248 11.5C220.861 10.5533 220.668 9.44 220.668 8.16C220.668 6.88 220.861 5.76667 221.248 4.82C221.648 3.87333 222.194 3.14667 222.888 2.64C223.581 2.12 224.374 1.86 225.268 1.86ZM225.268 3.34C224.668 3.34 224.141 3.54 223.688 3.94C223.248 4.32667 222.901 4.88667 222.648 5.62C222.394 6.34 222.268 7.18667 222.268 8.16C222.268 9.13333 222.394 9.98667 222.648 10.72C222.901 11.44 223.248 12 223.688 12.4C224.141 12.8 224.668 13 225.268 13C225.854 13 226.368 12.8 226.808 12.4C227.261 12 227.614 11.44 227.868 10.72C228.121 9.98667 228.248 9.13333 228.248 8.16C228.248 7.18667 228.121 6.34 227.868 5.62C227.614 4.88667 227.261 4.32667 226.808 3.94C226.368 3.54 225.854 3.34 225.268 3.34ZM239.046 2.56H245.946V13.7H239.046V2.56ZM244.386 3.88H240.606V12.38H244.386V3.88ZM252.186 0.46H253.786V18.56H252.186V0.46ZM245.126 7.28H249.286V8.64H245.126V7.28ZM248.586 0.839999H250.166V17.64H248.586V0.839999ZM261.885 1.12C262.791 1.12 263.591 1.29333 264.285 1.64C264.991 1.97333 265.545 2.44 265.945 3.04C266.345 3.64 266.545 4.34 266.545 5.14C266.545 5.92667 266.345 6.62667 265.945 7.24C265.545 7.84 264.991 8.30667 264.285 8.64C263.591 8.97333 262.791 9.14 261.885 9.14C260.991 9.14 260.191 8.97333 259.485 8.64C258.778 8.30667 258.218 7.84 257.805 7.24C257.405 6.62667 257.205 5.92667 257.205 5.14C257.205 4.34 257.405 3.64 257.805 3.04C258.218 2.44 258.778 1.97333 259.485 1.64C260.191 1.29333 260.991 1.12 261.885 1.12ZM261.885 2.5C261.298 2.5 260.771 2.61333 260.305 2.84C259.851 3.05333 259.491 3.36 259.225 3.76C258.958 4.16 258.825 4.62 258.825 5.14C258.825 5.66 258.958 6.12 259.225 6.52C259.491 6.90667 259.851 7.21333 260.305 7.44C260.771 7.66667 261.298 7.78 261.885 7.78C262.471 7.78 262.991 7.66667 263.445 7.44C263.911 7.21333 264.278 6.90667 264.545 6.52C264.811 6.12 264.945 5.66 264.945 5.14C264.945 4.62 264.811 4.16 264.545 3.76C264.278 3.36 263.911 3.05333 263.445 2.84C262.991 2.61333 262.471 2.5 261.885 2.5ZM269.965 0.46H271.625V9.72H269.965V0.46ZM259.925 10.62H271.625V15H261.585V17.72H259.985V13.76H269.985V11.94H259.925V10.62ZM259.985 16.98H272.245V18.32H259.985V16.98ZM275.203 14.94H291.603V16.32H275.203V14.94ZM282.543 11.08H284.183V15.52H282.543V11.08ZM277.203 1.8H289.563V7.28H278.883V10.9H277.243V5.96H287.923V3.16H277.203V1.8ZM277.243 10.2H289.983V11.56H277.243V10.2ZM298.797 14.94H315.197V16.32H298.797V14.94ZM306.137 11.08H307.777V15.52H306.137V11.08ZM300.797 1.8H313.157V7.28H302.477V10.9H300.837V5.96H311.517V3.16H300.797V1.8ZM300.837 10.2H313.577V11.56H300.837V10.2ZM318.975 2.38H330.615V3.74H318.975V2.38ZM317.195 14.54H333.535V15.92H317.195V14.54ZM329.715 2.38H331.355V4.2C331.355 4.96 331.342 5.77333 331.315 6.64C331.302 7.49333 331.249 8.44 331.155 9.48C331.062 10.52 330.902 11.6933 330.675 13L328.995 12.82C329.235 11.5933 329.402 10.4667 329.495 9.44C329.602 8.41333 329.662 7.46667 329.675 6.6C329.702 5.73333 329.715 4.93333 329.715 4.2V2.38ZM348.754 0.479999H350.414V13.68H348.754V0.479999ZM338.794 16.8H350.974V18.16H338.794V16.8ZM338.794 12.34H340.454V17.26H338.794V12.34ZM340.714 1.74C341.62 1.74 342.427 1.92667 343.134 2.3C343.84 2.67333 344.4 3.2 344.814 3.88C345.227 4.54667 345.434 5.31333 345.434 6.18C345.434 7.04667 345.227 7.82 344.814 8.5C344.4 9.16667 343.84 9.69333 343.134 10.08C342.427 10.4533 341.62 10.64 340.714 10.64C339.82 10.64 339.014 10.4533 338.294 10.08C337.587 9.69333 337.027 9.16667 336.614 8.5C336.2 7.82 335.994 7.04667 335.994 6.18C335.994 5.31333 336.2 4.54667 336.614 3.88C337.027 3.2 337.587 2.67333 338.294 2.3C339.014 1.92667 339.82 1.74 340.714 1.74ZM340.714 3.18C340.127 3.18 339.6 3.30667 339.134 3.56C338.667 3.81333 338.294 4.16667 338.014 4.62C337.747 5.07333 337.614 5.59333 337.614 6.18C337.614 6.78 337.747 7.30667 338.014 7.76C338.294 8.2 338.667 8.54667 339.134 8.8C339.6 9.05333 340.127 9.18 340.714 9.18C341.3 9.18 341.827 9.05333 342.294 8.8C342.774 8.54667 343.147 8.2 343.414 7.76C343.68 7.30667 343.814 6.78 343.814 6.18C343.814 5.59333 343.68 5.07333 343.414 4.62C343.147 4.16667 342.774 3.81333 342.294 3.56C341.827 3.30667 341.3 3.18 340.714 3.18Z"
            fill="#202123"
          />
        </svg>
        <InputWrapper
          onChange={EmailChange}
          value={Email}
          key="id"
          placeholder="이메일"
          className={!ValidEmail && "invalidinput"}
        />
        {!ValidEmail && (
          <WarningText>
            {Email.length === 0
              ? "이메일을 입력해 주세요."
              : `유효하지 않은 이메일입니다.`}
          </WarningText>
        )}
        <InputWrapper
          type="password"
          onChange={PasswordChange}
          value={Password}
          key="password"
          placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"
          className={!ValidPassword && "invalidinput"}
        ></InputWrapper>
        {!ValidPassword && (
          <WarningText>
            {Password.length === 0
              ? "비밀번호를 입력해 주세요."
              : `영문, 숫자, 특수문자를 조합한 8자 이상, 20자 이하의 비밀번호를 입력해주세요.`}
          </WarningText>
        )}
        <SaveWrapper>
          <EmailSaveInput
            type="checkbox"
            id="EmailSave"
            name="EmailSave"
            checked={EmailSave}
            onChange={() => SetEmailSave((EmailSave) => !EmailSave)}
          />
          <EmailSaveLabel htmlFor="EmailSave">
            <EmailSaveDiv>이메일 저장하기</EmailSaveDiv>
          </EmailSaveLabel>
          <FindLink
            onClick={() => {
              navigate("/register");
            }}
          >
            아이디 / 비밀번호 찾기
          </FindLink>
        </SaveWrapper>
        <LoginButton
          onClick={() => {
            navigate("/register");
          }}
        >
          로그인
        </LoginButton>
      </EmailWrapper>
      <ExtraWrapper>
        <ExtraButton
          onClick={() => {
            navigate("/register");
          }}
        >
          회원가입
        </ExtraButton>
        <ExtraButton
          onClick={() => {
            navigate("/register");
          }}
        >
          비회원 주문 조회
        </ExtraButton>
      </ExtraWrapper>
    </LoginWrapper>
  );
};

export default LoginMenu;
