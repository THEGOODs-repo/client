import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "../Components/Login/LoginPage";
import FindEmail from "../Components/Login/FindEmail";
import FindPassWord from "../Components/Login/FindPassWord";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  background: rgba(249, 249, 249);
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, SetEmail] = useState("");
  const [ValidEmail, SetValidEmail] = useState(false);
  const [Password, SetPassword] = useState("");
  const [ValidPassword, SetValidPassword] = useState(false);
  const [EmailSave, SetEmailSave] = useState(false);
  const [DisplayCheckData, SetDisplayCheckData] = useState(false);
  const [DisplayPasswordError, SetDisplayPasswordError] = useState(false);

  useEffect(() => {
    var pattern = new RegExp(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    );
    SetValidEmail(pattern.test(Email));
  }, [Email]);

  useEffect(() => {
    var pattern = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
    );
    SetValidPassword(pattern.test(Password));
  }, [Password]);

  const EmailChange = (e) => {
    SetEmail(e.target.value);
  };

  const PasswordChange = (e) => {
    SetPassword(e.target.value);
  };

  useEffect(() => {
    SetValidEmail(true);
    SetValidPassword(true);
  }, []); // set bool variables to true when page init(mount)

  const fetchLogin = async () => {
    try {
      const endpoint = `https://dev.the-goods.store/api/members/login`;
      const requestBody = {
        email: Email,
        password: Password,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.isSuccess === true) {
        console.log(response);
        dispatch(setId(Email));
        dispatch(setToken(response.data.result.jwt));
        navigate("/");
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };
  return (
    <LoginContainer>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="findemail" element={<FindEmail />} />
        <Route path="resetpw" element={<FindPassWord />} />
      </Routes>
    </LoginContainer>
  );
};

export default Login;
