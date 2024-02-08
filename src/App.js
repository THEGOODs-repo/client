import { Route, Routes } from "react-router-dom";
import  MainPageComponent  from './Components/MainPage/MainPageComponent'
import MyPageComponent from "./Pages/MyPage"
import EditProfile from "./Components/myPage/EditProfile";
import ManageShippingRefund from "./Components/myPage/ManageShippingRefund";
import NotificationSettings from "./Components/myPage/NotificationSettings";
import PasswordChange from "./Components/myPage/PasswordChange";
import MemberWithdrawal from "./Components/myPage/MemberWithdrawal";
import ManagePurchase from "./Components/myPage/ManagePurchase";
import Post from "./Pages/Post";
import ProductPageComponent from "./Components/Product/ProductPageComponent";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/*" element={<Post />} />
          <Route path="/mypage" element={<MyPageComponent />} >
            <Route path="/mypage/EditProfile" element={<EditProfile />} />
            <Route path="/mypage/ManagePurchase" element={<ManagePurchase />} />
            <Route path="/mypage/ManageShippingRefund" element={<ManageShippingRefund />} />
            <Route path="/mypage/NotificationSettings" element={<NotificationSettings />} />
            <Route path="/mypage/PasswordChange" element={<PasswordChange />} />
            <Route path="/mypage/MemberWithdrawal" element={<MemberWithdrawal />} />
          </Route>
          <Route path="/product" element={<ProductPageComponent />} />
      
        </Routes>
  </div>
  );
}

export default App;
