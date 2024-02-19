import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";
const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
const N_REST_API_KEY = process.env.REACT_APP_N_REST_API_KEY;
const K_REDIRECT_URI = `http://localhost:3000/api/members/kakao/callback`;
const N_REDIRECT_URI = `http://localhost:3000/api/members/naver/callback`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${N_REST_API_KEY}&state=TEST&redirect_uri=${N_REDIRECT_URI}`;

const RegisterWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  margin: ${113 / 19.2}vw 0 0 0;
  font-family: NotoSans;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const LogoWrapper = styled.img`
  width: ${318 / 19.2}vw;
  cursor: grab;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: ${37 / 19.2}vw 0 ${60 / 19.2}vw 0;
  font-size: ${20 / 19.2}vw;
  justify-content: center;
  font-weight: bold;
`;

const SocialWrapper = styled.div`
  border-bottom-style: dashed;
  border-bottom-width: ${1.5 / 19.2}vw;
  border-bottom-color: #8e8f91;
  padding: 0 0 ${37 / 19.2}vw 0;
  margin: 0 0 ${10 / 19.2}vw 0;
`;

const EmailWrapper = styled.div`
  margin: ${10 / 19.2}vw 0 0 0;
`;

const RegisterImg = {
  display: "block",
  width: `${570 / 19.2}vw`,
  margin: `0 0 ${14 / 19.2}vw 0`,
  padding: 0,
};

const RegisterButton = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  background: ${(e) =>
    (e.$kakao && "#fee500") || (e.$naver && "#03C75A") || "#f0c920"};
  color: ${(e) => (e.$kakao ? "rgba(0,0,0,0.85)" : "#fff")};
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  margin: ${27 / 19.2}vw 0 0 0;
  cursor: grab;
  font-weight: bold;
`;

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <RegisterWrapper>
      <LogoWrapper src={logo} onClick={() => navigate("/")} />
      <TextWrapper>회원가입을 진행해주세요.</TextWrapper>
      <SocialWrapper>
        <svg
          viewBox="0 0 570 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={RegisterImg}
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
            d="M238.969 0.479999H240.629V13.7H238.969V0.479999ZM240.109 5.96H243.309V7.34H240.109V5.96ZM234.029 1.88H235.789C235.789 6.56 232.509 9.98 227.329 11.64L226.609 10.28C231.169 8.88 234.029 6.08 234.029 2.6V1.88ZM227.349 1.88H234.869V3.24H227.349V1.88ZM229.349 16.8H241.429V18.16H229.349V16.8ZM229.349 12.36H231.009V17.34H229.349V12.36ZM258.208 0.479999H259.868V13.94H258.208V0.479999ZM245.528 1.94H255.048V3.3H245.528V1.94ZM245.228 11.22L245.048 9.8C248.008 9.8 252.228 9.76 255.608 9.36L255.708 10.6C252.228 11.16 248.168 11.22 245.228 11.22ZM247.328 3.1H248.928V10.04H247.328V3.1ZM251.648 3.1H253.248V10.04H251.648V3.1ZM255.208 3.9H259.088V5.26H255.208V3.9ZM255.208 7.36H259.088V8.72H255.208V7.36ZM248.308 16.8H260.348V18.16H248.308V16.8ZM248.308 12.84H249.968V17.66H248.308V12.84ZM286.017 0.46H287.697V18.56H286.017V0.46ZM287.237 7.8H290.577V9.18H287.237V7.8ZM281.397 2.42H283.017C283.017 7.56 280.657 12.2 274.817 15.14L273.897 13.86C278.897 11.32 281.397 7.46 281.397 2.68V2.42ZM274.737 2.42H282.257V3.78H274.737V2.42ZM305.335 0.479999H307.015V10.18H305.335V0.479999ZM295.355 11.08H296.995V13.28H305.375V11.08H307.015V18.32H295.355V11.08ZM296.995 14.6V16.98H305.375V14.6H296.995ZM297.315 1.34C300.055 1.34 302.015 3.04 302.015 5.5C302.015 7.98 300.055 9.68 297.315 9.68C294.575 9.68 292.595 7.98 292.595 5.5C292.595 3.04 294.575 1.34 297.315 1.34ZM297.315 2.72C295.515 2.72 294.215 3.86 294.215 5.5C294.215 7.14 295.515 8.28 297.315 8.28C299.115 8.28 300.415 7.14 300.415 5.5C300.415 3.86 299.115 2.72 297.315 2.72ZM322.834 0.479999H324.494V18.56H322.834V0.479999ZM324.094 7.9H327.454V9.3H324.094V7.9ZM310.494 3.36H321.154V4.72H310.494V3.36ZM315.894 6.22C318.454 6.22 320.294 7.94 320.294 10.38C320.294 12.82 318.454 14.54 315.894 14.54C313.354 14.54 311.494 12.82 311.494 10.38C311.494 7.94 313.354 6.22 315.894 6.22ZM315.894 7.6C314.254 7.6 313.074 8.74 313.074 10.38C313.074 12 314.254 13.16 315.894 13.16C317.534 13.16 318.714 12 318.714 10.38C318.714 8.74 317.534 7.6 315.894 7.6ZM315.034 0.699999H316.694V3.98H315.034V0.699999ZM342.152 0.479999H343.812V18.56H342.152V0.479999ZM336.852 2.42H338.492C338.492 7.66 336.132 12.24 330.092 15.2L329.212 13.86C334.432 11.34 336.852 7.5 336.852 2.7V2.42ZM330.032 2.42H337.572V3.78H330.032V2.42Z"
            fill="#202123"
          />
        </svg>
        <RegisterButton
          onClick={() => {
            window.location.href = kakaoURL;
          }}
          $kakao
        >
          <svg
            width={`${18 / 19.2}vw`}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: `0 ${14 / 19.2}vw ${2 / 19.2}vw 0` }}
          >
            <g clip-path="url(#clip0_2100_6336)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00005 0.601562C4.02919 0.601562 0 3.71452 0 7.55385C0 9.94159 1.55841 12.0465 3.93154 13.2985L2.93304 16.9461C2.84482 17.2684 3.21343 17.5252 3.49648 17.3385L7.87337 14.4498C8.24274 14.4854 8.61811 14.5062 9.00005 14.5062C13.9705 14.5062 18 11.3934 18 7.55385C18 3.71452 13.9705 0.601562 9.00005 0.601562Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2100_6336">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          카카오톡 간편 가입하기
        </RegisterButton>
        <RegisterButton
          onClick={() => {
            window.location.href = naverURL;
          }}
          $naver
        >
          <svg
            width={`${18 / 19.2}vw`}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: `0 ${14 / 19.2}vw ${2 / 19.2}vw 0` }}
          >
            <g clip-path="url(#clip0_2116_680)">
              <path
                d="M11.3491 9.06267L5.41687 0.5H0.5V16.5H5.65088V7.936L11.5831 16.5H16.5V0.5H11.3491V9.06267Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2116_680">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          네이버 간편 가입하기
        </RegisterButton>
      </SocialWrapper>
      <RegisterButton onClick={() => navigate("form")}>
        이메일로 가입하기
      </RegisterButton>
    </RegisterWrapper>
  );
};

export default RegisterPage;
