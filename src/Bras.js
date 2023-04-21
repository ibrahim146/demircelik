import React, { useState } from 'react'
import './css.css'
const Bras = () => {
  const [barsclass, setbarsclass] = useState("open")
  return (
    <div className='barss'>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox" class="toggle" onClick={() => setbarsclass("close")}>
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
      </label>
    </div>
  )
}

export default Bras