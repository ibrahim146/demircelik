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
            <h1 id='celikgrubu' style={{padding:"10px"}} >celik</h1>
          </div>
          <div className='altimage' style={{flexDirection:"row-reverse"}}>
            <img  data-aos="fade-left" data-aos-duration="2000" src={ortaimage} alt="" />

            <div className='imagedetail' data-aos="fade-right" data-aos-duration="2000">
              sasdasd ipsum dolor sit amet consectetur adipisicing elit. Modi amet, tempora numquam magnam cumque provident, vero, quod excepturi quas qui minus perferendis consequatur earum repellendus reiciendis autem tempore non alias.
              sasdasd Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet, tempora numquam magnam cumque provident, vero, quod excepturi quas qui minus perferendis consequatur earum repellendus reiciendis autem tempore non alias.
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Alttaraf1