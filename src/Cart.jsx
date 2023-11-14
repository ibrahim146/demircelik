import React from 'react'
import { Link } from 'react-router-dom';
import kapak from "./resim/kapak.JPEG"
import kapak1 from "./resim/kapak2.JPG"
const   Cart = () => {
  return (
    
<div className='alan'>
<Link to="/çelik-konstrüksiyon-ve-ferforje-grubu" class="card" data-aos="fade-right">
  <div className="img-container">
    <div className="img">
      <img width="100%" height="100%" src={kapak} alt="çelik grubu" />
    </div>
    <div class="description cardd">
      <span class="titlee">
      ÇELİK KONSTRÜKSİYON GRUBU
      
      </span>
    </div>
  </div>
</Link>

<Link to="/ofis-metal-aksamları-grubu" class="card" data-aos="fade-left">
  <div class="img-container">
    <div class="img">
      <img width="100%" height="100%"  src={kapak1} alt="ofis grubu" />
    </div>
    <div class="description cardd">
      <span  class="titlee">
        OFİS GRUBU
      </span>
    </div>
  </div>
</Link>



</div>
  )
}

export default Cart