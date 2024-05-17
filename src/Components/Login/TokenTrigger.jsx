import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setToken, setExpire } from "../../redux/loginSlice";
import Cookies from "js-cookie";

export default function TokenTrigger() {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = useSelector((state) => state.login.token);
  const expire = useSelector((state) => state.login.expire);

  useEffect(() => {
    if (token != null) {
      console.log(Cookies);
      let now = new Date();
      let expires = new Date(expire);
      if (expires < now) {
        fetchLogin();
      }
    }
  }, [location]);

  const fetchLogin = async () => {
    try {
      const endpoint = `/api/members/token/regenerate`;
      const requestBody = {
        refreshToken: Cookies.get("refreshToken"),
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.isSuccess === true) {
        console.log(response);
        dispatch(setToken(response.data.result.accessToken));
        if (!isNaN(Date.parse(response.data.result.accessExpireTime))) {
          let expires = new Date(response.data.result.accessExpireTime);
          dispatch(setExpire(expires));
        }
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
}
