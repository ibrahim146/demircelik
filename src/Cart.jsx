import React from 'react'
import { Link } from 'react-router-dom'
const   Cart = () => {
  return (
    
<div className='alan'>
<Link to="/çelik-konstrüksiyon-ve-ferforje-grubu" class="card" data-aos="fade-right">
  <div class="img-container">
    <div class="img">
      <img src="https://picsum.photos/id/111/600/600" alt="" />
    </div>
    <div class="description cardd">
      <span class="titlee">
      ÇELİK GRUBU
      </span>
    </div>
  </div>
</Link>

<Link to="/ofis-metal-aksamları-grubu" class="card" data-aos="fade-left">
  <div class="img-container">
    <div class="img">
      <img src="https://picsum.photos/id/115/600/600" alt="" />
    </div>
    <div class="description cardd">
      <span  class="titlee">
        CARD GRUBU
      </span>
    </div>
  </div>
</Link>



</div>
  )
}

export default Cart