import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { components } from 'react-select';
import logo from '../../img/logo.svg';
import { useNavigate,Link } from 'react-router-dom';
import shop from '../../img/shop.png';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setExpire, setToken } from '../../redux/loginSlice';


const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:black;
  height: ${104 / 19.2}vw;
  padding: ${15 / 19.2}vw 0 ${12 / 19.2}vw 0;
  width : 70%;
  font-family: NotoSans;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: ${12 / 19.2}vw;
  border: ${3 / 19.2}vw solid #F0C920;
  box-shadow: 0 0 ${5 / 19.2}vw ${2 / 19.2}vw rgba(0, 0, 0, 0.10);
  flex: 1;
  height: ${55 / 19.2}vw;
  width: ${700 / 19.2}vw;
  margin: ${15 / 19.2}vw ${103 / 19.2}vw ${2 / 19.2}vw -${5 / 19.2}vw;
  z-index:1;
`;

const VerticalLine = styled.div`
  height: 100%;
  width: ${3 / 19.2}vw; /* 선의 너비를 조절하세요 */
  background-color: #E1E1E1;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: ${18 / 19.2}vw; /* Use relative units for font size */
  background: transparent;
  margin: 0 0 0 ${14 / 19.2}vw;
  &::placeholder{
    font-family:NotoSans;
    font-weight: bold;
    color: #9C9C9C;
    display : flex;
    justify-content : flex-start;
    align-items : center;
  }
`;

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none', // Set border to transparent
    boxShadow: 'none',
    fontSize: `${18 / 19.2}vw`,
    padding: 0,
    width: `${86 / 19.2}vw`,
    height: `${40 / 19.2}vw`,
    zIndex: 0, // Set a lower value to decrease the stacking order
    backgroundColor: 'transparent',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#F0C920' // Background color for selected option
      : 'transparent',
    color: state.isSelected ? 'white' : 'black', // Text color for selected option
    ':hover': {
      backgroundColor: state.isSelected ? '#F0C920' : '#F0E8C3', // Change background color on hover, excluding selected option
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#52555B', // Placeholder color
  }),
  container: (provided) => ({
    ...provided,
    width: `${106 / 19.2}vw`, // 너비를 고정값으로 유지
    margin: `${10 / 19.2}vw ${14 / 19.2}vw ${10 / 19.2}vw ${10 / 19.2}vw`,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    border: 'none', // Remove the border
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,
    width: '100%', // 드롭다운 리스트의 너비를 100%로 설정
    fontSize: `${12 / 19.2}vw`,
    zIndex: 2, // Adjust as needed based on your layout
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0, // Adjust padding
  }),
};

const { DropdownIndicator } = components;

const CustomDropdownIndicator = (props) => {
    
  return (
    <DropdownIndicator {...props}>
      <svg width="0.73vw" viewBox="0 0 14 11" fill="#52555B" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 11L0.937823 0.499999L13.0622 0.5L7 11Z" fill="#202123" />
      </svg>
    </DropdownIndicator>
  );
};
const StyledA = styled.a`
  text-decoration : none;
`
const StyledLink = styled(Link)`
  text-decoration : none;
  color : black;
`

const IconWrapper = styled.div`
  width: ${ 82 / 19.2 }vw;
  display:flex;
  flex-direction: column;
  font-size: 0.625vw;
  align-items: center;
  margin: ${14 / 19.2}vw 0 ${5 / 19.2}vw 0;
`;
const IconWrapContainer =styled.div`
  display:flex;
  align-items: center;
  margin-right : 34px;
`

const LogoWrapper = styled.img`
  width: ${ 213 / 19.2 }vw;
