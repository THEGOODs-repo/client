import React from "react";
import styled from "styled-components";


const Container = styled.div`
  min-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  padding: 20px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  height : 1420px;
`;

const Nav = styled.div`
    display : flex;
    justify-content : space-between;
    margin-right : 60px;
    align-items : center;

`;
const Form = styled.form`
    display : flex;
    flex-direction : column;
`
const Label = styled.label`
  font-size : 16px;
  font-weight : bold;
  margin-bottom : 5px;
  display : block;

`
const Input = styled.input`
 width : 90%;
 padding : 15px;
 font-size : 14px;
 border : 1px solid #ccc;
 border-radius : 4px;
 margin-bottom : 5px;
 margin-top : 7px;
`
const Note = styled.p`
    font-size : 12px;
    color : #666;
    margin-bottom : 20px;
`
export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Notice = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 15px;
  font-size: 12px;
  margin-bottom: 20px;
  color: #555;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  color: #fff;
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

const FileUploadButton = styled.button`
    width : 331px;
    height : 55px;
    border-radius : 20px;
    background-color : transparent; 
    margin-bottom : 10px;
    margin-top : 5px;
    

`

function EnrollCorperationPage() {
  return (
    <Container>
        <h1>기업 인증</h1>
        <Nav>
            <h3>더 굿즈에 입점을 시작해 봅시다!</h3>
            <span>
                <span style={{ color: "#ffcc00" }}>*</span>
                필수입력
                </span>
        </Nav>
        <Form>
            <Label>
                <span style={{ color: "#ffcc00" }}>*</span>브랜드명 
            </Label>
            <Input type="text" placeholder="BRAND"></Input>
            <Note>영문/한글/숫자 조합하여 2자 이상 20자 이내로 입력해주세요.</Note>

            <Label>
                <span style={{ color: "#ffcc00" }}>*</span>도메인명
            </Label>
            <Input type="text" placeholder="BRAND"></Input>
            <Note>영문/한글/숫자 조합하여 2자 이상 20자 이내로 추후 마이페이지에서 수정이 가능합니다.</Note>
            
        </Form>
                <Nav>
            <h3>더 굿즈에게 당신을 보여주세요!</h3>
            <span>
                <span style={{ color: "#ffcc00" }}>*</span>
                1개 이상 필수 입력
                </span>
        </Nav>
        <Form>
            <Label>
                운영중인 SNS 
            </Label>
            <Input type="text" placeholder="유튜브, 인스타그램, 트위터 URL 등"></Input>
            <Label>
                포트폴리오 첨부
            </Label>
            <FileUploadButton>파일 업로드</FileUploadButton>
                        <Label>
                심사에서 참고할 사이트
            </Label>
            <Input type="text" placeholder="개인 웹사이트, 포트폴리오, 비핸스 URL 등"></Input>
        </Form>
                        <Nav>
            <h3>기업 인증에 성공하면 어디로 연락드릴까요?</h3>
            <span>
                <span style={{ color: "#ffcc00" }}>*</span>
                필수 입력
                </span>
        </Nav>
        <Form>
            <Label>
                이메일
                                <span style={{ color: "#ffcc00" }}>*</span>
                
            </Label>
            <Input type="text" placeholder="이메일 입력"></Input>
                        <Label>
                휴대전화번호
                                <span style={{ color: "#ffcc00" }}>*</span>
                
            </Label>
            <Input type="text" placeholder="휴대전화번호(-없이 숫자만 입력)"></Input>

                    <SectionTitle>
          개인정보 수집 이용 등에 관한 안내사항을 확인해보세요.
        </SectionTitle>

        <CheckboxWrapper>
          <CheckboxLabel>
            <Checkbox type="checkbox" />
            전체 항목에 동의합니다.
          </CheckboxLabel>

          <CheckboxLabel>
            <Checkbox type="checkbox" />
            개인정보 수집 및 이용에 관하여 동의합니다.
          </CheckboxLabel>

          <CheckboxLabel>
            <Checkbox type="checkbox" />
            만 14세 이상입니다.
          </CheckboxLabel>
        </CheckboxWrapper>

        <Notice>
          <strong>꼭 읽어주세요!</strong> <br />
          - 판매하는 콘텐츠의 저작권은 판매 주체인 더 굿즈 기업에게 있으며 사전 접수 신청 시 저작권 소유자 확인을 인증한 것으로 간주함 <br />
          - 저작권 및 타인의 권리를 침해하거나 명예를 훼손하는 이미지, 디자인 등의 게시에 대한 책임은 크리에이터에게 있습니다. <br />
          - 제공된 개인정보는 개인정보 제공자가 동의한 내용 외의 다른 목적으로 활용하지 않으며, 보유 기간 내에 제공된 개인정보의 이용을 제한하고
          철회할 수 있는 권리가 제공자에게 있음.
        </Notice>

        <Button>신청 완료하기</Button>


        </Form>



    </Container>
  );
}

export default EnrollCorperationPage;
