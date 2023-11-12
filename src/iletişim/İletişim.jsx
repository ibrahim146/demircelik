import { useRef } from 'react';
import "./iletişim.css";
import Foterr from "../Foterr";
import emailjs from '@emailjs/browser';
const İletişim = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_allypcw', 'template_9i36ub5', form.current, 'aTGXNX5UuWlL1wWGr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  return (
    <>
      <div className='iletişim_container'>
        <div className='iletişim_location'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192679.2840248239!2d28.826051942934704!3d41.011825171829344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4dd28c889df%3A0xcb31bc1a4d01732e!2sYeti%C5%9F%20Metal!5e0!3m2!1str!2str!4v1699201619900!5m2!1str!2str" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='iletişim_text'>
          <div className="carddd" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <span className="titlee">BİZE ULAŞIN</span>
            <form ref={form} onSubmit={sendEmail} class="form">
              <div className="group">
                <input placeholder='' type="text" required="zorunlu alan" name='user_name' />
                <label htmlFor="name">İSİM</label>
              </div>
              <div className="group">
                <input placeholder='' type="text" required="zorunlu alan" name='user_surname' />
                <label htmlFor="name">SOY İSİM</label>
              </div>
              <div className="group">
                <input placeholder="" type="email" id="email" name="user_email" required="zorunlu alan" />
                <label htmlFor="">EMAİL</label>
              </div>
              <div className="group">
                <textarea placeholder="" id="comment" name="message" rows="5" required="zorunlu alan"></textarea>
                <label htmlFor="comment">MESAJINIZ...</label>
              </div>
              <button type="submit">GÖNDER</button>
            </form>
          </div>
        </div>
        <h1 style={{ display: "flex", justifyContent: "center", color: "rgba(81, 81, 206, 0.81)", marginBottom: "10px" }} data-aos="fade-up" data-aos-anchor-placement="top-bottom">İLETİŞİM BİLGİLERİ</h1>
        <div className='iletişim_text2'>
          <div className='iletişim_bilgileri' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h1><i className='fa fa-map-marker' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></i> adres</h1>
            <a target='_blank' href='https://www.google.com.tr/maps/place/Yeti%C5%9F+Metal/@41.0237183,28.8363915,17z/data=!3m1!4b1!4m6!3m5!1s0x14caa4dd28c889df:0xcb31bc1a4d01732e!8m2!3d41.0237143!4d28.8389664!16s%2Fg%2F11g7_d2nkb?hl=tr&entry=ttu' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">Barbaros, 203. Sk. 24 A, 34203 Bağcılar/İstanbul</a>
          </div>
          <div className='iletişim_bilgileri' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <h1><i className='fa fa-phone' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></i>  telefon</h1>
            <a href="tel:+095442299369" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"> 0544 229 93 69</a>
          </div>
          <div className='iletişim_bilgileri' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
            <h1><i className='fa fa-envelope' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></i> E-mail</h1>
            <a href="mailto:" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"> sadikyetis194@gmail.com</a>
          </div>

        </div>
      </div>
      <Foterr />
    </>
  )
}
export default İletişim