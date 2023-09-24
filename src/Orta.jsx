import React from 'react'
import './orta.css';
import Sayac from './Sayac';
import Sayac1 from './Sayac1';
import Sayac2 from './Sayac2';
import Sayaç3 from './Sayaç3';

export const Orta = () => {
    return (
        <div className='ortaalan'>
            <div className='baslık'>
                <div className='acıklama'></div>
                <div className='sayac'>
                    <div className='sayac-alan'>
                        <Sayac />
                        <Sayac2 />
                        <Sayac1 />
                        <Sayaç3 />
                    </div>
                </div>
            </div>
        </div>
    )
}
