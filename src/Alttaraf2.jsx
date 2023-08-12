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
            <h1 id='ikigrubu' style={{ padding: "10px" }}>celik celik</h1>
          </div>
          <div className='altimage'>
            <img src={ortaimage} alt="" />

            <div className='imagedetail'>
              sasdasd ipsum dolor sit amet consectetur adipisicing elit. Modi amet, tempora numquam magnam cumque provident, vero, quod excepturi quas qui minus perferendis consequatur earum repellendus reiciendis autem tempore non alias.
              sasdasd Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet, tempora numquam magnam cumque provident, vero, quod excepturi quas qui minus perferendis consequatur earum repellendus reiciendis autem tempore non alias.

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Alttaraf2