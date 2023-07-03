import React from 'react'
import "./alttaraf.css";
import ortaimage from "../src/image/carusel.jpg"
const Alttaraf = () => {
  return (
    <>
      <div className='altcontainer'>
        <div className='altrow'>
          <div className='altbaslık' >
            <h1 id='baslık'>demir demir celik</h1>
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

export default Alttaraf