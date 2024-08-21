import {React,useState} from "react";
import styled from "styled-components";


export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  padding: 16px;
`;

export const Section = styled.div`
  margin-bottom: 16px;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  margin-right: 8px;
`;

export const RadioLabel = styled.label`
  font-size: 14px;
  cursor: pointer;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
`;

export const StatusButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #ffcc00;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InfoTable = styled.table`
  border-top: 2px solid gray;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;

`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  width : 200px;
  ${({ bold }) => bold && "font-weight: bold; width : 131px; text-align : center; height : 20px;"}
  ${({ name }) => name && "background-color : #F0F0F0;"}
  ${({ width }) => width && "width : 370px;"}
  
  
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function ManageOrderUser() {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Container>
      <Header>
        <ProfileImage />
        햄스터
        <StatusButton onClick={handleOpen}>주문취소</StatusButton>
      </Header>

      <SectionTitle>주문정보</SectionTitle>
      <InfoTable>
        <tbody>
          <TableRow>
            <TableData bold name>주문 상품</TableData>
            <TableData width>아이유 도무송 스티커: 라임알 스티커 핑크(1개) / 라임알 스티커 블루(2개)</TableData>
          </TableRow>
          <TableRow>
            <TableData bold name>주소</TableData>
            <TableData width>경기 용인시 기흥구 덕영대로 1732 (서천동, 경희대학교 국제캠퍼스) 전자정보대학</TableData>
            </TableRow>
          <TableRow>
            <TableData bold name>우편번호</TableData>
            <TableData>17104</TableData>
            <TableData bold name>배송방법</TableData>
            <TableData>택배</TableData>
          </TableRow>
          <TableRow>
            <TableData bold name>수령지명</TableData>
            <TableData>더굿즈</TableData>
            <TableData bold name>수령자 연락처</TableData>
            <TableData>010-1234-5678</TableData>
          </TableRow>
        </tbody>
      </InfoTable>

      <SectionTitle>상세정보</SectionTitle>
      <InfoTable>
        <tbody>
          <TableRow>
            <TableData bold name>진행상태</TableData>
            <TableData>
              <select>
                <option>입금확인전</option>
              </select>
            </TableData>
            <TableData bold name>작성시간</TableData>
            <TableData>2024-01-12 17:39:12</TableData>
          </TableRow>
          <TableRow>
            <TableData bold name>총 주문금액</TableData>
            <TableData>34,000원</TableData>
            <TableData bold name>입금 날짜</TableData>
            <TableData>2024-01-12</TableData>
          </TableRow>
          <TableRow>
            <TableData bold name>배송방법</TableData>
            <TableData>택배</TableData>
            <TableData bold name>배송비</TableData>
            <TableData>3,000원</TableData>
          </TableRow>
          <TableRow>
            <TableData bold name>입금자명</TableData>
            <TableData>더굿즈</TableData>
            <TableData bold name>입금액</TableData>
            <TableData>34,000원</TableData>
          </TableRow>
          <TableRow>
            <TableData bold name>환불 예금주</TableData>
            <TableData>더굿즈</TableData>
            <TableData bold name>환불 은행/계좌</TableData>
            <TableData>국민은행 (1234567890123)</TableData>
          </TableRow>
          <TableRow>
            <TableData bold name>주문자명</TableData>
            <TableData>더굿즈</TableData>
            <TableData bold name>주문자 연락처</TableData>
            <TableData>01012345678</TableData>
          </TableRow>
          <TableRow>
            <TableData bold name>주문자 이메일</TableData>
            <TableData>thegoods@gmail.com</TableData>
          </TableRow>
        </tbody>
      </InfoTable>

      <BackButton>목록</BackButton>
          {isOpen && (
        <Modal>
          <ModalHeader>
            <ModalTitle>주문 취소</ModalTitle>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
          </ModalHeader>
          <ModalContent>
            <Section>
              <OptionGroup>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option1"
                    name="cancelReason"
                    value="상품이 마음에 들지 않음"
                    checked={selectedReason === "상품이 마음에 들지 않음"}
                    onChange={() => setSelectedReason("상품이 마음에 들지 않음")}
                  />
                  <RadioLabel htmlFor="option1">상품이 마음에 들지 않음</RadioLabel>
                </Option>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option2"
                    name="cancelReason"
                    value="옵션을 잘못 선택함"
                    checked={selectedReason === "옵션을 잘못 선택함"}
                    onChange={() => setSelectedReason("옵션을 잘못 선택함")}
                  />
                  <RadioLabel htmlFor="option2">옵션을 잘못 선택함</RadioLabel>
                </Option>
              </OptionGroup>
            </Section>
            <Section>
              <OptionGroup>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option3"
                    name="cancelReason"
                    value="상품의 구성품 / 부속품이 들어있지 않음"
                    checked={selectedReason === "상품의 구성품 / 부속품이 들어있지 않음"}
                    onChange={() => setSelectedReason("상품의 구성품 / 부속품이 들어있지 않음")}
                  />
                  <RadioLabel htmlFor="option3">상품의 구성품 / 부속품이 들어있지 않음</RadioLabel>
                </Option>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option4"
                    name="cancelReason"
                    value="상품이 설명과 다름"
                    checked={selectedReason === "상품이 설명과 다름"}
                    onChange={() => setSelectedReason("상품이 설명과 다름")}
                  />
                  <RadioLabel htmlFor="option4">상품이 설명과 다름</RadioLabel>
                </Option>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option5"
                    name="cancelReason"
                    value="상품이 파손되어 배송됨"
                    checked={selectedReason === "상품이 파손되어 배송됨"}
                    onChange={() => setSelectedReason("상품이 파손되어 배송됨")}
                  />
                  <RadioLabel htmlFor="option5">상품이 파손되어 배송됨</RadioLabel>
                </Option>
                <Option>
                  <RadioInput
                    type="radio"
                    id="option6"
                    name="cancelReason"
                    value="기타"
                    checked={selectedReason === "기타"}
                    onChange={() => setSelectedReason("기타")}
                  />
                  <RadioLabel htmlFor="option6">기타</RadioLabel>
                </Option>
              </OptionGroup>
            </Section>
          </ModalContent>
        </Modal>
      )}

    
    
    </Container>
    
  );
}

export default ManageOrderUser;
