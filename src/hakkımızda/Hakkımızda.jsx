import React from 'react';
import "./hakkımızda.css";
import Foterr from '../Foterr';
const Hakkımızda = () => {
    return (
        <>
            <div className='hakkımızda_container'>
                <div className='hakkımızda_image' data-aos="flip-right" data-aos-duration="1000">

                </div>
                <div className='hakkımızda_text' data-aos="fade-left" data-aos-duration="1000">
                    <h1>hakkımızda</h1>
                    <p>"Şirketimiz, istanbul avrupa bölgesinde faaliyet gösteren köklü bir işletmedir. uzun yıllardan beri "YETİŞ METAL" adı altında müşterilerimize en kaliteli "ÇELİK KOSTRÜKSİYON VE OFİS MOBİLYA METAL AKSAMLARI" sunma misyonuyla çalışmaktayız. Deneyimli ve uzman ekibimiz
                    </p>
                    <p>hedeflerimiz doğrultusunda çalışarak müşterilerimize en iyi çözümleri sunar. Müşteri memnuniyeti bizim için öncelikli bir öneme sahiptir ve "YETİŞ METAL" olarak her zaman kalite, güvenilirlik ve uzmanlık standartlarına bağlı kalırız. 
                    </p>
                </div>
            </div>

            <Foterr />
        </>
    )
}

export default Hakkımızda