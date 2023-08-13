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

        <div className='altrow' id='demirgrubu'>
          <div className='altbaslık' >
            <h1  style={{ padding: "10px" }}>celik demir celik</h1>
          </div>
          <div className='altimage'>
            <img style={{overflow:"hidden"}}  data-aos="fade-right"  data-aos-duration="2000" src={ortaimage} alt="" />

            <div style={{overflow:"hidden"}} className='imagedetail' data-aos="fade-left" data-aos-duration="2000">
              sasdasd ipsum dolor sit amet consectetur adipisicing elit. Modi amet, tempora numquam magnam cumque provident, vero, quod excepturi quas qui minus perferendis consequatur earum repellendus reiciendis autem tempore non alias.
              sasdasd Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet, tempora numquam magnam cumque provident, vero, quod excepturi quas qui minus perferendis consequatur earum repellendus reiciendis autem tempore non alias.

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Alttaraf