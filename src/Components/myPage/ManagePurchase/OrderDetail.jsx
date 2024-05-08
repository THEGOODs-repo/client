import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Select, { components } from "react-select";
import { CheckBox } from "../../Global/CustomBox";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DeliveryAddressModal from "./DeliveryAddressModal";
import RefundChangeModal from "./RefundChangeModal";

const OrderDetailWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 870px;
  border: 3px solid rgba(0, 0, 0, 0.05);
  padding: 3px 55px 0 47px;
  flex-shrink: 2;
  overflow-y: auto;
  font-family: "Noto Sans KR";
  box-sizing: border-box;
`;

const HeaderText = styled.div`
  font-size: 26px;
  margin: 36px 0 10px 0;
  padding: 0;
  font-weight: bold;
`;

const ItemWrapper = styled.div`
  width: 783px;
  padding: 0;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemImg = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 5px;
  background: center/cover;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  margin: 0 0 0 24px;
  font-size: 16px;
`;

const ItemButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 auto;
`;

const ItemButton = styled.div`
  width: 83px;
  height: 35px;
  border: 1px solid #9c9c9c;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5.5px 0;
`;

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 783px;
  margin: 20px 0 0 0;
  padding: 34px 64px 21px 64px;
  border: 1px solid #9c9c9c;
  border-radius: 10px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const ProgressCircle = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background: ${(props) => (props.$done ? `black` : `rgba(156,156,156,0.5)`)};
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  margin: 0 0 7px 0;
`;

const ProgressHr = styled.div`
  background: ${(props) => (props.$done ? `black` : `rgba(156,156,156,0.5)`)};
  height: 1px;
  border: 0;
  width: 110px;
  margin: auto 0;
`;

const ProgressTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 99%;
`;

const ProgressText = styled.div`
  width: 49px;
  text-align: center;
  color: ${(props) => (props.$done ? `black` : `#9c9c9c`)};
`;

const Table = styled.table`
  width: 783px;
  border: 1px solid #9c9c9c;
  margin: 20px 0 0 0;
  padding: 12px 26px 12px 31px;
  border-radius: 10px;
