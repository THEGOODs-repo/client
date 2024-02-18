import styled from "styled-components";
import PreferenceIdol from "../Components/Preference/Pages/Idol";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";

export default function Preference() {
  return (
    <PreferenceContainer>
      <NavigationMenu />
      <PreferenceIdol />
    </PreferenceContainer>
  );
}
const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
