import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../redux/loginSlice";

const KakaoLoginHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetch = async () => {
    try {
      const endpoint = `${process.env.REACT_APP_BACKEND}/api/members/kakao/callback?code=${code}`;

      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.data.isSuccess === true) {
        dispatch(setToken(response.data.result.result));
        navigate("/", { replace: true });
      } else if (response.data.isSuccess === false) {
        sessionStorage.setItem("email", response.data.result.email);
        sessionStorage.setItem("phone", response.data.result.phone);
        navigate("/register/form", { replace: true });
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
        } else if (error.response.status === 500) {
        } else {
          console.log("Unhandled error:", error.response.data);
        }
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  );
};

export default KakaoLoginHandler;
