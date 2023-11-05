import React from 'react'
import "./alttaraf.css";
import ortaimage from "../src/image/resimm.jpeg"
const Alttaraf1 = () => {
  return (
    <>
      <div className='altcontainer' data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500" style={{backgroundColor:"rgba(81, 81, 206, 0.81)", color:"white"}}>
        <div className='altroww'>
          <div className='altbaslık'>
            <h1 id='demirgrubu' style={{padding:"10px"}} >ÇELİK GRUBU</h1>
          </div>
          <div className='altimage'  style={{flexDirection:"row-reverse"}}>
            <img style={{overflow:"hidden"}}  data-aos="fade-left"  src={ortaimage} alt="" data-aos-duration="2000" />

            <div style={{overflow:"hidden"}} className='imagedetail' data-aos="fade-right" data-aos-duration="2000">
            "Çelik Konstrüksiyon Grubu" terimi genellikle özel bir şirket veya kuruluşu belirtmek yerine genel bir konstrüksiyon türünü ifade eder. Çelik konstrüksiyon, yapıların inşası için çelik malzemelerin kullanıldığı bir inşaat yöntemini ifade eder. Bu yöntem, çelik profiller, çubuklar ve plakalar gibi çelik malzemelerin kullanılmasını içerir. Çelik konstrüksiyon, yapıların dayanıklılığını, hafifliğini ve mukavemetini artırma amacıyla tercih edilir. Ayrıca, çelik yapılar hızlı bir şekilde inşa edilebilir, geniş açıklıklar ve uzun mesafeler arasında destek sağlama yeteneğine sahiptir ve deprem dayanıklılığı gibi avantajlar sunabilir. Bu nedenle, endüstriyel binalardan stadyumlara, köprülerden gökdelenlere kadar birçok farklı yapı türünde çelik konstrüksiyon kullanılmaktadır. Çelik konstrüksiyon, inşaat sektöründe yaygın bir uygulama alanı bulur ve projelerin hızlı ve maliyet etkili bir şekilde tamamlanmasına katkıda bulunabilir. Eğer belirli bir "Çelik Konstrüksiyon Grubu" hakkında bilgi arıyorsanız, bu gruba ait resmi web sitesine veya ilgili kaynaklara başvurmanız gerekebilir.
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Alttaraf1