`;

const TableRow = styled.tr`
  width: ${(props) => props.$width};
  margin: 0 0 0 0;
  line-height: ${(props) => (props.$title ? `2.4` : `2`)};
  padding: 0;
  font-size: ${(props) => (props.$title ? `${18 / 19.2}vw` : `${16 / 19.2}vw`)};
  font-weight: ${(props) => (props.$title ? "bold" : "")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TableCell = styled.td`
  width: ${(props) => props.$width};
  font-size: ${(props) => (props.$font ? `${props.$font / 19.2}vw` : `100%`)};
  padding: 0;
  color: ${(props) => (props.$color ? `${props.$color}` : `#000000`)};
`;

const TableHr = styled.tr`
  background: rgba(156, 156, 156, 0.5);
  height: 1px;
  border: 0;
  margin: 16px 0 16px 0;
  padding: 16px 0;

  td {
    height: 1px;
    padding: 0;
  }
`;

const WarningText = styled.div`
  width: 97.5%;
  padding: 20px 0 20px 22px;
  margin: 20px 0;
  background: rgba(156, 156, 156, 0.15);
  border-radius: 10px;
`;

const CancelWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(32, 33, 35, 0.5);
  display: ${(e) => (e.$display ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const Cancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  padding: ${47 / 19.2}vw ${46 / 19.2}vw ${25 / 19.2}vw ${68 / 19.2}vw;
  width: ${800 / 19.2}vw;
  border-radius: ${5 / 19.2}vw;
  background: #f9f9f9;

  /* box */
  box-shadow: 0px 0px ${10 / 19.2}vw ${1 / 19.2}vw rgba(0, 0, 0, 0.25);
`;

const CancelTitleWrapper = styled.div`
  margin: 0 0 ${27 / 19.2}vw 0;
  padding: 0;
  font-size: ${28 / 19.2}vw;
  color: #000;
`;

const CancelTextWrapper = styled.div`
  padding: 0;
  margin: ${10 / 19.2}vw 0 0 0;
  font-size: ${20 / 19.2}vw;
  width: ${(props) => props.$width || `${786 / 19.2}vw`};
  color: #000;
  text-align: left;
`;

const SelectionLabel = styled.label`
  position: relative;
  display: flex;
  align-items: flex-start;
  user-select: none;
  padding: 0;

  &:before {
    content: "";
    height: ${23 / 19.2}vw;
    width: ${23 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: 50%;
    background-size: ${11 / 19.2}vw ${8 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
  }

  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: ${23 / 19.2}vw;
    width: ${23 / 19.2}vw;
    border: ${1 / 19.2}vw solid transparent;
    border-radius: 50%;
    background-size: ${11 / 19.2}vw ${8 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #f0c920;
    transition: opacity 0.1s;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%23FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>');
  }
`;

const SelectionInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  transition: opacity 1s ease; // 추가된 부분

  &:checked + ${SelectionLabel} {
    &:after {
      opacity: 1;
      transition: opacity 0.1s;
    }
  }
`;

const SelectionDiv = styled.div`
  margin: 0 0 0 ${9 / 19.2}vw;
  font-size: ${18 / 19.2}vw;
  white-space: pre-line;
  text-align: start;
  color: #202123;
`;

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: `${1 / 19.2}vw solid rgba(156,156,156,0.8)`,
    borderRadius: `${5 / 19.2}vw`,
    boxShadow: "none",
    fontSize: `${18 / 19.2}vw`,
    padding: 0,
    width: `${786 / 19.2}vw`,
    height: `${59 / 19.2}vw`,
    zIndex: 0,
    backgroundColor: "transparent",
    minHeight: `${59 / 19.2}vw`,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: null,
    color: null,
    ":hover": null,
    ":active": null,
    padding: `${5 / 19.2}vw 0`,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#52555B",
  }),
  container: (provided) => ({
    ...provided,
    width: `${786 / 19.2}vw`,
    margin: `${10 / 19.2}vw ${14 / 19.2}vw ${10 / 19.2}vw ${10 / 19.2}vw`,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: `${18 / 19.2}vw 0 ${20 / 19.2}vw ${21 / 19.2}vw`,
    fontSize: `${18 / 19.2}vw`,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    border: "none",
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
    fontSize: `${16 / 19.2}vw`,
    zIndex: 2,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: `${29 / 19.2}vw 0 ${27 / 19.2}vw ${37 / 19.2}vw`,
  }),
  groupHeading: (provided, state) => ({
    ...provided,
    fontSize: `${18 / 19.2}vw`,
    margin: `${10 / 19.2}vw 0`,
    padding: 0,
    color: "black",
  }),
  group: (provided, state) => ({
    ...provided,
    padding: 0,
  }),
};

const { DropdownIndicator } = components;

const CustomDropdownIndicator = (props) => {
  return (
    <DropdownIndicator {...props}>
      <svg
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: `${26 / 19.2}vw`, margin: `0 ${24 / 19.2}vw 0 0` }}
      >
        <path
          d="M9.75 5L17.3333 12L9.75 19"
          stroke="#9C9C9C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </DropdownIndicator>
  );
};

const CancelReasonInput = styled.input`
  border: ${1 / 19.2}vw solid rgba(156, 156, 156, 0.8);
  border-radius: ${5 / 19.2}vw;
  font-size: ${18 / 19.2}vw;
  width: ${786 / 19.2}vw;
  height: ${252 / 19.2}vw;
  padding: ${20 / 19.2}vw 0 ${20 / 19.2}vw ${21 / 19.2}vw;
  text-align: left;
  vertical-align: top;
  background: transparent;
  box-sizing: border-box;
  display: inline-block;
  margin: 0 0 ${20 / 19.2}vw 0;
`;

const RefundWrapper = styled.div`
  display: flex;
  width: ${786 / 19.2}vw;
  flex-wrap: wrap;
  font-size: ${18 / 19.2}vw;
  align-items: center;
`;

const RefundInputWrapper = styled.input`
  border: ${1 / 19.2}vw solid rgba(156, 156, 156, 0.8);
  border-radius: ${5 / 19.2}vw;
  font-size: ${18 / 19.2}vw;
  width: ${(props) => props.$width};
  height: ${48 / 19.2}vw;
  padding: 0 0 0 ${13 / 19.2}vw;
  margin: ${15 / 19.2}vw auto 0 auto;
  text-align: left;
  vertical-align: top;
  background: transparent;
  box-sizing: border-box;
  display: inline-block;
`;

const CustomOption = (props) => (
  <components.Option {...props}>
    <SelectionInput
      type="radio"
      id={props.value}
      name="CancelReason"
      checked={props.isSelected}
    />
    <SelectionLabel htmlFor={props.value}>
      <SelectionDiv>{props.label}</SelectionDiv>
    </SelectionLabel>
  </components.Option>
);

const CancelButton = styled.div`
  display: flex;
  width: ${122 / 19.2}vw;
  height: ${50 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  background: #f0c920;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  margin: ${22 / 19.2}vw 0 0 0;
  &.gray {
    background: rgba(156, 156, 156, 0.3);
    color: #9c9c9c;
  }
  &.white {
    border: ${1 / 19.2}vw solid rgba(156, 156, 156, 0.5);
    opacity: 0.8;
    background: #f9f9f9;
    color: #888;
  }
`;

const OrderStatusEnum = {
  PAY_PREV: "PAY_PREV",
  PAY_COMP: "PAY_COMP",
  DEL_PREP: "DEL_PREP",
  DEL_START: "DEL_START",
  DEL_COMP: "DEL_COMP",
  CONFIRM: "CONFIRM",
  CANCEL: "CANCEL",
  REFUND_ONGOING: "REFUND_ONGOING",
  REFUND_COMP: "REFUND_COMP",
};

const DeliveryTypeEnum = {
  택배: "PO",
};

const OrderDetail = () => {
  const token = useSelector((state) => state.login.token);
  const param = useParams();
  const [CancelByCustomer, SetCancelByCustomer] = useState(false);
  const [CancelBySeller, SetCancelBySeller] = useState(false);
  const [CancelReason, SetCancelReason] = useState("use");
  const [CancelModal, SetCancelModal] = useState(false);
  const [RefundModal, SetRefundModal] = useState(false);
  const [DisplayDeliveryAddressModal, SetDisplayDeliveryAddressModal] =
    useState(false);
  const [DisplayRefundModal, SetDisplayRefundModal] = useState(false);
  const [CancelRefundSave, SetCancelRefundSave] = useState(false);
  const OrderItemId = param.OrderItemId;
  const [ImgUrl, SetImgUrl] = useState("");
  const [ItemName, SetItemName] = useState("");
  const [OptionString, SetOptionString] = useState("");
  const [OrderStatus, SetOrderStatus] = useState("");
  const [BuyerInfoName, SetBuyerInfoName] = useState("");
  const [BuyerInfoPhone, SetBuyerInfoPhone] = useState("");
  const [OrderDateTime, SetOrderDateTime] = useState(new Date());
  const [OrderDeliveryFee, SetOrderDeliveryFee] = useState("");
  const [OrderItemPrice, SetOrderItemPrice] = useState("");
  const [OrderTotalPrice, SetOrderTotalPrice] = useState("");
  const [OrderDetailArray, SetOrderDetailArray] = useState([]);
  const [Depositor, SetDepositor] = useState("");
  const [DepositAmount, SetDepositAmount] = useState("");
  const [DepositDate, SetDepositDate] = useState(new Date());
  const [DeliveryType, SetDeliveryType] = useState("");
  const [AddressName, SetAddressName] = useState("");
  const [AddressPhone, SetAddressPhone] = useState("");
  const [ZipCode, SetZipCode] = useState("");
  const [Address, SetAddress] = useState("");
  const [DeliveryMemo, SetDeliveryMemo] = useState("");
  const [DeliveryCompany, SetDeliveryCompany] = useState(null);
  const [DeliveryNumber, SetDeliveryNumber] = useState(null);
  const [RefundOwner, SetRefundOwner] = useState("");
  const [RefundBank, SetRefundBank] = useState("");
  const [RefundAccount, SetRefundAccount] = useState("");

  const options = [
    {
      label: "단순 변심",
      options: [
        { value: "hate", label: "상품이 마음에 들지 않음" },
        { value: "wrongseleciton", label: "옵션을 잘못 선택함" },
      ],
    },
    {
      label: "상품 문제",
      options: [
        {
          value: "missingitem",
          label: "상품의 구성품 / 부속품이 들어있지 않음",
        },
        { value: "nomatch", label: "상품이 설명과 다름" },
        { value: "broken", label: "상품이 파손되어 배송됨" },
        { value: "defect", label: "상품 결함/기능에 이상이 있음" },
      ],
    },
    {
      label: "배송 문제",
      options: [
        { value: "missing", label: "주문한 상품 중 일부 상품이 배송되지 않음" },
        { value: "wrongdeliver", label: "다른 상품이 배송됨" },
      ],
    },
    { label: "기타", options: [{ value: "etc", label: "사유 직접 작성" }] },
  ];

  useEffect(() => {
    if (OrderItemId === null) console.log("error");
    else {
      const fetchData = async () => {
        try {
          const endpoint = `${process.env.REACT_APP_BACKEND}/api/order/${OrderItemId}`;
          const headers =
            token !== null
              ? {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                }
              : {
                  headers: {
                    "Content-Type": "application/json",
                  },
                };
          const response = await axios.get(endpoint, headers);
          if (
            response.data.isSuccess === true &&
            param.OrderItemId === OrderItemId
          ) {
            SetImgUrl(response.data.result.imgUrl);
            SetItemName(response.data.result.itemName);
            SetOptionString(response.data.result.optionString);
            SetOrderStatus(response.data.result.orderStatus);
            SetBuyerInfoName(response.data.result.buyerInfoDTO.name);
            SetBuyerInfoPhone(response.data.result.buyerInfoDTO.phone);
            SetOrderDateTime(
              new Date(response.data.result.orderItemInfoDTO.orderDateTime),
            );
            SetOrderDeliveryFee(
              response.data.result.orderItemInfoDTO.deliveryFee,
            );
            SetOrderTotalPrice(
              response.data.result.orderItemInfoDTO.totalPrice,
            );
            SetOrderDetailArray(() => [
              ...response.data.result.orderItemInfoDTO.orderDetailInfoDTOList,
            ]);
            SetOrderItemPrice(response.data.result.orderItemInfoDTO.itemPrice);
            SetDepositor(response.data.result.depositInfoDTO.depositor);
            SetDepositAmount(response.data.result.depositInfoDTO.depositAmount);
            SetDepositDate(response.data.result.depositInfoDTO.depositDate);
            SetDeliveryType(response.data.result.addressInfoDTO.deliveryType);
            SetAddressName(response.data.result.addressInfoDTO.name);
            SetAddressPhone(response.data.result.addressInfoDTO.phone);
            SetZipCode(response.data.result.addressInfoDTO.zipcode);
            SetAddress(response.data.result.addressInfoDTO.address);
            SetDeliveryMemo(response.data.result.addressInfoDTO.deliveryMemo);
            SetDeliveryCompany(
              response.data.result.deliveryInfoDTO.deliveryComp,
            );
            SetDeliveryNumber(response.data.result.deliveryInfoDTO.deliveryNum);
            SetRefundOwner(response.data.result.refundInfoDTO.refundOwner);
            SetRefundBank(response.data.result.refundInfoDTO.refundBank);
            SetRefundAccount(response.data.result.refundInfoDTO.refundAccount);
          }
          console.log(response);
        } catch (error) {
          console.error("Error during POST request:", error);
        }
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DisplayDeliveryAddressModal, DisplayRefundModal]);

  return (
    <OrderDetailWrapper>
      <DeliveryAddressModal
        isOpen={DisplayDeliveryAddressModal}
        onClose={() => SetDisplayDeliveryAddressModal(false)}
        OrderItemId={OrderItemId}
      />
      <RefundChangeModal
        isOpen={DisplayRefundModal}
        onClose={() => SetDisplayRefundModal(false)}
        OrderItemId={OrderItemId}
      />
      {(CancelModal || RefundModal) && (
        <CancelWrapper $display={true}>
          <Cancel>
            <CancelTitleWrapper>주문 취소</CancelTitleWrapper>
            <CancelTextWrapper>취소 사유 선택</CancelTextWrapper>
            <Select
              options={options}
              components={{
                Option: CustomOption,
                DropdownIndicator: CustomDropdownIndicator, // Replace with your actual indicator component
                IndicatorSeparator: () => null,
              }}
              onChange={(e) => {
                SetCancelReason(e.value);
              }}
              value={options
                .reduce((acc, group) => acc.concat(group.options), [])
                .find((option) => option.value === CancelReason)}
              styles={customStyles}
              isSearchable={false}
              placeholder="취소사유 선택"
            />
            {CancelReason === "etc" && <CancelReasonInput />}
            {RefundModal && (
              <RefundWrapper>
                <CancelTextWrapper $width="33.9vw">
                  환불계좌 정보 (제작무산 등의 경우)
                </CancelTextWrapper>
                <CheckBox
                  index="CancelRefundSave"
                  state={CancelRefundSave}
                  onChange={() =>
                    SetCancelRefundSave((CancelRefundSave) => !CancelRefundSave)
                  }
                  label="자동 불러오기"
                />
                <RefundInputWrapper $width="23%" placeholder="은행명" />
                <RefundInputWrapper $width="51%" placeholder="계좌번호" />
                <RefundInputWrapper $width="23%" placeholder="예금주명" />
              </RefundWrapper>
            )}
            <CancelButton>주문 취소</CancelButton>
          </Cancel>
        </CancelWrapper>
      )}
      <HeaderText>주문 내역 상세</HeaderText>
      {OrderStatus === OrderStatusEnum.PAY_PREV && (
        <Table>
          <TableRow>
            <TableCell $width="12.5%">입금처</TableCell>
            <TableCell $width="87.5%">농협은행 1234567890123 더*즈</TableCell>
          </TableRow>
          <TableRow>
            <TableCell $width="12.5%">입금 금액</TableCell>
            <TableCell $width="87.5%">999,999원</TableCell>
          </TableRow>
        </Table>
      )}
      <ItemWrapper>
        <ItemImg style={{ background: `url(${ImgUrl}) center/cover` }} />
        <ItemInfo>
          <span style={{ fontSize: `${16 / 19.2}vw` }}>{ItemName}</span>
          {OptionString}
        </ItemInfo>
        <ItemButtonWrapper>
          <ItemButton>문의하기</ItemButton>
          <ItemButton
            onClick={() => SetCancelModal((CancelModal) => !CancelModal)}
          >
            주문 취소
          </ItemButton>
        </ItemButtonWrapper>
      </ItemWrapper>
      {!CancelByCustomer &&
        !CancelBySeller &&
        (OrderStatus === OrderStatusEnum.PAY_PREV ||
          OrderStatus === OrderStatusEnum.PAY_COMP ||
          OrderStatus === OrderStatusEnum.DEL_PREP ||
          OrderStatus === OrderStatusEnum.DEL_START ||
          OrderStatus === OrderStatusEnum.DEL_COMP) && (
          <ProgressWrapper>
            <ProgressCircle
              $done={
                OrderStatus === OrderStatusEnum.PAY_PREV ||
                OrderStatus === OrderStatusEnum.PAY_COMP ||
                OrderStatus === OrderStatusEnum.DEL_PREP ||
                OrderStatus === OrderStatusEnum.DEL_START ||
                OrderStatus === OrderStatusEnum.DEL_COMP
              } // ENUM으로 상태 관리할 방법이 안 떠올라서 하드코딩했습니다. 추후 수정예정입니다.
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: `${24 / 19.2}vw` }}
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ProgressCircle>
            <ProgressHr
              $done={
                OrderStatus === OrderStatusEnum.PAY_COMP ||
                OrderStatus === OrderStatusEnum.DEL_PREP ||
                OrderStatus === OrderStatusEnum.DEL_START ||
                OrderStatus === OrderStatusEnum.DEL_COMP
              }
            />
            <ProgressCircle
              $done={
                OrderStatus === OrderStatusEnum.PAY_COMP ||
                OrderStatus === OrderStatusEnum.DEL_PREP ||
                OrderStatus === OrderStatusEnum.DEL_START ||
                OrderStatus === OrderStatusEnum.DEL_COMP
              }
            >
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: `${24 / 19.2}vw` }}
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ProgressCircle>
            <ProgressHr
              $done={
                OrderStatus === OrderStatusEnum.DEL_PREP ||
                OrderStatus === OrderStatusEnum.DEL_START ||
                OrderStatus === OrderStatusEnum.DEL_COMP
              }
            />
            <ProgressCircle
              $done={
                OrderStatus === OrderStatusEnum.DEL_PREP ||
                OrderStatus === OrderStatusEnum.DEL_START ||
                OrderStatus === OrderStatusEnum.DEL_COMP
              }
            >
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: `${24 / 19.2}vw` }}
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ProgressCircle>
            <ProgressHr
              $done={
                OrderStatus === OrderStatusEnum.DEL_START ||
                OrderStatus === OrderStatusEnum.DEL_COMP
              }
            />
            <ProgressCircle
              $done={
                OrderStatus === OrderStatusEnum.DEL_START ||
                OrderStatus === OrderStatusEnum.DEL_COMP
              }
            >
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: `${24 / 19.2}vw` }}
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ProgressCircle>
            <ProgressHr $done={OrderStatus === OrderStatusEnum.DEL_COMP} />
            <ProgressCircle $done={OrderStatus === OrderStatusEnum.DEL_COMP}>
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: `${24 / 19.2}vw` }}
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ProgressCircle>
            <ProgressTextWrapper>
              <ProgressText
                $done={
                  OrderStatus === OrderStatusEnum.PAY_PREV ||
                  OrderStatus === OrderStatusEnum.PAY_COMP ||
                  OrderStatus === OrderStatusEnum.DEL_PREP ||
                  OrderStatus === OrderStatusEnum.DEL_START ||
                  OrderStatus === OrderStatusEnum.DEL_COMP
                }
              >
                결제전
              </ProgressText>
              <ProgressText
                $done={
                  OrderStatus === OrderStatusEnum.PAY_COMP ||
                  OrderStatus === OrderStatusEnum.DEL_PREP ||
                  OrderStatus === OrderStatusEnum.DEL_START ||
                  OrderStatus === OrderStatusEnum.DEL_COMP
                }
              >
                결제완료
              </ProgressText>
              <ProgressText
                $done={
                  OrderStatus === OrderStatusEnum.DEL_PREP ||
                  OrderStatus === OrderStatusEnum.DEL_START ||
                  OrderStatus === OrderStatusEnum.DEL_COMP
                }
              >
                배송준비
              </ProgressText>
              <ProgressText
                $done={
                  OrderStatus === OrderStatusEnum.DEL_START ||
                  OrderStatus === OrderStatusEnum.DEL_COMP
                }
              >
                배송시작
              </ProgressText>
              <ProgressText $done={OrderStatus === OrderStatusEnum.DEL_COMP}>
                배송완료
              </ProgressText>
            </ProgressTextWrapper>
          </ProgressWrapper>
        )}
      {OrderStatus === OrderStatusEnum.CONFIRM && (
        <HeaderText>구매확정</HeaderText>
      )}
      {CancelByCustomer && <HeaderText>고객님 주문취소</HeaderText>}
      {CancelBySeller && <HeaderText>사장님 주문취소</HeaderText>}
      {(CancelByCustomer || CancelBySeller) && (
        <Table>
          <TableRow $title>
            <TableCell>취소 사유</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>단순변심</TableCell>
          </TableRow>
        </Table>
      )}
      <Table>
        <TableRow $title>
          <TableCell>주문자 정보</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>주문자명</TableCell>
          <TableCell>{BuyerInfoName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>주문자 연락처</TableCell>
          <TableCell>
            {[
              BuyerInfoPhone.substring(0, 3),
              BuyerInfoPhone.substring(3, 7),
              BuyerInfoPhone.substring(7, 11),
            ].join("-")}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>주문 번호</TableCell>
          <TableCell>{OrderItemId}</TableCell>
        </TableRow>
      </Table>
      <Table>
        <TableRow $title>
          <TableCell $width="70%">주문 정보</TableCell>
          <TableCell $color="gray" $font="12" style={{ fontWeight: "bold" }}>
            폼 제출{" "}
            {OrderDateTime instanceof Date &&
              OrderDateTime.toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
              })}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{ItemName}</TableCell>
          <TableCell>
            {Array.isArray(OrderDetailArray) &&
              OrderDetailArray.length > 0 &&
              !OrderDetailArray[0].hasOwnProperty("optionName") &&
              `${OrderDetailArray[0].amount}개 / ${OrderDetailArray[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}
          </TableCell>
        </TableRow>
        {Array.isArray(OrderDetailArray) &&
          OrderDetailArray.length > 0 &&
          OrderDetailArray[0].hasOwnProperty("optionName") && (
            <TableHr>
              <td />
            </TableHr>
          )}
        {Array.isArray(OrderDetailArray) &&
          OrderDetailArray.length > 0 &&
          OrderDetailArray[0].hasOwnProperty("optionName") &&
          OrderDetailArray.map((data, index) => (
            <TableRow>
              <TableCell>
                {index + 1}번 {data.optionName}
              </TableCell>
              <TableCell>
                {data.amount}개 /{" "}
                {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </TableCell>
            </TableRow>
          ))}
        <TableHr>
          <td />
        </TableHr>
        <TableRow>
          <TableCell>상품 가격</TableCell>
          <TableCell>
            {OrderItemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>배송비</TableCell>
          <TableCell>
            {OrderDeliveryFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>쿠폰 할인</TableCell>
          <TableCell>0원</TableCell>
        </TableRow>
        <TableHr>
          <td />
        </TableHr>
        <TableRow>
          <TableCell>총 주문 금액</TableCell>
          <TableCell $color="#F0C920">
            {OrderTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </TableCell>
        </TableRow>
      </Table>
      {DepositDate !== null && (
        <Table>
          <TableRow $title>
            <TableCell>나의 입금 정보</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>입금자명</TableCell>
            <TableCell>{Depositor}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>입금액</TableCell>
            <TableCell>
              {DepositAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>입금 날짜</TableCell>
            <TableCell>
              {DepositDate instanceof Date &&
                DepositDate.toLocaleString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
            </TableCell>
          </TableRow>
        </Table>
      )}
      <Table>
        {OrderStatus === OrderStatusEnum.PAY_PREV ||
        OrderStatus === OrderStatusEnum.PAY_COMP ||
        OrderStatus === OrderStatusEnum.DEL_PREP ? (
          <TableRow $title>
            <TableCell $width="11.6%">배송 정보</TableCell>
            <TableCell $width="81.6%" $font="12" $color="gray">
              판매자와 상의 후 배송정보를 수정해주세요.
            </TableCell>
            <TableCell
              $color="blue"
              $font="14"
              onClick={() => SetDisplayDeliveryAddressModal(true)}
            >
              편집
            </TableCell>{" "}
          </TableRow>
        ) : (
          <TableRow $title>
            <TableCell $width="11.6%">배송 정보</TableCell>
          </TableRow>
        )}
        <TableRow>
          <TableCell>배송 방법</TableCell>
          <TableCell>택배</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>받는 사람</TableCell>
          <TableCell>{AddressName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>연락처</TableCell>
          <TableCell>
            {" "}
            {[
              AddressPhone.substring(0, 3),
              AddressPhone.substring(3, 7),
              AddressPhone.substring(7, 11),
            ].join("-")}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>주소</TableCell>
          <TableCell>
            ({ZipCode}) {Address}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>배송 메모</TableCell>
          <TableCell>{DeliveryMemo}</TableCell>
        </TableRow>
      </Table>
      <Table>
        <TableRow $title>
          <TableCell>송장 정보</TableCell>
        </TableRow>
        <TableRow>
          <TableCell $width="22%">송장번호</TableCell>
          <TableCell $width="78%" $color="gray">
            {DeliveryNumber !== null
              ? DeliveryNumber
              : "아직 송장번호가 입력되지 않았어요."}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell $width="22%">택배사</TableCell>
          <TableCell $width="78%" $color="gray">
            {DeliveryCompany !== null
              ? DeliveryCompany
              : "아직 송장번호가 입력되지 않았어요."}
          </TableCell>
        </TableRow>
      </Table>
      <Table>
        <TableRow $title>
          <TableCell>환불 계좌 정보</TableCell>
          <TableCell
            $font="14"
            $color="blue"
            onClick={() => SetDisplayRefundModal(true)}
          >
            편집
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell $width="22%">예금주</TableCell>
          <TableCell $width="78%">{RefundOwner}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell $width="22%">은행명</TableCell>
          <TableCell $width="78%">{RefundBank}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell $width="22%">계좌번호</TableCell>
          <TableCell $width="78%">{RefundAccount}</TableCell>
        </TableRow>
      </Table>
      <WarningText>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: `${16 / 19.2}vw`,
            alignItems: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: `${24 / 19.2}vw`, margin: `0 ${6 / 19.2}vw 0 0` }}
          >
            <path
              d="M13 16H12V12H11M12 8H12.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
              stroke="#18181B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          꼭 확인해주세요!
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: `${14 / 19.2}vw`,
            alignItems: "center",
            lineHeight: 1.6,
          }}
        >
          <span style={{ margin: `0 ${10 / 19.2}vw 0 ${12 / 19.2}vw` }}>
            &#8226;
          </span>
          입금확인/배송/환불의 모든 문의는 판매자가 메시지를 통해 답변해 드려요.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: `${14 / 19.2}vw`,
            alignItems: "center",
            lineHeight: 1.6,
          }}
        >
          <span style={{ margin: `0 ${10 / 19.2}vw 0 ${12 / 19.2}vw` }}>
            &#8226;
          </span>
          거래종료를 하면 판매자가 주문자 정보를 확인할 수 있어요. 꼭 실물 수령
          후 눌러주세요.
        </div>
      </WarningText>
    </OrderDetailWrapper>
  );
};

export default OrderDetail;
