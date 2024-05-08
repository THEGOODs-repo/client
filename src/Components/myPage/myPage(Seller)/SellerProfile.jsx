import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FEFDFD",
    },
  },
  typography: {
    fontFamily: "Noto Sans",
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 500;
          line-height: 22px;
          color: #202123;}
          
      `,
    },
  },
});

const options = [
  "오후 12시",
  "오후 1시",
  "오후 2시",
  "오후 3시",
  "오후 4시",
  "오후 5시",
  "오후 6시",
  "오후 7시",
  "오후 8시",
  "오후 9시",
  "오후 10시",
  "오후 11시",
  "오전 12시",
  "오전 1시",
  "오전 2시",
  "오전 3시",
  "오전 4시",
  "오전 5시",
  "오전 6시",
  "오전 7시",
  "오전 8시",
  "오전 9시",
  "오전 10시",
  "오전 11시",
];

export default function SellerProfile() {
  const [correctionBtn, setCorrectionBtn] = useState(null);
  const [checkBox, setCheckBox] = useState(null);
  const [openLeft, setOpenLeft] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);
  const anchorRefLeft = React.useRef(null);
  const anchorRefRight = React.useRef(null);
  const [selectedIndexLeft, setSelectedIndexLeft] = React.useState(12);
  const [selectedIndexRight, setSelectedIndexRight] = React.useState(0);

  const correctionHandler = (e) => {
    if (correctionBtn === null) {
      setCorrectionBtn(true);
    } else if (correctionBtn === true) {
      setCorrectionBtn(null);
    }
  };

  const checkBoxHandler = (e) => {
    if (checkBox === null) {
      setCheckBox(true);
    } else if (checkBox === true) {
      setCheckBox(null);
    }
  };

  const handleClickLeft = () => {
    console.info(`You clicked ${options[selectedIndexLeft]}`);
  };

  const handleClickRight = () => {
    console.info(`You clicked ${options[selectedIndexRight]}`);
  };

  const handleMenuItemLeftClick = (event, index) => {
    setSelectedIndexLeft(index);
    setOpenLeft(false);
  };

  const handleMenuItemRightClick = (event, index) => {
    setSelectedIndexRight(index);
    setOpenRight(false);
  };

  const handleToggleLeft = () => {
    setOpenLeft((prevOpen) => !prevOpen);
  };

  const handleToggleRight = () => {
    setOpenRight((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRefLeft.current && anchorRefLeft.current.contains(event.target)) {
      return;
    }

    if (
      anchorRefRight.current &&
      anchorRefRight.current.contains(event.target)
    ) {
      return;
    }

    setOpenLeft(false);
    setOpenRight(false);
  };

  return (
    <MainContainer>
      <h1>판매자 정보</h1>
      <h2>개인 판매자 정보</h2>

      <label>
        <h3>이메일</h3>
        <InputEmail type="email" placeholder="이메일 주소를 입력해주세요." />
      </label>

      <label>
        <h3>본인 인증</h3>
        <InputCertification
          type="text"
          placeholder="본인 인증할 번호를 입력해주세요."
        />
        <CertificationBtn>인증하기</CertificationBtn>
      </label>

      <h2>계좌 관리</h2>
      <AddAcountBtn>계좌 추가하기</AddAcountBtn>

      <h2>연락 가능 시간</h2>
      <TimeContainer>
        {/* 수정버튼을 눌렀는가? */}
        {correctionBtn ? (
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <ButtonGroup
                variant="contained"
                ref={anchorRefLeft}
                aria-label="split button"
              >
                <Button
                  disabled={checkBox}
                  sx={{ width: 90, padding: 0.5, borderRight: 0 }}
                  onClick={handleClickLeft}
                >
                  {options[selectedIndexLeft]}
                </Button>
                <Button
                  disabled={checkBox}
                  sx={{ width: 0, padding: 0, borderLeft: 0 }}
                  size="small"
                  aria-controls={openLeft ? "split-button-menu" : undefined}
                  aria-expanded={openLeft ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggleLeft}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <h4>부터</h4>
              <Popper
                sx={{
                  zIndex: 1,
                }}
                open={openLeft}
                anchorEl={anchorRefLeft.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              selected={index === selectedIndexLeft}
                              onClick={(event) =>
                                handleMenuItemLeftClick(event, index)
                              }
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </React.Fragment>
          </ThemeProvider>
        ) : // 수정버튼을 안 눌렀을 경우 && "상시가능"이 체크되었는가?
        checkBox ? (
          <Label
            style={{
              marginRight: "210px",
              marginLeft: "5px",
              display: "flex",
              fontSize: "16px",
              fontWeight: "bolder",
            }}
          >
            상시가능
          </Label>
        ) : (
          <div style={{ display: "flex", flexDirection: "row", margin: "0px" }}>
            <Label
              style={{
                width: "70px",
                fontSize: "16px",
                fontWeight: "bolder",
                margin: "24.94px 0px",
              }}
            >
              {options[selectedIndexLeft]}
            </Label>
            <h4 style={{ width: "35px", marginTop: "24px" }}>부터</h4>
          </div>
        )}

        {/* 수정버튼을 눌렀는가? */}
        {correctionBtn ? (
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <ButtonGroup
                variant="contained"
                ref={anchorRefRight}
                aria-label="split button"
              >
                <Button
                  disabled={checkBox}
                  sx={{ width: 90, padding: 0.5, borderRight: 0 }}
                  onClick={handleClickRight}
                >
                  {options[selectedIndexRight]}
                </Button>
                <Button
                  disabled={checkBox}
                  sx={{ width: 0, padding: 0, borderLeft: 0 }}
                  size="small"
                  aria-controls={openRight ? "split-button-menu" : undefined}
                  aria-expanded={openRight ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggleRight}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <h4>까지</h4>
              <Popper
                sx={{
                  zIndex: 1,
                }}
                open={openRight}
                anchorEl={anchorRefRight.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              selected={index === selectedIndexRight}
                              onClick={(event) =>
                                handleMenuItemRightClick(event, index)
                              }
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </React.Fragment>
          </ThemeProvider>
        ) : // 수정버튼을 안 눌렀을 경우 && "상시가능"이 체크되었는가?
        checkBox ? (
          <Label
            style={{
              fontSize: "18px",
              fontWeight: "bolder",
              marginRight: "0px",
            }}
          ></Label>
        ) : (
          <div style={{ display: "flex", flexDirection: "row", margin: "0px" }}>
            <Label
              style={{
                width: "70px",
                fontSize: "16px",
                fontWeight: "bolder",
                margin: "24.94px 0px",
              }}
            >
              {options[selectedIndexRight]}
            </Label>
            <h4 style={{ width: "90px", marginTop: "24px" }}>까지 연락가능</h4>
          </div>
        )}
        {correctionBtn ? (
          <React.Fragment>
            <div style={{ position: "relative" }}>
              <CheckBox
                type="checkbox"
                checked={checkBox}
                onClick={checkBoxHandler}
              />
              <Label style={{ position: "relative", top: "-4px" }}>
                상시가능
              </Label>
            </div>
          </React.Fragment>
        ) : (
          <Label></Label>
        )}

        {/* 수정버튼이 눌린 경우 버튼의 상태 */}
        {correctionBtn ? (
          <React.Fragment>
            <CorrectionBtn onClick={correctionHandler}>저장</CorrectionBtn>
          </React.Fragment>
        ) : (
          <CorrectionBtn
            onClick={correctionHandler}
            style={{ marginLeft: "220px" }}
          >
            수정
          </CorrectionBtn>
        )}
      </TimeContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 717.75px;
  height: 1100px;
  border: 2.475px solid rgba(0, 0, 0, 0.05);

  h1 {
    align-self: flex-start;
    margin-top: 33px;
    margin-left: 28.875px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 21.45px;
    line-height: 29.925px;
    color: #202123;
  }

  h2 {
    margin: 10px 0px 0px 5%;
    align-self: flex-start;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;

    color: #202123;
  }

  h3 {
    margin-bottom: 10px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #52555b;
  }
`;

const InputEmail = styled.input`
  width: 618.75px;
  height: 33px;
  margin-bottom: 6.6px;
  border: 0.825px solid rgba(156, 156, 156, 0.66);
  border-radius: 4.125px;
  padding-left: 8.25px;

  &::placeholder {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12.375px;
    line-height: 16.5px;
    color: #9c9c9c;
  }
`;

const InputCertification = styled.input`
  width: 513.375px;
  height: 33px;
  margin-bottom: 8.25px;
  border: 0.825px solid rgba(156, 156, 156, 0.66);
  border-radius: 4.125px;
  padding-left: 8.25px;

  &::placeholder {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12.375px;
    line-height: 16.5px;
    color: #9c9c9c;
  }
`;

const Label = styled.label`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13.2px;
  line-height: 18.15px;
  color: #202123;
`;

const CheckBox = styled.input`
  width: 16.5px;
  height: 16.5px;
  margin-left: 80px;
`;

const CertificationBtn = styled.button`
  width: 99px;
  height: 36px;
  margin-left: 2.475px;
  margin-bottom: 16.5px;
  border: none;
  background: #f0c920;
  border-radius: 4.125px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12.375px;
  line-height: 16.5px;
  text-align: center;
  color: #ffffff;
`;

const AddAcountBtn = styled.button`
  width: 628px;
  height: 41.25px;
  margin-top: 16.5px;
  margin-left: 5px;
  margin-bottom: 16.5px;
  background: rgba(217, 217, 217, 0.165);
  border: 0.825px solid rgba(156, 156, 156, 0.66);
  border-radius: 4.125px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12.375px;
  line-height: 16.5px;
  color: #52555b;
`;

const TimeContainer = styled.div`
  display: flex;
  width: 615px;
  height: 66px;
  padding: 8.25px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 16.5px;
  margin-left: 10px;
  border: 0.825px solid rgba(156, 156, 156, 0.66);
  box-shadow: 2.475px 2.475px 6.6px 1.65px rgba(0, 0, 0, 0.0825);
  border-radius: 8.25px;

  h4 {
    margin-left: 5px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14.85px;
    line-height: 20.475px;
    color: #52555b;
  }
`;

const CorrectionBtn = styled.button`
  width: 58px;
  height: 31.35px;
  background: #f0c920;
  border: 0.825px solid rgba(156, 156, 156, 0.05);
  box-shadow: 0px 0px 4.125px 1.65px rgba(0, 0, 0, 0.05);
  border-radius: 8.25px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 11.55px;
  line-height: 15.975px;
  color: #ffffff;
`;
