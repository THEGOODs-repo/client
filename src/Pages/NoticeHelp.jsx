import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import NavigationCategoryMenu from "../Components/NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import BaseFooter from "../Components/Footer/BaseFooter";
import FixedButtons from "../Components/Global/FixedButtons";
import HelpCenter from "../Components/NoticeHelp/HelpCenter";
import HelpCenterWrite from "../Components/NoticeHelp/HelpCenterWrite";
import TermsOfUse from "../Components/NoticeHelp/TermsOfUse";
import Policy from "../Components/NoticeHelp/Policy";
import Privacy from "../Components/NoticeHelp/Privacy";

const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* 위쪽 여백 추가 */
`;

const NoticeHelp = () => {
  return (
    <div>
      <FixedButtons></FixedButtons>
      <NavWrapContainer>
        <NavigationMenu />
        <div
          style={{
            borderBottom: "1px solid #9C9C9C",
            width: "100%",
            height: "3px",
          }}
        ></div>
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <Routes>
        <Route path="termsofuse" element={<TermsOfUse />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="policy" element={<Policy />} />
        <Route path="notice" element={<HelpCenter />} />
        <Route path="write" element={<HelpCenterWrite />} />
      </Routes>
      <BaseFooter />
    </div>
  );
};

export default NoticeHelp;
