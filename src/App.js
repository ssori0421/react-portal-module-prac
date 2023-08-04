import React, { useState } from 'react';
import Modal from './components/Modal';

const modalWrapperStyle = {
  position: 'relative',
  zIndex: 1,
};

const higherIndexWrapperstyle = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'blue',
  padding: '10px',
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div style={modalWrapperStyle}>
        <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
        <div onClick={() => setIsModalOpen(false)}>
          <Modal open={isModalOpen}>
            이렇게 모달 내용을 children이라는 prop으로 전달 가능!!
          </Modal>
        </div>
      </div>
      <div style={higherIndexWrapperstyle}>z-index 2</div>
    </div>
  );
}

export default App;
