import React from 'react';
import ReactDOM from 'react-dom';

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

const Modal = ({ open, children }) => {
  if (!open) return null;

  // ReactDOM.createPortal(child, container)를 사용 >
  // 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링
  return ReactDOM.createPortal(
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
        {children}
        <button>모달 닫기</button>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
