import React, { useEffect } from 'react'
import "./alttaraf.css";
import AOS from 'aos';
import ortaimage from "../src/image/resimem.jpeg"
const Alttaraf = () => {
  useEffect(() => {
    AOS.init();
  },[])   
  return (

    <>
      <div className='altcontainer' >

        <div className='altrow' id='celikgrubu'>
          <div className='altbaslık' >
            <h1  style={{ padding: "10px" }}>ÇATI GRUBU</h1>
          </div>
          <div className='altimage'>
            <img style={{overflow:"hidden"}}  data-aos="fade-right"  data-aos-duration="2000" src={ortaimage} alt="" />

            <div style={{overflow:"hidden"}} className='imagedetail' data-aos="fade-left" data-aos-duration="2000">
            demir malzemelerin kullanıldığı çatı işleri ve konstrüksiyon işlerine odaklanan bir projeyi ifade eder.şirketimiz  demir profilleri, çubukları ve plakaları kullanarak çatıların inşası ve onarımı gibi hizmetler sunar. Demir çatılar genellikle dayanıklılık ve mukavemet için tercih edilir. İlgili bir demir çatı grubu hakkında daha fazla bilgi edinmek için bizimle iletişime geçebilirsiniz

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Alttaraf