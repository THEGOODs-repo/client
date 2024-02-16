import { Link } from 'react-router-dom'
import styled from 'styled-components'
const StyledLink = styled(Link)`
    text-decoration: none; /* underline 제거 */
    color: gray; /* 글씨 색상 설정 */
    margin: 0 10px; /* 좌우 여백 추가 */
`;


function HeaderComponent() {
    return (
        <>
            <SubHeaderContainer>
                <SubHeaderItemContainer>
                        {/* <img src="../img/" alt="bell" />
                        알림 */}
                        <StyledLink to="/register">회원가입</StyledLink>
                        <StyledLink to="/login">로그인</StyledLink>
                        <StyledLink>비회원 주문조회</StyledLink>
                </SubHeaderItemContainer>
            </SubHeaderContainer>
        </>
    )

}

export default HeaderComponent

const SubHeaderContainer = styled.div`
   width : 100%;
   height : 47px;
   background: rgba(156, 156, 156, 0.20);
   display : flex;
   justify-content : flex-end;
   align-items : center;
   margin-right : 100px;

   `
const SubHeaderItemContainer = styled.div`
   display : flex; 
   width : 300px;
   height : 23px;  
   margin-right : 350px;
`

