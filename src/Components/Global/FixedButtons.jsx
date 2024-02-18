import React from 'react';
import topButton from '../../img/arrow-up.svg';
const FixedButtons = ({ isModalOpen, openModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ position: 'fixed', top: '50%', right: '7vw', transform: 'translateY(-50%)', textAlign: 'center' }}>
      {!isModalOpen && (
        <>
          <div style={{ backgroundColor: '#f0f0f0',  marginBottom: '3px',background: 'rgba(240, 201, 32, 0.25)',borderRadius: '10px',width:'4vw',height:'1.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <p style={{ margin: '0', color:'#F0C920',fontSize:"0.9vw",fontFamily:'Noto Sans', fontWeight:'700',marginTop:'0.25vw' }}>Click!</p>
          </div>
          
          <div>
            <button style={buttonStyle} onClick={() => console.log('버튼 1 클릭')}><div style={{fontSize:'2.2vw', marginTop:'0.3vw',marginLeft:'0.1vw'}}>💌</div></button>
          </div>

          {/* TOP 버튼 */}
          <button onClick={scrollToTop} style={{ ...buttonStyle2, marginTop: '5px' }}>
            <img src={topButton} alt="Icon" style={{ width: '1.5vw', marginTop: '0.3vw' }} />
            <span style={{ position: 'relative', top: '-9px', marginLeft:'0.1vw' }}>
              
              TOP
            </span>
          </button>
        </>
      )}
    </div>
  );
};


const buttonStyle = {
  width: '4vw',
  height: '4vw',
  borderRadius: '50%',
  margin: '5px 0',
  backgroundColor: '#F0C920',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontSize:'1.7vw',
};

const buttonStyle2 = {
  width: '4vw',
  height: '4vw',
  borderRadius: '50%',
  margin: '5px 0',
  backgroundColor: '#fff',
  color: '#52555B',
  border: '5px solid #F0C920',
  cursor: 'pointer',
  fontSize:'0.8vw',
  fontFamily:'Noto Sans',
  fontWeight:'700',
};
export default FixedButtons;
