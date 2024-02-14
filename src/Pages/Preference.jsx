import styled from "styled-components";
import PreferenceComponent from "../Components/Preference/Pre_Component";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";

export default function Preference() {
  return (
    <PreferenceContainer>
      <NavigationMenu />
      <PreferenceComponent />
    </PreferenceContainer>
  );
}
const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
