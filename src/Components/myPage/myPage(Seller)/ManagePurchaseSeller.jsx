import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderItems from "../ManagePurchase/OrderItems";
import axios from "axios";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import OrderDetail from "../ManagePurchase/OrderDetail";

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

export default function TopElement() {
  return (
    <Routes>
      <Route path="/" element={<ManagePurchase />} />
      <Route path=":OrderItemId" element={<OrderDetail />} />
    </Routes>
  );
}
//마이페이지_구매관리
export function ManagePurchase({
  Guest,
  OrderNumber,
  OrderName,
  OrderContact,
}) {
  const token = useSelector((state) => state.login.token);
  const [OrderStatusFilter, SetOrderStatusFilter] = useState(null);
  const [CurrentPage, SetCurrentPage] = useState(1);
  const [OrderItemList, SetOrderItemList] = useState([]);
  const [TotalPage, SetTotalPage] = useState(1);
  Guest = Guest || false;

  const handlePageChange = (pageNumber) => {
    SetCurrentPage(pageNumber);
  };

  useEffect(() => {
    console.log(Guest);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `${process.env.REACT_APP_BACKEND}/api/order/?page=${CurrentPage}${OrderStatusFilter === null ? "" : `&status=${OrderStatusFilter}`}`;

        const response = await axios.get(endpoint, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.isSuccess === true) {
          Array.isArray(response.data.result.orderItemPreViewDTOList) &&
            response.data.result.orderItemPreViewDTOList.length > 0 &&
            SetOrderItemList(() => [
              ...response.data.result.orderItemPreViewDTOList,
            ]);
          SetTotalPage(response.data.result.totalPage);
        }
      } catch (error) {
        console.error("Error during POST request:", error);
      }
    };

    const fetchGuest = async () => {
      try {
        const endpoint = `${process.env.REACT_APP_BACKEND}/api/order/api/nologin/order`;
        const requestBody = {
          ordersId: OrderNumber,
          name: OrderName,
          phone: OrderContact,
          page: CurrentPage,
        };

        const response = await axios.post(endpoint, requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.data.isSuccess === true) {
          Array.isArray(response.data.result.orderItemPreViewDTOList) &&
            response.data.result.orderItemPreViewDTOList.length > 0 &&
            SetOrderItemList(() => [
              ...response.data.result.orderItemPreViewDTOList,
            ]);
          SetTotalPage(response.data.result.totalPage);
        }
      } catch (error) {
        console.error("Error during POST request:", error);
      }
    };

    !Guest && fetchData();
    Guest && fetchGuest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentPage, OrderStatusFilter]);

  return (
    <MainContainer>
      {!Guest ? <h1>구매관리</h1> : <h1>주문 상품</h1>}
      {!Guest && (
        <ButtonContainer>
          <Button
            style={{ width: 50, height: 37 }}
            onClick={() => SetOrderStatusFilter(null)}
            className={OrderStatusFilter === null && "selected"}
          >
            전체
          </Button>
          <Button
            style={{ width: 73, height: 37 }}
            onClick={() => SetOrderStatusFilter(OrderStatusEnum.PAY_PREV)}
            className={
              OrderStatusFilter === OrderStatusEnum.PAY_PREV && "selected"
            }
          >
            결제전
          </Button>
          <Button
            style={{ width: 86, height: 37 }}
            onClick={() => SetOrderStatusFilter(OrderStatusEnum.PAY_COMP)}
            className={
              OrderStatusFilter === OrderStatusEnum.PAY_COMP && "selected"
            }
          >
            결제완료
          </Button>
          <Button
            style={{ width: 86, height: 37 }}
            onClick={() => SetOrderStatusFilter(OrderStatusEnum.DEL_PREP)}
            className={
              OrderStatusFilter === OrderStatusEnum.DEL_PREP && "selected"
            }
          >
            배송준비
          </Button>
          <Button
            style={{ width: 86, height: 37 }}
            onClick={() => SetOrderStatusFilter(OrderStatusEnum.DEL_START)}
            className={
              OrderStatusFilter === OrderStatusEnum.DEL_START && "selected"
            }
          >
            배송시작
          </Button>
          <Button
            style={{ width: 86, height: 37 }}
            onClick={() => SetOrderStatusFilter(OrderStatusEnum.DEL_COMP)}
            className={
              OrderStatusFilter === OrderStatusEnum.DEL_COMP && "selected"
            }
          >
            배송완료
          </Button>
          <Button
            style={{ width: 86, height: 37 }}
            onClick={() => SetOrderStatusFilter(OrderStatusEnum.CONFIRM)}
            className={
              OrderStatusFilter === OrderStatusEnum.CONFIRM && "selected"
            }
          >
            구매확정
          </Button>
          <Button
            style={{ width: 86, height: 37 }}
            onClick={() => SetOrderStatusFilter(OrderStatusEnum.CANCEL)}
            className={
              OrderStatusFilter === OrderStatusEnum.CANCEL && "selected"
            }
          >
            주문취소
          </Button>
          <Button
            style={{ width: 96, height: 37 }}
            onClick={() => SetOrderStatusFilter(OrderStatusEnum.REFUND_ONGOING)}
            className={
              OrderStatusFilter === OrderStatusEnum.REFUND_ONGOING && "selected"
            }
          >
            반품진행중
          </Button>
          <Button
            style={{ width: 73, height: 37 }}
            onClick={() => SetOrderStatusFilter(OrderStatusEnum.REFUND_COMP)}
            className={
              OrderStatusFilter === OrderStatusEnum.REFUND_COMP && "selected"
            }
          >
            반품완료
          </Button>
        </ButtonContainer>
      )}
      {Array.isArray(OrderItemList) && OrderItemList.length > 0
        ? OrderItemList.map((data, index) => (
            <OrderItems {...data} key={index} />
          ))
        : "주문하신 상품이 없습니다!"}
      {!Guest && (
        <PageNationWrapper>
          <PageNation className="prevprev" />
          <PageNation className="prev" />
          {Array.from({
            length: TotalPage,
          }).map((_, index) => (
            <PageNation
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              disabled={index + 1 === CurrentPage}
            >
              {index + 1}
            </PageNation>
          ))}
          <PageNation className="next" />
          <PageNation className="nextnext" />
        </PageNationWrapper>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 870px;
  height: 972px;
  border: 3px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 5%;
    margin-left: 5%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #202123;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9%;
  width: 870px;
`;

const Button = styled.button`
  margin-left: 4px;
  border: 1px solid #9c9c9c;
  border-radius: 20px;
  background-color: white;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #9c9c9c;

  &:hover {
    border: 1.5px solid;
    border-color: black;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-align: center;

    color: #202123;
  }

  &.selected {
    border: 1.5px solid;
    border-color: black;

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-align: center;

    color: #202123;
  }
`;

const PageNationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${14 / 19.2}vw;
`;

const PageNation = styled.div`
  width: ${32 / 19.2}vw;
  height: ${32 / 19.2}vw;
  border: ${1 / 19.2}vw solid rgba(156, 156, 156);
  border-radius: ${1 / 19.2}vw;
  color: ${(props) =>
    props.$selected ? "rgba(32,33,35)" : "rgba(156,156,156)"};
  display: flex;
  justify-content: center;
  align-items: center;

  &.prevprev {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMjUgMTEuODc1TDMgNy41TDguMjUgMy4xMjVNMTQuMjUgMTEuODc1TDkgNy41TDE0LjI1IDMuMTI1IiBzdHJva2U9IiM5QzlDOUMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")
      no-repeat center center;
  }

  &.prev {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjI1IDExLjg3NUw2IDcuNUwxMS4yNSAzLjEyNSIgc3Ryb2tlPSIjOUM5QzlDIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==")
      no-repeat center center;
  }

  &.next {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNzUgMy4xMjVMMTIgNy41TDYuNzUgMTEuODc1IiBzdHJva2U9IiM5QzlDOUMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")
      no-repeat center center;
  }

  &.nextnext {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNzUgMy4xMjVMMTUgNy41TDkuNzUgMTEuODc1TTMuNzUgMy4xMjVMOSA3LjVMMy43NSAxMS44NzUiIHN0cm9rZT0iIzlDOUM5QyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=")
      no-repeat center center;
  }
`;
