import React, { useState } from "react";
import styled from "styled-components";
import arrow from"../img/chevron-right.png";
import Checkbox from "../Components/ShoppingCart/CheckBox";
const NonCustomerOrder = ()=>{
  const [isChecked, setIsChecked] = useState(false);

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return(
    <Container>
      <Header>
        <Title>주문/결제</Title>
        <Breadcrumb>
          <Item>장바구니</Item>
          <ArrowParent>
            <Arrow src={arrow} alt="arrow" />
          </ArrowParent>
          <BoldItem>주문/결제</BoldItem>
          <ArrowParent>
            <Arrow src={arrow} alt="arrow" />
          </ArrowParent>
          <Item>완료</Item>
        </Breadcrumb>
      </Header>

      <Text>- 주문자 정보<Yellow> *</Yellow></Text>
      <DefaultInput 
        type="text"
        placeholder="주문자명"></DefaultInput>
      <PhonetInput
        type="text"
        placeholder="주문자 핸드폰 번호">
      </PhonetInput>
      <PhoneCheckButton>
        인증요청
      </PhoneCheckButton>
      
      <Text>
        - 배송지 정보
        <Yellow> *</Yellow>
        <CheckboxText>주문자정보와 동일</CheckboxText>
        <Checkbox label="" checked={isChecked} onChange={handleCheckboxChange}></Checkbox> 
    </Text>
      <DefaultInput 
        type="text"
        placeholder="수령자명"></DefaultInput>
      <DefaultInput 
        type="text"
        placeholder="연락처"></DefaultInput>
      <AddressInput
        type="text"
        placeholder="우편번호"></AddressInput>
      <AddressButton>
        우편번호 찾기
      </AddressButton>
      <DefaultInput 
        type="text"
        placeholder="주소"></DefaultInput>
      <DefaultInput 
        type="text"
        placeholder="상세주소"></DefaultInput>

      <Text>- 환불계좌 정보(제작무산 등의 경우)<Yellow> *</Yellow></Text>
      <BankInput
      type="text"
        placeholder="은행명"></BankInput>
      <AccountNumber
        type="text"
        placeholder="계좌번호"></AccountNumber>
      <AccoutName
        type="text"
        placeholder="예금주명"></AccoutName>
      <Text>- 개인정보 수집 및 동의<Yellow> *</Yellow></Text>
      <BottomExplain>
        <ExplainText>상품 주문 및 배송을 위해 입력된 개인정보를 수집합니다.</ExplainText>
        <ExplainText>수집한 개인정보는 주문과 배송이외의 목적으로는 사용하지 않으며, 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 5년까지 보관합니다.</ExplainText> 
        <ExplainText>개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으며, 이 경우 상품 주문이 어려울 수 있습니다. </ExplainText>
      </BottomExplain>
      <Agree>
        <Checkbox label="" checked={isChecked} onChange={handleCheckboxChange}></Checkbox> 
        <CheckboxText>동의합니다.</CheckboxText>
      </Agree>
      <SubmitButton>제출</SubmitButton>

    </Container>
  );
};

export default NonCustomerOrder;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
`;

const Title = styled.p`
  position: display;
  margin-left: 20%;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8vw;
  color: #202123;
  margin-top: 2vw;
`;

const Breadcrumb = styled.div`
  display: flex;
  margin-left:40vw
`;

const Item = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vw;
  color: #9C9C9C;
  margin-top: 2.5vw;
  text-align: center; 
`;

const BoldItem = styled(Item)`
  font-weight: 700;
  color: #202123;
`;

const Arrow = styled.img`
  width:2vw;
  height:2vw;
`;

const ArrowParent = styled.div`
  margin-top:2vw;
`

const Text = styled.p`
  display: flex;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3vw;
  color: #202123;
  line-height:1.3vw;
  margin-left: 22%;
  margin-bottom: -0.5vw;
`
const Yellow = styled.p`
  color:#F0C920;
  margin-top:0vw;
  margin-left: 5px;
  margin-right: 1vw;
`
const DefaultInput = styled.input`
  position: relative;
  padding: 10px;
  font-size: 1.2vw;
  margin-left: 22%;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: 56%;
  margin-bottom: 0.5vw;
`
const PhonetInput = styled.input`
  position: relative;
  padding: 10px;
  font-size: 1.2vw;
  margin-left: 22%;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: 46%;
`
const PhoneCheckButton = styled.button`
  background: #F0C920;
  border-radius: 5px;
  margin-left:0.5%;
  padding:10px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 20px;  
  color: #FFFFFF;
  width: 9.5%;
  border : none;
`
const CheckboxText = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.1vw;
  line-height: 18px;
  margin-top: 0vw;
  color: #52555B;
`;
const AddressInput = styled.input`
  position: relative;
  padding: 10px;
  font-size: 1.2vw;
  margin-left: 22%;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: 20vw;
  margin-bottom: 0.5vw;
`
const AddressButton = styled.button`
  background: #F0C920;
  border-radius: 5px;
  margin-left:0.5%;
  padding:10px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 20px;  
  color: #FFFFFF;
  width: 9.5%;
  border : none; 
`
const BankInput = styled.input`
  position: relative;
  padding: 10px;
  font-size: 1.2vw;
  margin-left: 22%;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: 14.7vw;
  margin-bottom: 0.5vw;
`
const AccountNumber = styled.input`
  position: relative;
  padding: 10px;
  font-size: 1.2vw;
  margin-left: 5px;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: 25vw;
  margin-bottom: 0.5vw;
`
const AccoutName = styled.input`
  position: relative;
  padding: 10px;
  font-size: 1.2vw;
  margin-left: 5px;
  box-sizing: border-box;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
  width: 15vw;
  margin-bottom: 0.5vw;
`
const BottomExplain = styled.div`
  font-family: 'Noto Sans';
  box-sizing: border-box;
  width: 56%;
  margin-left: 22%;
  margin-top: 10px;
  padding:15px;
  border: 1px solid rgba(156, 156, 156, 0.8);
  border-radius: 5px;
`;
const ExplainText = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  line-height: 18px;
  margin-bottom: 0.5vw;
  margin-top: 0.5vw;
  color: #52555B;
`
const Agree = styled.div`
  margin-top: 1vw;
  margin-left: 69.5vw; 
  margin-bottom: 1vw;
  display:flex;
`
const SubmitButton = styled.button`
  background: #F0C920;
  border-radius: 5px;
  margin-left:22%;
  padding:10px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 20px;  
  color: #FFFFFF;
  width: 56%;
  border : none; 
`