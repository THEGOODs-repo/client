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
// 선호도 조사
import Preference from "./Pages/Preference";
import PreferenceResultPage from "./Pages/PreferenceResult";

// 포스트
import Post from "./Pages/Post";
import Seller from "./Pages/Seller";

// 로그인
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RegisterForm from "./Components/Register/RegisterForm";
import FindEmail from "./Components/Login/FindEmail";
import FindPassWord from "./Components/Login/FindPassWord";
import FindGuestOrder from "./Components/Login/FindGuestOrder";
import OrderDetail from "./Components/Order/OrderDetail";
import HelpCenter from "./Components/HelpCenter/HelpCenter";
import HelpCenterWrite from "./Components/HelpCenter/HelpCenterWrite";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPageComponent />} />
            <Route path="/preference" element={<Preference />} />
            <Route
              path="/preference/result"
              element={<PreferenceResultPage />}
            />
            {/* <Route path="/*" element={<Post />} /> */}
            {/* Seller 부분 */}
            <Route path="/mypageSeller" element={<MyPageSellerComponent />}>
              <Route
                path="/mypageSeller/EditProfile"
                element={<EditProfileSeller />}
              />
              <Route
                path="/mypageSeller/SellerProfile"
                element={<SellerProfile />}
              />
              <Route
                path="/mypageSeller/ManagePurchase"
                element={<ManagePurchaseSeller />}
              />
              <Route
                path="/mypageSeller/NotificationSettings"
                element={<AlarmSeller />}
              />
              <Route
                path="/mypageSeller/PasswordChange"
                element={<PasswordChangeSeller />}
              />
              <Route
                path="/mypageSeller/MemberWithdrawal"
                element={<MemberWithdrawalSeller />}
              />
              <Route
                path="/mypageSeller/MyReview"
                element={<MyReviewSeller />}
              />
              <Route
                path="/mypageSeller/ProfitSeller"
                element={<ProfitSeller />}
              />
            </Route>
            <Route path="/mypage" element={<MyPageCustomerComponent />}>
              <Route path="/mypage/EditProfile" element={<EditProfile />} />
              <Route
                path="/mypage/ManagePurchase"
                element={<ManagePurchase />}
              />
              <Route
                path="/mypage/ManageShippingRefund"
                element={<ManageShippingRefund />}
              />
              <Route
                path="/mypage/CustomizedInformation"
                element={<CustomizedInformation />}
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
              <Route path="/mypage/MyReview" element={<MyReview />} />
            </Route>
            <Route path="/seller" element={<Seller />} />
            <Route path="/mypage" element={<MyPageCustomerComponent />}>
              <Route path="/mypage/EditProfile" element={<EditProfile />} />
              <Route
                path="/mypage/ManagePurchase"
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
            <Route path="/login">
              <Route path="" element={<Login />} />
              <Route path="/login/findemail" element={<FindEmail />} />
              <Route path="/login/resetpw" element={<FindPassWord />} />
              <Route path="/login/guest" element={<FindGuestOrder />} />
              <Route path="/login/order" element={<OrderDetail />} />
            </Route>
            <Route path="/register">
              <Route path="/register" element={<Register />} />
              <Route path="/register/form" element={<RegisterForm />} />
            </Route>
            <Route path="/helpcenter">
              <Route path="/helpcenter" element={<HelpCenter />} />
              <Route path="/helpcenter/write" element={<HelpCenterWrite />} />
            </Route>
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
