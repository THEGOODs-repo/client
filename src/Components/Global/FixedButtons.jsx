import React from "react";
import topButton from "../../img/arrow-up.svg";

const FixedButtons = ({ isModalOpen, openModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "58.5%",
        right: "7vw",
        transform: "translateY(-50%)",
        textAlign: "center",
      }}
    >
      {!isModalOpen && (
        <>
          {/* TOP 버튼 */}
          <button
            onClick={scrollToTop}
            style={{ ...buttonStyle, marginTop: "5px" }}
          >
            <img
              src={topButton}
              alt="Icon"
              style={{ width: "1.5vw", marginTop: "0.3vw" }}
            />
            <span
              style={{ position: "relative", top: "-9px", marginLeft: "0.1vw" }}
            >
              TOP
            </span>
          </button>
        </>
      )}
    </div>
  );
};

const buttonStyle = {
  width: "4vw",
  height: "4vw",
  borderRadius: "50%",
  margin: "5px 0",
  backgroundColor: "#fff",
  color: "#52555B",
  border: "5px solid #F0C920",
  cursor: "pointer",
  fontSize: "0.8vw",
  fontFamily: "Noto Sans",
  fontWeight: "700",
};
export default FixedButtons;
