import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavigationCategoryMenu from "../NavigationMenu/NavigationCategoryMenu";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import HeaderComponent from "../Header/Header";
import product1Img from "../../img/productimg.png";
import simpleRightArrow from "../../img/simpleRightArrow.svg";
import profile from "../../img/Hamster.png";
import viewer from "../../img/viewer.svg";
import heart from "../../img/share.svg";
import share from "../../img/heart.svg";
import ReviewComponent from "../Review/Review";
import ProductInfoComponent from "../Product/ProductInfoComponent";
import Pagination from "../Footer/PageNationComponent";
import ImageSlider from "./SlideComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setPurchaseItems } from "../../redux/purchaseSlice";
import { setOrderItems, emptyOrderItems } from "../../redux/orderSlice";

const OptionContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
`;

const SelectBox = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;

  padding: 10px 0px;
  background-color: #fff;
  cursor: pointer;
`;

const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  z-index: 1;
`;

const Option = styled.div`
  position: relative; /* 추가 */
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CheckIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: #f0c920;
`;
const WrapContainer = styled.div`
  width: 100%;
  min-width: 1200px;
  margin: 20px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const ProfileText = styled.p`
  margin-right: 10px;
  font-family: "NotoSans", sans-serif;
`;

const ArrowImage = styled.img`
  width: 20px;
  height: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

const NavWrapContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* 위쪽 여백 추가 */
`;

const SlideContainer = styled.div`
  width: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SlideItemContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-right: 15px;
`;
const SlideItem = styled.img`
  width: 100%;
  height: 100%;
`;
const ProductWrapContainer = styled.div`
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SlideMainImageContainer = styled.div`
  width: 460px;
  height: 360px;
`;
const PruductInfoWrapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductInnerContainer = styled.div`
  width: 469px;
  margin-right: 50px;
`;
const ProductSideInfoWrapContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;
const IconWrapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
`;

const SubInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.background || "#007bff"};
  border: 2px solid ${(props) => props.border || "transparent"};
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;

  // &:hover {
  //     background-color: ${(props) => props.hoverBackground || "#0056b3"};
  // }
