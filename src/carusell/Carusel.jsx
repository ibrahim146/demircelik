import { useEffect, useState } from 'react';
import Anasayfa from '../anasayfa/Anasayfa';
import { Orta } from '../Orta';
import Alttaraf from '../Alttaraf';



function Carusel() {

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  let index = 3;
  function prewslide() {

    if (index === 0) {
      index = 3;

    } else {
      index--;
      if (index == 0) {
        prewslide()
      }
    }
    changeslide()
  }

  // next slider *********************
  function netxslide() {

    if (index === 4) {
      index = 1;
    } else {
      index++;
      if (index === 4) {
        index = 0;
        netxslide();
      }

    }
    changeslide()
  }

  function changeslide() {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    console.log(index);
  }

  return (
    <>
      <div className='slides'>
        <div className={`slide ${activeIndex === 0 ? 'active' : ''}`}>
          <div className='slidecontainer'>
            <div className='content'>
              <h1>demir grubu</h1>
              <p>lorem ipsum dolar asdd dffsfs lorem lorem lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi tenetur voluptas fugit eos dolore inventore, doloribus accusamus. Quo vero nam consequatur quaerat hic beatae repellendus inventore, maxime magnam voluptatibus ratione.</p>
              <button class="continue-application">
                <div>
                  <div class="pencil"></div>
                  <div class="folder">
                    <div class="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div class="paper"></div>
                  </div>
                </div>
                <a href="#baslık" >incele</a>
              </button>
            </div>
          </div>
        </div>

        <div className={`slide ${activeIndex === 1 ? 'active' : ''}`}>
          <div className='slidecontainer'>
            <div className='content'>
              <h1>celik grubu</h1>
              <p>lorem ipsum dolar asdd dffsfs lorem lorem lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi tenetur voluptas fugit eos dolore inventore, doloribus accusamus. Quo vero nam consequatur quaerat hic beatae repellendus inventore, maxime magnam voluptatibus ratione.</p>
              <button class="continue-application">
                <div>
                  <div class="pencil"></div>
                  <div class="folder">
                    <div class="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div class="paper"></div>
                  </div>
                </div>
                <a href="#baslık" >incele</a>
              </button>
            </div>
          </div>
        </div>

        <div className={`slide ${activeIndex === 2 ? 'active' : ''}`}>
          <div className='slidecontainer'>
            <div className='content'>
              <h1>fefasje grubu</h1>
              <p>lorem ipsum dolar asdd dffsfs lorem lorem lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi tenetur voluptas fugit eos dolore inventore, doloribus accusamus. Quo vero nam consequatur quaerat hic beatae repellendus inventore, maxime magnam voluptatibus ratione.</p>
              <button class="continue-application">
                <div>
                  <div class="pencil"></div>
                  <div class="folder">
                    <div class="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div class="paper"></div>
                  </div>
                </div>
                <a href="#baslık" >incele</a>
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

      <Orta/>
      <Anasayfa/>
      <Alttaraf />
    </>
  );
}

export default Carusel;
