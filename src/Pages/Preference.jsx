import styled from "styled-components";
import PreferenceIdol from "../Components/Preference/Pages/Idol";

export default function Preference() {
  return (
    <PreferenceContainer>
      <PreferenceIdol />
    </PreferenceContainer>
  );
}
const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