`;
const reviews = [
  {
    profile: profile,
    name: "홍길동",
    date: "★★★★★ 2024년 2월 14일",
    reviewImage: product1Img,
    content:
      "안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다.",
  },
  {
    profile: profile,
    name: "홍길동",
    date: "★★★★★ 2024년 2월 14일",
    reviewImage: product1Img,
    content:
      "안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다.",
  },
  {
    profile: profile,
    name: "홍길동",
    date: "★★★★★ 2024년 2월 14일",
    reviewImage: product1Img,
    content:
      "안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다.",
  },
  {
    profile: profile,
    name: "홍길동",
    date: "★★★★★ 2024년 2월 14일",
    reviewImage: product1Img,
    content:
      "안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다.",
  },
  {
    profile: profile,
    name: "홍길동",
    date: "★★★★★ 2024년 2월 14일",
    reviewImage: product1Img,
    content:
      "안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다.",
  },
  {
    profile: profile,
    name: "홍길동",
    date: "★★★★★ 2024년 2월 14일",
    reviewImage: product1Img,
    content:
      "안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다. 안녕하세요, 이 리뷰는 아주 좋습니다.",
  },
];

function ProductPageComponent() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [mainImageURI, setMainImageURI] = useState(product1Img);
  const [productInfo, setProductInfo] = useState("");
  const totalPages = 5;
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    itemId: 0,
    sellerName: "",
    itemName: "",
    itemImg: "",
    deliveryFee: 0,
    optionList: [
      {
        optionId: 0,
        optionName: "",
        optionPrice: 0,
        amount: 0,
      },
    ],
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // 페이지 변경에 따른 데이터 업데이트 등의 작업 수행
  };

  const handleImageClick = (imageURI) => {
    console.log("클릭된 이미지의 URI:", imageURI);
    setMainImageURI(imageURI);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = axios.get(`/api/seller/item/${id}`);
        const response = await axios.get(`/api/seller/item/${id}`);
        setProductInfo(response.data.result); // 응답 데이터에서 필요한 부분을 추출하여 상태로 설정
        //console.log(response.data.result);
        console.log(response.data.result.itemId);
        setItem({
          itemId: response.data.result.itemId,
          sellerName: response.data.result["memberName"],
          itemName: response.data.result.name,
          itemImg: response.data.result.itemImgUrlList[0]["itemImgUrl"],
          deliveryFee: response.data.result.deliveryFee,
          optionList: response.data.result["itemOptionList"],
        });

        console.log(item);
        dispatch(setPurchaseItems(item));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOrder = () => {
    dispatch(emptyOrderItems());
    dispatch(
      setOrderItems({
        itemId: item.itemId,
        sellerName: item.sellerName,
        itemName: item.itemName,
        itemImg: item.itemImg,
        deliveryFee: item.deliveryFee,
        optionList: selectedOption.map((detail) => ({
          optionId: detail.optionId,
          optionName: detail.optionName,
          optionPrice: detail.price,
          amount: detail.amount,
        })),
      }),
    );
    navigate("/payment", { replace: true }); // 결제 페이지로 이동하면서 item 객체 전달
  };

  return (
    <>
      <HeaderComponent />
      <NavWrapContainer>
        <NavigationMenu />
        <NavigationCategoryMenu />
      </NavWrapContainer>
      <WrapContainer>
        <ProductWrapContainer>
          <PruductInfoWrapContainer>
            {/* productInfo가 정의되어 있을 때만 렌더링 */}
            {productInfo && (
              <>
                {/* 상품이미지 */}
                <ProductInnerContainer>
                  <SlideMainImageContainer>
                    <SlideItem
                      src={productInfo["itemImgUrlList"][0]["itemImgUrl"]}
                      alt=""
                    />
                  </SlideMainImageContainer>
                  {/* 여기에 기능 만들어야함 */}
                  <ImageSlider
                    images={productInfo["itemImgUrlList"]}
                    onImageClick={handleImageClick} // 클릭된 이미지의 URI를 처리하는 콜백 함수 전달
                  />
                </ProductInnerContainer>
                {/* 상품 정보 */}
                <ProductInnerContainer>
                  {/* 프로필 */}
                  <ProfileContainer>
                    <ProfileImage
                      src={productInfo.memberProfileImgUrl}
                      alt=""
                    />
                    <ProfileText>{productInfo.memberName}</ProfileText>
                    <ArrowImage src={simpleRightArrow} alt="" />
                  </ProfileContainer>
                  {/* 상품 이름 및 가격 */}
                  <ProductSideInfoWrapContainer>
                    <div>
                      <p
                        style={{
                          fontFamily: "'NotoSans', sans-serif",
                          fontWeight: "medium",
                          fontSize: "20px",
                        }}
                      >
                        {productInfo.name}
                      </p>
                    </div>
                    <SubInfoContainer>
                      {/* 가격 */}
                      <div>
                        <p
                          style={{
                            fontFamily: "'NotoSans', sans-serif",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          {productInfo.price}\
                        </p>
                      </div>
                      <IconWrapContainer>
                        {/* 조회수 */}
                        <IconContainer>
                          <img src={viewer} alt="" width="32px" height="32px" />
                          <p style={{ fontSize: "15px", textAlign: "center" }}>
                            {productInfo.viewCount}
                          </p>
                        </IconContainer>
                        {/* 하트 */}
                        <IconContainer>
                          <img src={heart} alt="" width="32px" height="32px" />
                          <p style={{ fontSize: "15px", textAlign: "center" }}>
                            999
                          </p>
                        </IconContainer>
                        {/* 공유 */}
                        <IconContainer>
                          <img src={share} alt="" width="32px" height="32px" />
                          <p style={{ fontSize: "15px", textAlign: "center" }}>
                            999
                          </p>
                        </IconContainer>
                      </IconWrapContainer>
                    </SubInfoContainer>
                  </ProductSideInfoWrapContainer>
                  {/* 옵션 */}
                  <OptionContainer>
                    <SelectBox onClick={() => setShowOptions(!showOptions)}>
                      옵션을 선택해주세요.
                    </SelectBox>
                    {false && (
                      <OptionsList>
                        <Option>
                          <div
                            style={{
                              width: "98%",
                              height: "98%",
                              border: "1px solid black",
                              display: "flex",
                              justifyContent: "space-around",
                              alignItems: "center",
                            }}
                          >
                            <p>스티커1</p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <button>+</button>9<button>-</button>
                            </div>
                          </div>
                        </Option>
                        <Option>
                          <div
                            style={{
                              width: "98%",
                              height: "98%",
                              border: "1px solid black",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <p style={{ marginLeft: "5px" }}>스티커1</p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <button>+</button>9<button>-</button>
                            </div>
                          </div>
                        </Option>
                        <Option>
                          <div
                            style={{
                              width: "98%",
                              height: "98%",
                              border: "1px solid black",
                              display: "flex",
                              justifyContent: "space-around",
                              alignItems: "center",
                            }}
                          >
                            <p>스티커1</p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <button>+</button>9<button>-</button>
                            </div>
                          </div>
                        </Option>
                      </OptionsList>
                    )}
                  </OptionContainer>
                  {/* 장바구니 및 구매하기 버튼 */}
                  <ButtonContainer>
                    <Button border="black" background="white">
                      장바구니
                    </Button>
                  </ButtonContainer>
                  <ButtonContainer>
                    <Button
                      background="yellow"
                      color="white"
                      border="transparent"
                      onClick={handleOrder}
                    >
                      구매하기
                    </Button>
                  </ButtonContainer>
                </ProductInnerContainer>
              </>
            )}
          </PruductInfoWrapContainer>
        </ProductWrapContainer>
        {/* ProductInfoComponent 및 ReviewComponent는 항상 렌더링 */}
        <ProductInfoComponent productInfo={productInfo} />
        <ReviewComponent reviews={reviews} />
      </WrapContainer>
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default ProductPageComponent;
