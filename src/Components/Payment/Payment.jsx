import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PhoneChangeModal from "./PhoneChangeModal";
import DeliveryAddressModal from "./DeliveryAddressModal";
import RefundChangeModal from "./RefundChangeModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../img/chevron-right.svg";
import { emptyOrderItems } from "../../redux/orderSlice";
import { fontWeight } from "@mui/system";

const PaymentPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  width: ${1139 / 19.2}vw;
  padding: 0;
  flex-shrink: 2;
  flex-wrap: wrap;
`;

const PaymentTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 84%;
  font-size: ${26 / 19.2}vw;
  font-weight: bold;
  padding: ${40 / 19.2}vw 0 0 0;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto 0 0 0;
  self-align: flex-end;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: ${14 / 19.2}vw;
  color: #9c9c9c;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

const BoldItem = styled(Item)`
  color: #202123;
`;

const Arrow = {
  width: `${24 / 19.2}vw`,
};

const PaymentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 59%;
  margin: ${37 / 19.2}vw auto 0 0;
`;

const PaymentConfirmWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 32.5%;
  margin: ${45 / 19.2}vw 0 0 auto;
  padding: 0 ${28 / 19.2}vw;
  font-size: ${13 / 19.2}vw;
  border: ${1.5 / 19.2}vw solid #9c9c9c;
  border-radius: ${10 / 19.2}vw;
  box-sizing: border-box;
`;

const PaymentTableWrapper = styled.table`
  border-collapse: collapse;
  font-size: ${18 / 19.2}vw;
  text-align: center;
  width: 100%;
  margin: ${30 / 19.2}vw 0 0 0;
`;

const PaymentTableHead = styled.thead`
  text-align: left;
  color: rgba(32, 33, 35);
  padding: 0;
  font-size: ${20 / 19.2}vw;

  tr {
    margin: 0 0 ${9 / 19.2}vw 0;
  }

  th {
    border: none;
    height: ${48 / 19.2}vw;
    width: auto;
    border-bottom: ${1 / 19.2}vw solid rgba(32, 33, 35);
  }

  .change {
    text-align: end;
    color: #307cf7;
    width: ${100 / 19.2}vw;
    font-size: ${14 / 19.2}vw;
    padding: 0 0 0 0;
    cursor: grab;
  }
`;

const PaymentTableBody = styled.tbody`
  text-align: left;
  color: rgba(32, 33, 35);
  margin: 0;
  padding: ${14 / 19.2}vw 0 ${14 / 19.2}vw 0;
  color: rgba(32, 33, 35);
  font-size: ${18 / 19.2}vw;
  ${(e) =>
    !e.$orderitem && `border-bottom: ${1 / 19.2}vw solid rgba(175, 175, 175);`}
  tr {
    height: ${35 / 19.2}vw;
  }

  .title {
    width: 14%;
  }

  .warn {
    font-size: ${16 / 19.2}vw;
    color: rgba(175, 175, 175);
    line-height: 2;
    padding: ${18 / 19.2}vw 0 ${19.5 / 19.2}vw 0;
  }

  .itemtitle {
    padding: ${35 / 19.2}vw 0 ${10 / 19.2}vw 0;
  }

  .optioninfo {
    font-size: ${15 / 19.2}vw;
  }
  .priceinfo {
    text-align: end;
    font-size: ${15 / 19.2}vw;
  }

  ${(e) =>
    e.$orderowner &&
    `td {
    padding: ${24 / 19.2}vw 0 0 0;
    line-height: 0.1;}`}

  ${(e) =>
    e.$deliveryinfo &&
    `td {
      padding: ${38 / 19.2}vw 0 0 0;
      line-height: 0.000001;}
      
    `}

    ${(e) =>
    e.$refundinfo &&
    `td {
      padding: ${25 / 19.2}vw 0 0 0;
      line-height: 0.1;}`}

      ${(e) =>
    e.$payselect &&
    `td {
          padding: ${25 / 19.2}vw 0 0 0;
          line-height: 0.1;}`}

      ${(e) =>
    e.$orderitem &&
    `td {

          line-height: 1.5;
        }`}

  .space {
    width: ${16 / 19.2}vw;
    border-bottom: ${1 / 19.2}vw solid transparent;
  }

  .deliveryprice {
    border-top: ${2 / 19.2}vw solid rgba(175, 175, 175);
  }

  .largeprice {
    text-align: end;
    font-size: ${18 / 19.2}vw;
    font-weight: bold;
  }
