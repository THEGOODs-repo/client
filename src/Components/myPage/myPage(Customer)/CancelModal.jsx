import React from 'react';
import './CacelModal.css';

const CancelModal = ({show,handleClose,handleConfirm}) =>{
    return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>주문취소</h2>
        <hr />
        <span className="close" onClick={handleClose}>&times;</span>
        
        <p>주문을 취소하시겠습니까?</p>
        <button className="cancel-button"onClick={handleConfirm}>확인</button>
      </div>
    </div>
    )

}
export default CancelModal;