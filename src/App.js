import { Route, Routes } from "react-router-dom";
import MainPageComponent from "./Components/MainPage/MainPageComponent";
// 마이페이지(고객님)
import MyPageCustomerComponent from "./Pages/MyPageCustomer";
import EditProfile from "./Components/myPage/myPage(Customer)/EditProfile";
import ManageShippingRefund from "./Components/myPage/myPage(Customer)/ManageShippingRefund";
import ManagePurchase from "./Components/myPage/myPage(Customer)/ManagePurchase";
import CustomizedInformation from "./Components/myPage/myPage(Customer)/CustomizedInformation";
import NotificationSettings from "./Components/myPage/myPage(Customer)/NotificationSettings";
import PasswordChange from "./Components/myPage/myPage(Customer)/PasswordChange";
import MemberWithdrawal from "./Components/myPage/myPage(Customer)/MemberWithdrawal";
import MyReview from "./Components/myPage/myPage(Customer)/MyReview";
// 마이페이지(사장님)
import MyPageSellerComponent from "./Pages/MyPageSeller";
import SellerProfile from "./Components/myPage/myPage(Seller)/SellerProfile";
import EditProfileSeller from "./Components/myPage/myPage(Seller)/EditProfileSeller";
import ManagePurchaseSeller from "./Components/myPage/myPage(Seller)/ManagePurchaseSeller";
import AlarmSeller from "./Components/myPage/myPage(Seller)/NotificationSettingsSeller";
import PasswordChangeSeller from "./Components/myPage/myPage(Seller)/PasswordChangeSeller";
import MemberWithdrawalSeller from "./Components/myPage/myPage(Seller)/MemberWithdrawalSeller";
import MyReviewSeller from "./Components/myPage/myPage(Seller)/MyReviewSeller";
import ProfitSeller from "./Components/myPage/myPage(Seller)/ProfitSeller";

// 포스트
import Post from "./Pages/Post";
import Seller from "./Pages/Seller";
import CreatePost from "./Pages/CreatePost";

// 로그인
import Login from "./Pages/Login";
import KakaoLoginHandler from "./Components/Login/KakaoLoginHandler";
import NaverLoginHandler from "./Components/Login/NaverLoginHandler";
import Register from "./Pages/Register";
import HelpCenter from "./Components/HelpCenter/HelpCenter";
import HelpCenterWrite from "./Components/HelpCenter/HelpCenterWrite";
import ShoppingList from "./Pages/ShoppingList";
//상품상세페이지
import ProductPageComponent from "./Components/Product/ProductPageComponent";
import Guest from "./Pages/Guest";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import NonCustomerOrder from "./Pages/NonCustomerOrder";
import CategoryPage from "./Components/Category/CategoryComponent";
import SearchResultComponent from "./Components/Search/SearchComponent";
import MorePage from "./Pages/MoreProductPage";
import Payment from "./Pages/Payment";
import NewProductPage from "./Pages/NewProductPage";
import CategorySearchPage from "./Pages/CategoryPage";
import Like from "./Pages/Like";
import TokenTrigger from "./Components/Login/TokenTrigger";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <TokenTrigger />
          <Routes>
            <Route path="/" element={<MainPageComponent />} />
            <Route path="/newproduct" element={<NewProductPage type="new" />} />

            <Route
              path="/popularproduct"
              element={<NewProductPage type="popular" />}
            />
            <Route
              path="/endingproduct"
              element={<NewProductPage type="last" />}
            />
            <Route path="/search" element={<SearchResultComponent />} />
            <Route path="/product" element={<MorePage />} />
            {/* <Route
              path="/preference/result"
              element={<PreferenceResultPage />}
             /> */}
            <Route path="/category" element={<CategoryPage />} />
            {/* <Route path="/*" element={<Post />} /> */}
            <Route path="/product/:id" element={<ProductPageComponent />} />
            <Route path="/posting" element={<Post />} />
            <Route path="/CreatePost" element={<CreatePost />} />

            {/* Seller 부분 */}
            <Route path="/mypageSeller" element={<MyPageSellerComponent />}>
              <Route path="EditProfile" element={<EditProfileSeller />} />
              <Route path="SellerProfile" element={<SellerProfile />} />
              <Route path="ManagePurchase" element={<ManagePurchaseSeller />} />
              <Route path="NotificationSettings" element={<AlarmSeller />} />
              <Route path="PasswordChange" element={<PasswordChangeSeller />} />
              <Route
                path="MemberWithdrawal"
                element={<MemberWithdrawalSeller />}
              />
              <Route path="MyReview" element={<MyReviewSeller />} />
              <Route path="ProfitSeller" element={<ProfitSeller />} />
            </Route>

            <Route
              path="/category/create"
              element={<CategorySearchPage tag="create" />}
            />
            <Route
              path="/category/idol"
              element={<CategorySearchPage tag="idol" />}
            />
            <Route
              path="/category/mungu"
              element={<CategorySearchPage tag="mungu" />}
            />
            <Route
              path="/category/ani"
              element={<CategorySearchPage tag="ani" />}
            />
            <Route
              path="/category/food"
              element={<CategorySearchPage tag="food" />}
            />
            <Route
              path="/category/fashion"
              element={<CategorySearchPage tag="fashion" />}
            />

            <Route path="/mypage" element={<MyPageCustomerComponent />}>
              <Route path="EditProfile" element={<EditProfile />} />
              <Route path="ManagePurchase/*" element={<ManagePurchase />} />
              <Route
                path="ManageShippingRefund"
                element={<ManageShippingRefund />}
              />
              <Route
                path="CustomizedInformation"
                element={<CustomizedInformation />}
              />
              <Route
                path="NotificationSettings"
                element={<NotificationSettings />}
              />
              <Route path="PasswordChange" element={<PasswordChange />} />
              <Route path="MemberWithdrawal" element={<MemberWithdrawal />} />
              <Route path="MyReview" element={<MyReview />} />
            </Route>

            <Route path="/seller" element={<Seller />} />
            <Route path="/shoppingList" element={<ShoppingList />} />
            <Route
              path="/noncustomerorder"
              element={<NonCustomerOrder />}
            ></Route>
            {/* <Route path="/mypage" element={<MyPageComponent />}/> */}
            <Route path="/mypage" element={<MyPageCustomerComponent />}>
              <Route path="/mypage/EditProfile" element={<EditProfile />} />
              <Route
                path="/mypage/ManagePurchase/*"
                element={<ManagePurchase />}
              />
              <Route
                path="/mypage/ManageShippingRefund"
                element={<ManageShippingRefund />}
              />
              <Route
                path="/mypage/NotificationSettings"
                element={<NotificationSettings />}
              />
              <Route
                path="/mypage/PasswordChange"
                element={<PasswordChange />}
              />
              <Route
                path="/mypage/MemberWithdrawal"
                element={<MemberWithdrawal />}
              />
            </Route>
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/api/members/kakao/callback"
              element={<KakaoLoginHandler />}
            />
            <Route
              path="/api/members/naver/callback"
              element={<NaverLoginHandler />}
            />
            <Route path="/register/*" element={<Register />} />
            <Route path="/shoppingList" element={<ShoppingList />} />
            <Route path="/guest/*" element={<Guest />} />
            <Route path="/helpcenter" element={<HelpCenter />}>
              <Route path="write" element={<HelpCenterWrite />} />
            </Route>
            <Route path="/payment/*" element={<Payment />} />
            {/* <Route path="/mine" element={<Like />} /> */}
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;