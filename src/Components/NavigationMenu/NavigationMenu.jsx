import React, { useState } from 'react';
import styled from 'styled-components';
import Select, { components } from 'react-select';
import logo from '../../img/logo.svg';
import { useNavigate,Link } from 'react-router-dom';


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
const StyledLink = styled.a`
  text-decoration : none;
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

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('검색어:', searchTerm);
    // Additional search logic or API calls can be added here.
  };

  const options = [
    { value: '상품', label: '상품' },
    { value: '사장님', label: '사장님' },
    { value: '태그', label: '태그' },
  ];

  const navigate = useNavigate();

  return (
    <NavigationWrapper>
      <StyledLink href="/">
        <LogoWrapper src={logo} alt="THEGOODs" width="11vw"/>
      </StyledLink>
      <SearchWrapper>
          <Select
        options={options}
        components={{ DropdownIndicator: CustomDropdownIndicator , IndicatorSeparator:() => null}}
        styles={customStyles}
        isSearchable={false}
        placeholder="상품"
        />
        <VerticalLine />
        <SearchInput
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <svg onClick={handleSearch} viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={SearchStyle}>
          <path className="searchbutton" d="M26.25 24.5L18.75 17.5M21.25 11.6667C21.25 12.7391 21.0237 13.8011 20.5839 14.7919C20.1442 15.7827 19.4997 16.683 18.6872 17.4414C17.8747 18.1997 16.9101 18.8013 15.8485 19.2117C14.7869 19.6221 13.6491 19.8333 12.5 19.8333C11.3509 19.8333 10.2131 19.6221 9.15152 19.2117C8.08992 18.8013 7.12533 18.1997 6.31282 17.4414C5.5003 16.683 4.85578 15.7827 4.41605 14.7919C3.97633 13.8011 3.75 12.7391 3.75 11.6667C3.75 9.50073 4.67187 7.42351 6.31282 5.89196C7.95376 4.36041 10.1794 3.5 12.5 3.5C14.8206 3.5 17.0462 4.36041 18.6872 5.89196C20.3281 7.42351 21.25 9.50073 21.25 11.6667Z" stroke="#F0C920" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SearchWrapper>
      <IconWrapContainer>
      <IconWrapper>
        <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" style={IconStyle}>
          <path d="M5.98873 13.9342C6.39392 12.956 6.9878 12.0672 7.73649 11.3185C8.48516 10.5698 9.37397 9.97595 10.3522 9.57076C11.3304 9.16558 12.3788 8.95703 13.4376 8.95703C14.4964 8.95703 15.5448 9.16558 16.523 9.57076C17.5012 9.97595 18.39 10.5698 19.1387 11.3185L21.5001 13.6799L23.8615 11.3185C25.3735 9.8065 27.4242 8.95705 29.5626 8.95705C31.7009 8.95705 33.7516 9.8065 35.2636 11.3185C36.7757 12.8305 37.6251 14.8813 37.6251 17.0196C37.6251 19.1579 36.7757 21.2087 35.2636 22.7207L21.5001 36.4843L7.73649 22.7207C6.9878 21.972 6.39392 21.0832 5.98873 20.105C5.58355 19.1268 5.375 18.0784 5.375 17.0196C5.375 15.9608 5.58355 14.9124 5.98873 13.9342Z" stroke="#52555B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>찜</div>
      </IconWrapper>
      <IconWrapper style={{marginRight:'40px;'}}>
      <svg viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg" style={IconStyle}>
<g filter="url(#filter0_d_139_11413)">
<path d="M5.25 5.25H8.75L9.45 8.75M9.45 8.75H36.75L29.75 22.75H12.25M9.45 8.75L12.25 22.75M12.25 22.75L8.23725 26.7628C7.13475 27.8653 7.91525 29.75 9.4745 29.75H29.75M29.75 29.75C28.8217 29.75 27.9315 30.1187 27.2751 30.7751C26.6187 31.4315 26.25 32.3217 26.25 33.25C26.25 34.1783 26.6187 35.0685 27.2751 35.7249C27.9315 36.3813 28.8217 36.75 29.75 36.75C30.6783 36.75 31.5685 36.3813 32.2249 35.7249C32.8813 35.0685 33.25 34.1783 33.25 33.25C33.25 32.3217 32.8813 31.4315 32.2249 30.7751C31.5685 30.1187 30.6783 29.75 29.75 29.75ZM15.75 33.25C15.75 34.1783 15.3813 35.0685 14.7249 35.7249C14.0685 36.3813 13.1783 36.75 12.25 36.75C11.3217 36.75 10.4315 36.3813 9.77513 35.7249C9.11875 35.0685 8.75 34.1783 8.75 33.25C8.75 32.3217 9.11875 31.4315 9.77513 30.7751C10.4315 30.1187 11.3217 29.75 12.25 29.75C13.1783 29.75 14.0685 30.1187 14.7249 30.7751C15.3813 31.4315 15.75 32.3217 15.75 33.25Z" stroke="#52555B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
      <div>장바구니</div>
      </IconWrapper>  
      <Link to="/mypage">
      <IconWrapper>
      <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={IconStyle} >
<path d="M25.9497 17.1997C27.2625 15.887 28 14.1065 28 12.25C28 10.3935 27.2625 8.61301 25.9497 7.30025C24.637 5.9875 22.8565 5.25 21 5.25C19.1435 5.25 17.363 5.9875 16.0503 7.30025C14.7375 8.61301 14 10.3935 14 12.25C14 14.1065 14.7375 15.887 16.0503 17.1997C17.363 18.5125 19.1435 19.25 21 19.25C22.8565 19.25 24.637 18.5125 25.9497 17.1997Z" stroke="#52555B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.3379 28.0879C14.6353 25.7906 17.7511 24.5 21 24.5C24.2489 24.5 27.3647 25.7906 29.6621 28.0879C31.9594 30.3853 33.25 33.5011 33.25 36.75H8.75C8.75 33.5011 10.0406 30.3853 12.3379 28.0879Z" stroke="#52555B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
        <div>마이페이지</div>
      </IconWrapper>
      </Link>
      </IconWrapContainer>
      
    </NavigationWrapper>
  );
};

export default NavigationMenu;
