import styled from "styled-components";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import PreferenceResult from "../Components/Preference/Result";
export default function PreferenceResultPage() {
  return (
    <PreferenceContainer>
      <PreferenceResult />
    </PreferenceContainer>
  );
}
const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
