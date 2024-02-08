import { Route, Routes } from "react-router-dom";
import MainPageComponent from "./Components/MainPage/MainPageComponent";
import MyPageComponent from "./Pages/MyPage";
import EditProfile from "./Components/myPage/EditProfile";
import ManageShippingRefund from "./Components/myPage/ManageShippingRefund";
import NotificationSettings from "./Components/myPage/NotificationSettings";
import PasswordChange from "./Components/myPage/PasswordChange";
import MemberWithdrawal from "./Components/myPage/MemberWithdrawal";
import ManagePurchase from "./Components/myPage/ManagePurchase";
import Post from "./Pages/Post";
import Seller from "./Pages/Seller";
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
            <Route path="/*" element={<Post />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/mypage" element={<MyPageComponent />}>
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