`;

const SearchStyle = {
  width: `${ 30 / 19.2 }vw`,
  margin: `${ 15 / 19.2 }vw ${ 15 / 19.2 }vw ${ 15 / 19.2 }vw ${ 15 / 19.2 }vw`
}

const IconStyle = {
  width: `${ 42 / 19.2 }vw`,
  height: `${ 42 / 19.2 }vw`
}

const NavigationMenu = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [tag,setTag] = useState('상품');
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const alreadyUser = useSelector((state) => state.login.token);
  //const alreadyUser = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiVVNFUiJ9XSwibWVtYmVyUm9sZSI6IkJVWUVSIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsInR5cGUiOiJBQ0NFU1MiLCJleHAiOjE3MTk4NjE2NzR9.bvpCEZpSCZocVBTqN51IpVAY2t810M6RhaUJthSspvDxpB3azQ2ua7FS5zJRO29CmjG7RK2zwhwDbGpJrPCXXw"
  const dispatch = useDispatch()
    

  useEffect(() => {
    const loginData = localStorage.getItem('persist:login');
    console.log(alreadyUser)
    if (loginData) {
      const parsedLoginData = JSON.parse(loginData);
      //const token = JSON.parse(parsedLoginData).token;
      //console.log(token)
      const token = parsedLoginData['token']
      console.log(token)
      //setIsLoggedIn((token !== 'null') && (alreadyUser !== 'null'));
      setIsLoggedIn((token !== 'null') && (alreadyUser !== 'null'));
    }
  }, [isLoggedIn]);

const handleLogout = async () => {
  try {
    // 서버에 로그아웃 요청을 보냄
    const response = await axios.post(
      '/api/members/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${alreadyUser}`,
        },
      }
    );
    dispatch(setToken(null))
    dispatch(setExpire(null))
    
    // 로컬 스토리지에서 토큰 정보 삭제
    localStorage.setItem('persist:login', JSON.stringify({
      token: 'null',
      expire: 'null',
      _persist: '{"version":-1,"rehydrated":true}'
    }));
    setIsLoggedIn(false)
      document.location.href = "/";
    console.log('로그아웃 요청 성공:', response.data);
    
    // 로그아웃 성공 시 추가적으로 필요한 처리를 여기에 추가할 수 있습니다.
  } catch (error) {
        dispatch(setToken(null))
    dispatch(setExpire(null))
    
    // 로컬 스토리지에서 토큰 정보 삭제
    localStorage.setItem('persist:login', JSON.stringify({
      token: 'null',
      expire: 'null',
      _persist: '{"version":-1,"rehydrated":true}'
    }));
    setIsLoggedIn(false)
      document.location.href = "/";
    console.error('로그아웃 요청 실패:', error);
    
    // 로그아웃 실패 시 추가적으로 필요한 처리를 여기에 추가할 수 있습니다.
  }
};

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyWordTag = (selectedOption) => {
    setTag(selectedOption.value);
  };
  const handleSearch = () => {
    console.log('검색어:', searchTerm);
    navigate(`/search?tag=${tag}&q=${searchTerm}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const options = [
    { value: '상품', label: '상품' },
    { value: '사장님', label: '사장님' },
    { value: '태그', label: '태그' },
  ];

  return (
    <NavigationWrapper>
      <StyledA href="/">
        <LogoWrapper src={logo} alt="THEGOODs" width="11vw"/>
      </StyledA>
      <SearchWrapper>
          
        <SearchInput
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </SearchWrapper>
      
      <IconWrapContainer>
      <StyledLink to="/mypage/EditProfile">
      <IconWrapper>
                        <img src={shop} alt="" style={IconStyle}/>
        <div>판매하기</div>
      </IconWrapper>
      </StyledLink>

      <StyledLink to="/shoppinglist">
      <IconWrapper style={{marginRight:'40px;'}}>
      <svg viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg" style={IconStyle}>
<g filter="url(#filter0_d_139_11413)">
<path d="M5.25 5.25H8.75L9.45 8.75M9.45 8.75H36.75L29.75 22.75H12.25M9.45 8.75L12.25 22.75M12.25 22.75L8.23725 26.7628C7.13475 27.8653 7.91525 29.75 9.4745 29.75H29.75M29.75 29.75C28.8217 29.75 27.9315 30.1187 27.2751 30.7751C26.6187 31.4315 26.25 32.3217 26.25 33.25C26.25 34.1783 26.6187 35.0685 27.2751 35.7249C27.9315 36.3813 28.8217 36.75 29.75 36.75C30.6783 36.75 31.5685 36.3813 32.2249 35.7249C32.8813 35.0685 33.25 34.1783 33.25 33.25C33.25 32.3217 32.8813 31.4315 32.2249 30.7751C31.5685 30.1187 30.6783 29.75 29.75 29.75ZM15.75 33.25C15.75 34.1783 15.3813 35.0685 14.7249 35.7249C14.0685 36.3813 13.1783 36.75 12.25 36.75C11.3217 36.75 10.4315 36.3813 9.77513 35.7249C9.11875 35.0685 8.75 34.1783 8.75 33.25C8.75 32.3217 9.11875 31.4315 9.77513 30.7751C10.4315 30.1187 11.3217 29.75 12.25 29.75C13.1783 29.75 14.0685 30.1187 14.7249 30.7751C15.3813 31.4315 15.75 32.3217 15.75 33.25Z" stroke="#52555B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
      <div>장바구니</div>
      </IconWrapper>  
      </StyledLink>
        {isLoggedIn ? (
          <IconWrapper onClick={handleLogout}>
            <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={IconStyle}>
              <path d="M25.9497 17.1997C27.2625 15.887 28 14.1065 28 12.25C28 10.3935 27.2625 8.61301 25.9497 7.30025C24.637 5.9875 22.8565 5.25 21 5.25C19.1435 5.25 17.363 5.9875 16.0503 7.30025C14.7375 8.61301 14 10.3935 14 12.25C14 14.1065 14.7375 15.887 16.0503 17.1997C17.363 18.5125 19.1435 19.25 21 19.25C22.8565 19.25 24.637 18.5125 25.9497 17.1997Z" stroke="#52555B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.3379 28.0879C14.6353 25.7906 17.7511 24.5 21 24.5C24.2489 24.5 27.3647 25.7906 29.6621 28.0879C31.9594 30.3853 33.25 33.5011 33.25 36.75H8.75C8.75 33.5011 10.0406 30.3853 12.3379 28.0879Z" stroke="#52555B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>로그아웃</div>
          </IconWrapper>
        ) : (
      <StyledLink to="/login">
      <IconWrapper>
      <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={IconStyle} >
<path d="M25.9497 17.1997C27.2625 15.887 28 14.1065 28 12.25C28 10.3935 27.2625 8.61301 25.9497 7.30025C24.637 5.9875 22.8565 5.25 21 5.25C19.1435 5.25 17.363 5.9875 16.0503 7.30025C14.7375 8.61301 14 10.3935 14 12.25C14 14.1065 14.7375 15.887 16.0503 17.1997C17.363 18.5125 19.1435 19.25 21 19.25C22.8565 19.25 24.637 18.5125 25.9497 17.1997Z" stroke="#52555B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.3379 28.0879C14.6353 25.7906 17.7511 24.5 21 24.5C24.2489 24.5 27.3647 25.7906 29.6621 28.0879C31.9594 30.3853 33.25 33.5011 33.25 36.75H8.75C8.75 33.5011 10.0406 30.3853 12.3379 28.0879Z" stroke="#52555B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
        <div>로그인</div>
      </IconWrapper>
      </StyledLink>
        )}
      </IconWrapContainer>
    </NavigationWrapper>
  );
};

export default NavigationMenu;