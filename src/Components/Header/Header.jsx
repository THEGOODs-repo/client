import { Link } from 'react-router-dom'
import styled from 'styled-components'
function HeaderComponent() {
    return (
        <>
            <SubHeaderContainer>
                <SubHeaderItemContainer>
                    <SubHeaderItem>
                        {/* <img src="../img/" alt="bell" />
                        알림 */}
                        <Link to="/write">지수님 이동</Link>

                    </SubHeaderItem>
                    <SubHeaderItem>
                        <Link>경원님 이동</Link>

                    </SubHeaderItem>
                    <SubHeaderItem>
                        <Link>준석님 이동</Link>


                    </SubHeaderItem>

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
   margin-right : 50px;

   `
const SubHeaderItemContainer = styled.div`
   display : flex; 
   width : 300px;
   height : 23px;  
   margin-right : 50px;
`

const SubHeaderItem = styled.div`
   display : flex;
   width : 100px;
   height : 15px;  
`

