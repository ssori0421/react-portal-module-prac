import React from 'react';

/* viewport의 정중앙에 모달 위치시키기 */
const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: 1000,
};

/* 모달 뒷배경 어둡게 */
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0,  0, 0.7)',
  zIndex: 1000,
};

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
        {children}
        <button onClick={onClose}>모달 닫기</button>
      </div>
    </>
  );
};

export default Modal;
