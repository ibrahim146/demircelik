import React from 'react';
import "./iletişim.css";
import Foterr from "../Foterr";
const İletişim = () => {
  return (
    <>
      <div className='iletişim_container'>
        <div className='iletişim_location'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3210880756!2d28.68252841066151!3d41.00537021148323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1695068366446!5m2!1str!2str" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='iletişim_text'>

          <div class="carddd">
            <span class="titlee">BİZE YAZIN</span>
            <form class="form">
              <div class="group">
                <input placeholder='' type="text" required="" />
                <label for="name">İSİM</label>
              </div>
              <div class="group">
                <input placeholder='' type="text" required="" />
                <label for="name">SOY İSİM</label>
              </div>
              <div class="group">
                <input placeholder="" type="email" id="email" name="email" required="" />
                <label for="">EMAİL</label>
              </div>
              <div class="group">
                <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
                <label for="comment">MESAJINIZ...</label>
              </div>
              <button type="submit">GÖNDER</button>
            </form>
          </div>


        </div>

        <div className='iletişim_text'>
         <h1>DEVAMI</h1>
        </div>
      </div>

      <Foterr />
    </>
  )
}

export default İletişim