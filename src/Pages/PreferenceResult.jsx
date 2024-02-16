import styled from "styled-components";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import PreferenceResult from "../Components/Preference/Pre_Result";
export default function PreferenceResultPage() {
  return (
    <PreferenceContainer>
      <NavigationMenu />
      <PreferenceResult />
    </PreferenceContainer>
  );
}
const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
