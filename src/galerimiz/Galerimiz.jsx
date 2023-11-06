import React from 'react';
import "./galerimiz.css";
import Galerimiz1 from '../Galerimiz1';
import resim2 from "../resim/resim.jpg";
import resim3 from "../resim/resim1.jpg";
import resim4 from "../resim/resim4.jpg";
import resim5 from "../resim/resim3.jpg";
import resim1 from "../resim/resim (5).jpg";
import resimm1 from "../resim/resim (6).jpg";
import resimm2 from "../resim/resim (7).jpg";
import resimm3 from "../resim/resim (8).jpg";
import resimm4 from "../resim/resim (9).jpg";
import resimm5 from "../resim/resim (11).jpg";
import resimm6 from "../resim/resim (12).jpg";
import resimm7 from "../resim/resim (13).jpg";
import resimm8 from "../resim/resim (14).jpg";
import resimm9 from "../resim/resim (15).jpg";
import resimm12 from "../resim/resim (19).jpg";
import resimm10 from "../resim/resim (17).jpg";
import resimm11 from "../resim/resim (18).jpg";
import Galeri_video from './galeri-video/Galeri_video';
import Foterr from '../Foterr';

const Galerimiz = () => {
  return (
    <>
      <div className='wrapper-container'>
        <div className="wrapper-images">

          <div className="images-line">
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm1} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resim2} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resim3} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resim4} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img" ><img width="100%" height="100%" src={resim5} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line" >
              <div className="img" ><img width="100%" height="100%" src={resimm12} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img" ><img width="100%" height="100%" src={resimm2} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img" ><img width="100%" height="100%" src={resimm3} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
          </div>
          <div className="images-line">
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm4} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>

            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm5} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>

            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm6} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>

            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm7} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resimm8} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm9} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm10} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resimm11} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
          </div>

          <div className="images-line">
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm12} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>

            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm3} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resimm6} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" >
              <div className="img" ><img width="100%" height="100%" src={resim1} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img" ><img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal" alt="" /></div>
            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resim2} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>

            </div>
            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resim2} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

          </div>

          <div className="images-line" id='mobile'>
            <div className="line" id='mobile' >
              <div className="img"><img width="100%" height="100%" src={resimm4} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>

            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm5} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>

            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm6} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>

            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm7} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resimm8} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" >
              <div className="img"><img width="100%" height="100%" src={resimm9} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
            <div className="line">
              <div className="img"><img width="100%" height="100%" src={resimm10} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>

            <div className="line" style={{ backgroundImage: "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)" }}>
              <div className="img"><img width="100%" height="100%" src={resimm11} alt="" style={{ backgroundRepeat: "no-repeat", objectFit: "cover" }} /></div>
            </div>
          </div>
        </div>
      </div>
      <Galerimiz1 />
      <Galerimiz1 />
      <Galeri_video />
      <Foterr />

    </>
  );
}
export default Galerimiz;
