import React from 'react';
import './ReviewModal.css';

const ReviewModal = ({ show, handleClose, handleConfirm }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>후기 작성</h2>
        <p>받으신 상품은 마음에 드셨나요? 서비스에 대한 후기를 남겨주세요.</p>
        <div className="rating">
          <span>5.0 ★★★★★</span>
        </div>
        <div className="product-info">
          <img src="product_image_url" alt="product" />
          <div className="product-details">
            <p>케이스 스터디</p>
            <p>네온 오렌지 1개</p>
          </div>
        </div>
        <textarea placeholder="후기도 이모티콘을 넣어도 괜찮아요"></textarea>
        <button className="confirm-button" onClick={handleConfirm}>구매 확정</button>
      </div>
    </div>
  );
};

export default ReviewModal;
