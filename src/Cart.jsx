import React from 'react'
import { Link } from 'react-router-dom'
const Cart = () => {
  return (
    
<div className='alan'>
<Link to="/çelikkonstrüksiyonveferforjegrubu" class="card" data-aos="fade-right">
  <div class="img-container">
    <div class="img">
      <img src="https://picsum.photos/id/111/600/600" alt="" />
    </div>
    <div class="description cardd">
      <span class="title">
        Card
      </span>
    </div>
  </div>
</Link>

<Link to="/ofismetalaksamları" class="card" data-aos="fade-left">
  <div class="img-container">
    <div class="img">
      <img src="https://picsum.photos/id/115/600/600" alt="" />
    </div>
    <div class="description cardd">
      <span  class="title">
        Card
      </span>
    </div>
  </div>
</Link>



</div>
  )
}

export default Cart