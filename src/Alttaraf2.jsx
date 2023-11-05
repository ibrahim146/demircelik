import React from 'react'
import "./alttaraf.css";
import ortaimage from "../src/image/resimmmm.jpeg"
const Alttaraf2 = () => {
  return (
    <>
      <div className='altcontainer' data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500">

        <div className='altrow'>
          <div className='altbaslık' >
            <h1 id='ikigrubu' style={{ padding: "10px" }}>ATÖLYEMİZ</h1>
          </div>
          <div className='altimage'>
            <img style={{overflow:"hidden"}} src={ortaimage} alt="" data-aos="fade-right" data-aos-duration="2000" />

            <div style={{overflow:"hidden"}} className='imagedetail' data-aos="fade-left" data-aos-duration="2000" >
            uzun yıllardır işlettigimiz çelik  konstrüksiyon atölyemizi    bu sektörde deneyim kazanmış ve müşterilere kaliteli hizmet sunmuş   Bu atölye, çelik malzemelerin tasarımı, kesimi, işlenmesi ve montajı gibi süreçlerde uzmanlaşmıştır. Çeşitli inşaat projeleri için güvenilir ve dayanıklı çelik yapılar üretmekteyiz. çelik konstrüksiyon alanında güvenilir bir ortak olarak tanınmamızı sağlamış ve gelecekte de inşaat sektöründe önemli projelere imza atmayı sürdürmelerimizi sağlayacaktır.                 
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Alttaraf2