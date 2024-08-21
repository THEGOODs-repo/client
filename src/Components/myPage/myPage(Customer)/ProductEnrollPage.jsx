import React, { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  min-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 14px;
  color: #333;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const OptionInput = styled.input`
  margin-right: 10px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  margin-left: 10px;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  color: #fff;
  background-color: ${(props) => (props.primary ? "#ffcc00" : "#f5f5f5")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${(props) => (props.primary ? "0" : "20px")};
`;

export const ImageUploadWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const UploadButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 24px;
  cursor: pointer;
`;

export const SelectWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextAreaWrapper = styled.div`
  margin-bottom: 20px;
`;


export const IconLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #333;

  span {
    color: #f00;
    margin-left: 4px;
  }
`;


function ProductEnroll() {
  const [tag, setTag] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [optionEnabled, setOptionEnabled] = useState(false);
  const [saleStartDate, setSaleStartDate] = useState("");
  const [saleEndDate, setSaleEndDate] = useState("");
  const [deliveryStartDays, setDeliveryStartDays] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleTagChange = (e) => setTag(e.target.value);
  const handleProductNameChange = (e) => setProductName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleStockChange = (e) => setStock(e.target.value);
  const handleOptionChange = () => setOptionEnabled(!optionEnabled);
  const handleSaleStartDateChange = (e) => setSaleStartDate(e.target.value);
  const handleSaleEndDateChange = (e) => setSaleEndDate(e.target.value);
  const handleDeliveryStartDaysChange = (e) => setDeliveryStartDays(e.target.value);

  return (
    <Container>
      <Title>상품 등록</Title>
            <ImageUploadWrapper>
        <UploadButton>썸네일 이미지 등록</UploadButton>
      </ImageUploadWrapper>

      <SelectWrapper>
        <IconLabel>📂 카테고리 등록</IconLabel>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">카테고리를 선택하세요.</option>
          <option value="category1">카테고리 1</option>
          <option value="category2">카테고리 2</option>
        </Select>
      </SelectWrapper>

      <TextAreaWrapper>
        <IconLabel>📝 상세 설명 <span>*</span></IconLabel>
        <TextArea
          placeholder="상세 설명을 입력하세요."
          value={description}
          onChange={handleDescriptionChange}
        />
      </TextAreaWrapper>

      <InputWrapper>
        <Label>🔖 태그 입력 (0/10)</Label>
        <Input
          type="text"
          placeholder="태그를 최소 3개 이상 입력해야 합니다."
          value={tag}
          onChange={handleTagChange}
        />
        <SearchButton>🔍</SearchButton>
      </InputWrapper>

      <Section>
        <Label>상품정보 입력 *</Label>
        <InputWrapper>
          <Input
            type="text"
            placeholder="상품명을 입력해 주세요."
            value={productName}
            onChange={handleProductNameChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="가격을 입력해 주세요."
            value={price}
            onChange={handlePriceChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="최대 100,000개"
            value={stock}
            onChange={handleStockChange}
          />
        </InputWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={optionEnabled}
            onChange={handleOptionChange}
          />
          <CheckboxLabel>옵션 설정</CheckboxLabel>
        </CheckboxWrapper>
        <Button>상품 등록</Button>
      </Section>

      <Section>
        <Label>🗓️ 판매기간</Label>
        <InputWrapper>
          <Label>판매 시작일</Label>
          <Input
            type="datetime-local"
            value={saleStartDate}
            onChange={handleSaleStartDateChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>판매 종료일</Label>
          <Input
            type="datetime-local"
            value={saleEndDate}
            onChange={handleSaleEndDateChange}
          />
        </InputWrapper>
        <CheckboxWrapper>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>상시 판매</CheckboxLabel>
        </CheckboxWrapper>
      </Section>

      <Section>
        <Label>📦 배송 설정</Label>
        <InputWrapper>
          <Input
            type="text"
            placeholder="배송방법"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="배송비"
          />
        </InputWrapper>
        <Button>배송방법 등록</Button>
      </Section>

      <Section>
        <Label>🚚 배송 예정일 *</Label>
        <InputWrapper>
          <Input
            type="number"
            placeholder="주문일로부터 0일 이내 배송이 시작됩니다."
            value={deliveryStartDays}
            onChange={handleDeliveryStartDaysChange}
          />
        </InputWrapper>
        <CheckboxWrapper>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>더 굿즈 판매방송 동의</CheckboxLabel>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>판매자 준수사항 동의</CheckboxLabel>
        </CheckboxWrapper>
        <Button>내용보기</Button>
      </Section>

      <Button primary>상품 등록</Button>
    </Container>
  );
}

export default ProductEnroll;