`;

const PayButton = styled.div`
  display: flex;
  width: ${316 / 19.2}vw;
  height: ${54 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${3 / 19.2}vw;
  background: #f0c920;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${14 / 19.2}vw;
  padding: 0;
  margin: ${23 / 19.2}vw 0;
`;

const PaymentMethodSelectionLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0;
  margin: 0;

  &:before {
    content: "";
    height: ${24 / 19.2}vw;
    width: ${24 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: 50%; /* Use border-radius to create a circular shape */
    background-size: ${12 / 19.2}vw ${12 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffffff;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="6" fill="%239C9C9C" fill-opacity="0.5"/></svg>');
  }

  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: ${24 / 19.2}vw;
    width: ${24 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: 50%; /* Use border-radius to create a circular shape */
    background-size: ${12 / 19.2}vw ${12 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffffff;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="6" fill="%23F0C920" fill-opacity="1"/></svg>');
  }
`;

const PaymentMethodSelectionInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${PaymentMethodSelectionLabel} {
    &:after {
      opacity: 1;
    }
  }
`;

const PaymentMethodSelectionText = styled.div`
  margin: 0 ${41 / 19.2}vw 0 ${9 / 19.2}vw;
  font-size: ${18 / 19.2}vw;
  color: #9c9c9c;
  flex-shrink: 0;
`;

const PaymentPrivacy = styled.div`
  display: ${(e) => (e.$display ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${17 / 19.2}vw 0 0 0;
  div {
    margin-bottom: ${8 / 19.2}vw;
  }
`;

const PaymentMethodEnum = {
  카카오페이: "kakaopay",
  토스페이: "tosspayments",
  KG이니시스: "html5_inicis.INIpayTest",
};

const HandleOptionItems = ({
  OrderItemList,
  SetTotalItemPrice,
  SetTotalDeliveryFee,
  SetOrderFetchList,
  SetSellerNameList,
}) => {
  const navigate = useNavigate();
  let totalItemPrice = 0;
  let totalDeliveryFee = 0;
  const [OrderList, SetOrderList] = useState([]);
  const [OrderDetailList, SetOrderDetailList] = useState([]);

  useEffect(() => {
    if (Array.isArray(OrderItemList)) {
      let newOrderList = [];
      let SellerNameList = [];
      OrderItemList.forEach((data) => {
        let newOrderDetailList = [];
        totalDeliveryFee += data.deliveryFee;
        SellerNameList.push(data.sellerName);
        !Array.isArray(data.optionList) &&
          (totalItemPrice += data.price * data.amount) &&
          newOrderDetailList.push({ amount: data.amount });
        Array.isArray(data.optionList) &&
          data.optionList.forEach((option) => {
            totalItemPrice += option.amount * option.optionPrice;
            newOrderDetailList.push({
              itemOptionId: option.optionId,
              amount: option.amount,
            });
          });
        newOrderList.push({
          itemId: data.itemId,
          orderDetailDTOList: newOrderDetailList,
        });
      });
      SetOrderList(newOrderList);
      SetTotalDeliveryFee(totalDeliveryFee);
      SetTotalItemPrice(totalItemPrice);
      SetOrderFetchList(newOrderList);
      SetSellerNameList(SellerNameList);
    }
  }, [OrderItemList]);

  try {
    if (!Array.isArray(OrderItemList)) {
      throw new Error("배열이 아닙니다.");
    } else if (Array.isArray(OrderItemList) && OrderItemList.length === 0) {
      throw new Error("상품이 존재하지 않습니다.");
    } else
      return (
        <>
          {OrderItemList.map((data, index) => (
            <PaymentTableBody $orderitem key={index}>
              <>
                <tr>
                  <th colSpan="3" className="itemtitle">
                    {data.sellerName}
                  </th>
                </tr>
                <tr>
                  <td
                    rowSpan="2"
                    style={{
                      width: `${120 / 19.2}vw`,
                      height: `${120 / 19.2}vw`,
                      padding: 0,
                    }}
                  >
                    <img
                      src={data.itemImg}
                      style={{
                        width: `${120 / 19.2}vw`,
                        height: `${120 / 19.2}vw`,
                      }}
                      alt=""
                    />
                  </td>
                  <td className="space" />
                  <th colSpan="2">{data.itemName}</th>
                </tr>
                <tr className="itemdetail">
                  <td className="space" />
                  <td className="optioninfo">
                    {data.optionList.map((option, index) =>
                      index === 0 ? (
                        option.optionName
                      ) : (
                        <React.Fragment key={index}>
                          <br />
                          {option.optionName}
                        </React.Fragment>
                      ),
                    )}
                  </td>
                  <td className="priceinfo">
                    {data.optionList.map((option, index) => (
                      <React.Fragment key={index}>
                        {index === 0 && (
                          <>
                            {option.amount}개 /{" "}
                            <span style={{ fontWeight: "bold" }}>
                              {option.optionPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              원
                            </span>
                          </>
                        )}
                        {index !== 0 && (
                          <>
                            <br />
                            {option.amount}개 /{" "}
                            <span style={{ fontWeight: "bold" }}>
                              {option.optionPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              원
                            </span>
                          </>
                        )}
                      </React.Fragment>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td />
                  <td className="space" />
                  <td
                    className="deliveryprice"
                    style={{ fontSize: `${15 / 19.2}vw` }}
                  >
                    배송비
                  </td>
                  <td className="priceinfo deliveryprice">
                    <span style={{ fontWeight: "bold" }}>
                      {data.deliveryFee
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
                  </td>
                </tr>
              </>
            </PaymentTableBody>
          ))}
        </>
      );
  } catch (error) {
    navigate("/", { replace: true });
  }
};

const Payment = () => {
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const OrderItemList = useSelector((state) => state.orderItem.orderItems);
  const [OrderFetchList, SetOrderFetchList] = useState([]);
  const [ShowPhoneChangeModal, SetShowPhoneChangeModal] = useState(false);
  const [ShowDeliveryAddressModal, SetShowDeliveryAddressModal] =
    useState(false);
  const [ShowRefundChangeModal, SetShowRefundChangeModal] = useState(false);
  const [OrderBy, SetOrderBy] = useState("준석");
  const [OrderByPhone, SetOrderByPhone] = useState("");
  const [DeliveryName, SetDeliveryName] = useState("");
  const [DeliveryAddressNickName, SetDeliveryAddressNickName] = useState("");
  const [DeliveryPhone, SetDeliveryPhone] = useState("");
  const [DeliveryAddress, SetDeliveryAddress] = useState("");
  const [DeliveryDetailAddress, SetDeliveryDetailAddress] = useState("");
  const [DeliveryZipCode, SetDeliveryZipCode] = useState("");
  const [DeliveryMemo, SetDeliveryMemo] = useState("");
  const [RefundBank, SetRefundBank] = useState("");
  const [RefundAccount, SetRefundAccount] = useState("");
  const [RefundAccountHolder, SetRefundAccoutHolder] = useState("");
  const [TotalItemPrice, SetTotalItemPrice] = useState(0);
  const [TotalDeliveryFee, SetTotalDeliveryFee] = useState(0);
  const [SellerNameList, SetSellerNameList] = useState([]);
  const [DisplayPrivacy, SetDisplayPrivacy] = useState(false);
  const imp_id = `imp71121635`;

  const readyforPayment = () => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://cdn.iamport.kr/v1/iamport.js");
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  useEffect(() => {
    readyforPayment();
    getProfileData();
  }, []);

  const [PaymentMethod, SetPaymentMethod] = useState("kakaopay");
  const PaymentMethodChange = (e) => {
    SetPaymentMethod(e.target.id);
  };

  const callback = (response) => {
    fetchPayment(response);
  };

  const HandlePayment = () => {
    const { IMP } = window;
    IMP.init(imp_id);
    const data = {
      pg: PaymentMethod, // 반드시 "tosspayments"임을 명시해주세요.
      merchant_uid: new Date().getTime(), // 주문번호    name: "나이키 와플 트레이너 2 SD",
      pay_method: "card",
      name: "TheGOODs",
      amount: TotalItemPrice + TotalDeliveryFee,
      buyer_email: "test@portone.io",
      buyer_name: "TheGOODs",
      buyer_tel: "010-8974-4831", //필수 파라미터 입니다.
      buyer_addr: "경기도",
      buyer_postcode: "123-456",
      m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
      escrow: false, //에스크로 결제인 경우 설정
      vbank_due: "YYYYMMDD",
      bypass: {
        acceptmethod: "noeasypay", // 간편결제 버튼을 통합결제창에서 제외(PC)
        P_RESERVED: "noeasypay=Y", // 간편결제 버튼을 통합결제창에서 제외(모바일)
      },
      period: {
        from: "20230101", //YYYYMMDD
        to: "20241231", //YYYYMMDD
      },
    };
    PaymentMethod !== "account" && IMP.request_pay(data, callback);
  };

  const getProfileData = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/profile`;

      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        SetOrderBy(response.data.result.name);
        SetOrderByPhone(response.data.result.phone);
        response.data.result.addressList.forEach(
          (address) =>
            address.defaultCheck === true &&
            (SetDeliveryAddressNickName(address.addressName),
            SetDeliveryAddress(address.addressSpec),
            SetDeliveryMemo(address.deliveryMemo),
            SetDeliveryZipCode(address.zipcode),
            SetDeliveryName(address.recipientName),
            SetDeliveryPhone(address.recipientPhone)),
        );
        response.data.result.accountList.forEach(
          (account) =>
            account.defaultCheck === true &&
            (SetRefundAccoutHolder(account.owner),
            SetRefundBank(account.bankName),
            SetRefundAccount(account.accountNum)),
        );
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  const fetchPayment = async (rsp) => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/v1/payments`;

      const requestBody = {
        imp_uid: rsp.imp_uid,
        merchant_uid: rsp.merchant_uid,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        fetchOrder();
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  const fetchOrder = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/order`;

      const requestBody = {
        name: OrderBy,
        phone: OrderByPhone,
        receiverName: DeliveryName,
        receiverPhone: DeliveryPhone,
        zipcode: DeliveryZipCode,
        address: DeliveryAddress,
        addressDetail: DeliveryDetailAddress,
        deliveryMemo: DeliveryMemo,
        payType: "CARD",
        refundBank: RefundBank,
        refundAccount: RefundAccount,
        refundOwner: RefundAccountHolder,
        depositor: "string",
        orderItemDTOList: OrderFetchList,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        console.log(response);
        dispatch(emptyOrderItems());
      }
    } catch (error) {
      console.error("Error during POST request:", error);
      if (error.response.status === 400) {
        alert("입력 정보를 확인해주세요");
      }
    }
  };

  return (
    <PaymentPageWrapper>
      <PhoneChangeModal
        isOpen={ShowPhoneChangeModal}
        onClose={() => SetShowPhoneChangeModal(false)}
        SetOrderBy={(e) => SetOrderBy(e)}
        SetPhone={(Changed) => {
          SetOrderByPhone(Changed);
        }}
      />
      <DeliveryAddressModal
        isOpen={ShowDeliveryAddressModal}
        onClose={() => SetShowDeliveryAddressModal(false)}
        ChangedName={(e) => SetDeliveryName(e)}
        ChangedAddress={(e) => SetDeliveryAddress(e)}
        ChangedDetailAddress={(e) => SetDeliveryDetailAddress(e)}
        ChangedZipCode={(e) => SetDeliveryZipCode(e)}
        ChangedPhone={(e) => SetDeliveryPhone(e)}
        ChangedDeliveryMemo={(e) => SetDeliveryMemo(e)}
        ChangedDeliveryAddressNickName={(e) => SetDeliveryAddressNickName(e)}
      />
      <RefundChangeModal
        isOpen={ShowRefundChangeModal}
        onClose={() => SetShowRefundChangeModal(false)}
        ChangedRefundAccountHolder={(e) => SetRefundAccoutHolder(e)}
        ChangedRefundAccount={(e) => SetRefundAccount(e)}
        ChangedRefundBank={(e) => SetRefundBank(e)}
      />
      <PaymentTitle>주문 결제</PaymentTitle>
      <Breadcrumb>
        <Item>장바구니</Item>
        <img src={arrow} style={Arrow} alt="arrow" />
        <BoldItem>주문/결제</BoldItem>
        <img src={arrow} style={Arrow} alt="arrow" />
        <Item>완료</Item>
      </Breadcrumb>
      <PaymentWrapper>
        <PaymentTableWrapper>
          <PaymentTableHead>
            <tr>
              <th>주문 고객</th>
              <th />
              <th
                className="change"
                onClick={() => SetShowPhoneChangeModal(true)}
              >
                고객 정보 수정
              </th>
            </tr>
          </PaymentTableHead>
          <PaymentTableBody $orderowner>
            <tr>
              <td className="title">이름</td>
              <td>{OrderBy}</td>
            </tr>
            <tr>
              <td className="title">전화번호</td>
              <td>
                {[
                  OrderByPhone.substring(0, 3),
                  OrderByPhone.substring(3, 7),
                  OrderByPhone.substring(7, 11),
                ].join("-")}
              </td>
            </tr>
            <tr>
              <td colspan="2" className="warn">
                주문, 배송시 일림을 발송해 드립니다.
              </td>
            </tr>
          </PaymentTableBody>
        </PaymentTableWrapper>
        <PaymentTableWrapper>
          <PaymentTableHead>
            <tr>
              <th>배송 정보</th>{" "}
              <th
                className="change"
                onClick={() => SetShowDeliveryAddressModal(true)}
              >
                배송지 정보 수정
              </th>
            </tr>
          </PaymentTableHead>
          <PaymentTableBody $deliveryinfo>
            <tr>
              <td>
                <span style={{ fontWeight: "bold" }}>{DeliveryName}</span> (
                {DeliveryAddressNickName})
              </td>
            </tr>
            <tr>
              <td>
                {[
                  DeliveryPhone.substring(0, 3),
                  DeliveryPhone.substring(3, 7),
                  DeliveryPhone.substring(7, 11),
                ].join("-")}
              </td>
            </tr>
            <tr>
              <td>
                ({DeliveryZipCode}) {DeliveryAddress} {DeliveryDetailAddress}
              </td>
            </tr>
            <td />
          </PaymentTableBody>
        </PaymentTableWrapper>
        <PaymentTableWrapper>
          <PaymentTableHead>
            <tr>
              <th colspan="2">환불계좌 정보 (제작무산 등의 경우)</th>
              <th
                className="change"
                onClick={() => SetShowRefundChangeModal(true)}
              >
                고객 정보 수정
              </th>
            </tr>
          </PaymentTableHead>
          <PaymentTableBody $refundinfo>
            <tr>
              <td className="title">은행명</td>
              <td>{RefundBank}</td>
            </tr>
            <tr>
              <td className="title">계좌번호</td>
              <td>{RefundAccount}</td>
            </tr>
            <tr>
              <td className="title">예금주명</td>
              <td>{RefundAccountHolder}</td>
            </tr>

            <td />
          </PaymentTableBody>
        </PaymentTableWrapper>
        <PaymentTableWrapper>
          <PaymentTableHead>
            <th colspan="100">주문 상품 정보(1건)</th>
          </PaymentTableHead>
          <HandleOptionItems
            OrderItemList={OrderItemList}
            SetTotalItemPrice={(e) => SetTotalItemPrice(e)}
            SetTotalDeliveryFee={(e) => SetTotalDeliveryFee(e)}
            SetOrderFetchList={(e) => SetOrderFetchList(...OrderFetchList, e)}
            SetSellerNameList={(e) => SetSellerNameList(...SellerNameList, e)}
          />
        </PaymentTableWrapper>
        <PaymentTableWrapper>
          <PaymentTableHead>
            <th>결제 수단</th>
          </PaymentTableHead>
          <PaymentTableBody $payselect>
            <tr>
              <td>
                <PaymentMethodSelectionInput
                  type="radio"
                  id="tosspayments"
                  name="paymentmethod"
                  onClick={PaymentMethodChange}
                  checked={PaymentMethod === PaymentMethodEnum.토스페이}
                />
                <PaymentMethodSelectionLabel htmlFor="tosspayments">
                  <PaymentMethodSelectionText>
                    토스페이
                  </PaymentMethodSelectionText>
                </PaymentMethodSelectionLabel>
              </td>
            </tr>
            <tr>
              <td>
                <PaymentMethodSelectionInput
                  type="radio"
                  id="kakaopay"
                  name="paymentmethod"
                  onClick={PaymentMethodChange}
                  checked={PaymentMethod === PaymentMethodEnum.카카오페이}
                />
                <PaymentMethodSelectionLabel htmlFor="kakaopay">
                  <PaymentMethodSelectionText>
                    카카오페이
                  </PaymentMethodSelectionText>
                </PaymentMethodSelectionLabel>
              </td>
            </tr>
            <tr>
              <td>
                <PaymentMethodSelectionInput
                  type="radio"
                  id="html5_inicis.INIpayTest"
                  name="paymentmethod"
                  onClick={PaymentMethodChange}
                  checked={PaymentMethod === "html5_inicis.INIpayTest"}
                />
                <PaymentMethodSelectionLabel htmlFor="html5_inicis.INIpayTest">
                  <PaymentMethodSelectionText>
                    카드결제
                  </PaymentMethodSelectionText>
                </PaymentMethodSelectionLabel>
              </td>
            </tr>
            <tr>
              <td>
                <PaymentMethodSelectionInput
                  type="radio"
                  id="account"
                  name="paymentmethod"
                  onClick={PaymentMethodChange}
                  checked={PaymentMethod === "account"}
                />
                <PaymentMethodSelectionLabel htmlFor="account">
                  <PaymentMethodSelectionText>
                    계좌이체/무통장입금
                  </PaymentMethodSelectionText>
                </PaymentMethodSelectionLabel>
              </td>
            </tr>
            <td />
          </PaymentTableBody>
        </PaymentTableWrapper>
      </PaymentWrapper>
      <PaymentConfirmWrapper>
        <PaymentTableWrapper>
          <PaymentTableHead>
            <th colspan="2">결제 정보</th>
          </PaymentTableHead>
          <PaymentTableBody $payselect>
            <tr>
              <td>상품 금액</td>
              <td className="largeprice">
                {TotalItemPrice.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ",",
                )}
                원
              </td>
            </tr>
            <tr>
              <td>배송비</td>
              <td className="largeprice">
                {TotalDeliveryFee.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ",",
                )}
                원
              </td>
            </tr>
            <td />
          </PaymentTableBody>
          <PaymentTableBody $payselect style={{ border: "none" }}>
            <tr>
              <td style={{ fontWeight: "bold" }}>최종 결제금액</td>
              <td className="largeprice">
                {(TotalItemPrice + TotalDeliveryFee)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </td>
            </tr>
            <td />
          </PaymentTableBody>
        </PaymentTableWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: `${30 / 19.2}vw`,
          }}
        >
          <div>결제 시 개인정보 제공에 동의합니다.</div>
          <div style={{ marginLeft: `${100 / 19.2}vw` }}>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: `${20 / 19.2}vw` }}
              onClick={() =>
                SetDisplayPrivacy((DisplayPrivacy) => !DisplayPrivacy)
              }
            >
              {DisplayPrivacy ? (
                <path
                  d="M4.16927 12.5L10.0026 6.66667L15.8359 12.5"
                  stroke="#52555B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              ) : (
                <path
                  d="M15.8307 7.5L9.9974 13.3333L4.16406 7.5"
                  stroke="#52555B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </div>
        </div>
        <PaymentPrivacy $display={DisplayPrivacy}>
          <div>
            ‣ 제공받는 자 :{" "}
            <span style={{ fontWeight: "bold" }}>
              {SellerNameList.join(", ")}
            </span>
          </div>
          <div>
            ‣ 목적 :{" "}
            <span style={{ fontWeight: "bold" }}>
              판매자와 구매자 사이의 원활한 거래 진행, 상품의 배송을 위한 배송지
              확인, 고객상담 및 불만처리 등
            </span>
          </div>
          <div>
            ‣ 정보 : 주문자 정보(성명, 연락처), 수령인 정보(성명, 연락처, 주소)
          </div>
          <div>
            ‣ 보유기간 :{" "}
            <span style={{ fontWeight: "bold" }}>발송완료 후 15일</span>
          </div>
        </PaymentPrivacy>
        <PayButton onClick={() => HandlePayment()}>결제하기</PayButton>
      </PaymentConfirmWrapper>
    </PaymentPageWrapper>
  );
};

export default Payment;
