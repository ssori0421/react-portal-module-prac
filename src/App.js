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
      <div style={modalWrapperStyle}></div>
      <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div style={higherIndexWrapperstyle}>z-index 2</div>
    </div>
  );
}

export default App;
