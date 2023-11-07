import { useEffect, useState } from 'react';
import Anasayfa from '../anasayfa/Anasayfa';
import { Orta } from '../Orta';
import Alttaraf1 from '../Alttaraf1';
import Alttaraf from '../Alttaraf';
import Foterr from '../Foterr';
import Alttaraf2 from '../Alttaraf2';

function Carusel() {

  const [activeIndex, setActiveIndex] = useState(0);
  let intervalId; 

  useEffect(() => {
    startTimer(); 

    return () => {
      clearInterval(intervalId); 
    };
  }, [activeIndex]);

  // Zamanlayıcıyı başlatan işlev
  function startTimer() {
    clearInterval(intervalId); 
    intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 12000);
  }
    
  // prewslide işlevini güncelle
  function prewslide() {
    if (activeIndex === 0) {
      setActiveIndex(2); 
    } else {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
    startTimer(); 
  }

  // nextslide işlevini güncelle
  function netxslide() {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    startTimer(); 
  }


  return (
    <>
      <div className='slides'>
        <div className={`slide ${activeIndex === 0 ? 'active' : ''}`}>
          <div className='slidecontainer'>
            <div className='content' style={{ color: "rgba(81, 81, 206, 0.81)" }}>
              <h1>çelik grubu</h1>
              <p>Çelik konstrüksiyon, yapıların inşası için çelik malzemenin kullanıldığı bir inşaat yöntemidir. Bu yöntem, çelik profiller, çubuklar ve plakalar gibi çelik malzemelerin kullanılmasını içerir. Çelik konstrüksiyon, yapıların dayanıklılığını, hafifliğini ve mukavemetini artırma amacıyla tercih edilir. Ayrıca, çelik yapılar hızlı bir şekilde inşa edilebilir,  </p>
              <button className="continue-application">
                <div>
                  <div className="pencil"></div>
                  <div className="folder">
                    <div className="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div className="paper"></div>
                  </div>
                </div>
                <a href="#demirgrubu" >incele</a>
              </button>
            </div>
          </div>
        </div>

        <div className={`slide ${activeIndex === 1 ? 'active' : ''}`}>
          <div className='slidecontainer'>
            <div className='content' style={{ color: "rgba(81, 81, 206, 0.81)" }}>
              <h1>çatı grubu</h1>
              <p>Çatı işleri, binaların çatılarının inşası, bakımı ve onarımını içeren. Bu işler, su yalıtımı, çatı kaplama malzemelerinin seçimi, çatı izolasyonu, çatı onarımları ve yenilemeleri gibi çeşitli hizmetleri sunar.</p>
              <button className="continue-application">
                <div>
                  <div className="pencil"></div>
                  <div className="folder">
                    <div className="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div className="paper"></div>
                  </div>
                </div>
                <a href="#celikgrubu" >incele</a>
              </button>
            </div>
          </div>
        </div>

        <div className={`slide ${activeIndex === 2 ? 'active' : ''}`}>
          <div className='slidecontainer'>
            <div className='content' style={{ color: "rgba(81, 81, 206, 0.81)" }}>
              <h1>atölyemiz</h1>
              <p>15 yıllık bir çelik konstrüksiyon atölyemiz uzun yıllardır bu sektörde deneyim kazanmış ve müşterilerimize kaliteli hizmet sunmuş bir işletmeyiz. Atölyemizde çelik malzemelerin tasarımı, kesimi, işlenmesi ve montajı gibi süreçlerde uzmanlaşmıştır.</p>
              <button className="continue-application">
                <div>
                  <div className="pencil"></div>
                  <div className="folder">
                    <div className="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div className="paper"></div>
                  </div>
                </div>
                <a href="#ikigrubu" >incele</a>
              </button>
            </div>
          </div>
        </div>
        <div className='control'>
          <div className='prew' onClick={(() => { prewslide() })}>
            <i className='fa fa-arrow-left'></i>
          </div>

          <div className='next' onClick={(() => { netxslide() })}>
            <i className='fa fa-arrow-right'></i>
          </div>
        </div>
      </div>

      <Orta />
      <Anasayfa />
      <Alttaraf />
      <Alttaraf1 />
      <Alttaraf2 />

      <Foterr />

    </>
  );
}

export default Carusel;
