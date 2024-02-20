import React, { useState } from "react";
import topButton from "../../img/arrow-up.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PreferenceBannerModal from "../Preference/BannerModal";

const FixedButtons = ({ isModalOpen, openModal }) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const choice = useSelector((state) => state.preference.choice);

  // 데이터가 있으면 해당 내용의 선호도 조사로 이동, 아니면 선호도 체크
  const handleClick = () => {
    if (choice !== "") {
      navigate(`/preference/${choice}`);
    } else {
      setModalOpen(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {modalOpen && <PreferenceBannerModal setModalOpen={setModalOpen} />}
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "7vw",
          transform: "translateY(-50%)",
          textAlign: "center",
        }}
      >
        {!isModalOpen && (
          <>
            <div
              style={{
                backgroundColor: "#f0f0f0",
                marginBottom: "3px",
                background: "rgba(240, 201, 32, 0.25)",
                borderRadius: "10px",
                width: "4vw",
                height: "1.5vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  margin: "0",
                  color: "#F0C920",
                  fontSize: "1vw",
                  fontFamily: "Noto Sans",
                  fontWeight: "700",
                }}
              >
                Click!
              </p>
            </div>

            <div>
              <button style={buttonStyle} onClick={handleClick}>
                💌
              </button>
            </div>

            {/* TOP 버튼 */}
            <button
              onClick={scrollToTop}
              style={{ ...buttonStyle2, marginTop: "5px" }}
            >
              <span style={{ position: "relative", top: "-7px" }}>
                <img
                  src={topButton}
                  alt="Icon"
                  style={{ width: "1.2vw", marginTop: "0.5vw" }}
                />
                TOP
              </span>
            </button>
          </>
        )}
      </div>
    </>
  );
};

const buttonStyle = {
  width: "4vw",
  height: "4vw",
  borderRadius: "50%",
  margin: "5px 0",
  backgroundColor: "#F0C920",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "1.7vw",
};

const buttonStyle2 = {
  width: "4vw",
  height: "4vw",
  borderRadius: "50%",
  margin: "5px 0",
  backgroundColor: "#fff",
  color: "#52555B",
  border: "4px solid #F0C920",
  cursor: "pointer",
  fontSize: "0.8vw",
  fontFamily: "Noto Sans",
  fontWeight: "700",
};
export default FixedButtons;
