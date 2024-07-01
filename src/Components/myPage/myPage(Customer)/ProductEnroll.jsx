import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: #fff;
`;

const ImageUpload = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: #fff;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: #fff;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #ffd700;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
`;

const ProductRegistration = () => {
  return (
    <Container>
      <Section>
        <ImageUpload>
          <span>이미지 업로드</span>
        </ImageUpload>
      </Section>

      <Section>
        <Label>카테고리 등록</Label>
        <Select>
          <option value="">카테고리를 선택하세요.</option>
        </Select>
      </Section>

      <Section>
        <Label>상세 설명</Label>
        <Textarea rows="4" />
      </Section>

      <Section>
        <Label>태그 입력 (최대 10개)</Label>
        <Input type="text" />
      </Section>

      <Section>
        <Label>상품정보 입력</Label>
        <FlexRow>
          <Input type="text" placeholder="상품명을 입력해 주세요." />
          <Input type="text" placeholder="가격을 입력해 주세요." />
        </FlexRow>
        <Checkbox>
          <input type="checkbox" id="shipping" />
          <label htmlFor="shipping">배송비 100,000원</label>
        </Checkbox>
      </Section>

      <Section>
        <Label>판매 정보 입력</Label>
        <FlexRow>
          <Select>
            <option value="">시작 연도</option>
          </Select>
          <Select>
            <option value="">시작 월</option>
          </Select>
          <Select>
            <option value="">시작 일</option>
          </Select>
        </FlexRow>
        <FlexRow>
          <Select>
            <option value="">종료 연도</option>
          </Select>
          <Select>
            <option value="">종료 월</option>
          </Select>
          <Select>
            <option value="">종료 일</option>
          </Select>
        </FlexRow>
      </Section>

      <Section>
        <Label>배송 방법</Label>
        <Checkbox>
          <input type="radio" id="direct" name="delivery" />
          <label htmlFor="direct">구입자 직접 전달</label>
        </Checkbox>
        <Checkbox>
          <input type="radio" id="startAfter" name="delivery" />
          <label htmlFor="startAfter">이사 확정이 시작됩니다.</label>
        </Checkbox>
      </Section>

      <Section>
        <Label>구매자 주소를 확인해 주세요.</Label>
        <Input type="text" placeholder="주소를 입력해 주세요." />
        <Button>주소 등록</Button>
      </Section>

      <Button>상품 등록</Button>
    </Container>
  );
};

export default ProductRegistration;
