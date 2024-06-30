import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setExpire, setToken } from "../../redux/loginSlice";

const StyledLink = styled(Link)`
  text-decoration: none; /* underline 제거 */
  color: gray; /* 글씨 색상 설정 */
  margin: 0 10px; /* 좌우 여백 추가 */
`;

function HeaderComponent() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  return (
    <>

    </>
  );
}

export default HeaderComponent;

const SubHeaderContainer = styled.div`
  width: 100%;
  height: 47px;
  background: rgba(156, 156, 156, 0.2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const SubHeaderItemContainer = styled.div`
  display: flex;
  width: 300px;
  height: 23px;
  margin-right: 310px;
`;
