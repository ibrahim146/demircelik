import React from 'react'
import './orta.css';
import Sayac from './Sayac';
import Sayac1 from './Sayac1';
import Sayac2 from './Sayac2';
import Sayac3 from './Sayac3';


export const Orta = () => {

    return (
        <div className='ortaalan'>
            <div className='baslık'>
                <h1>celik konstrüksiyon grubu</h1>
               
                <div className='acıklama'>
                    lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar
                    lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar
                </div>
                <div className='sayac'>
                    <br />
                    <hr />
                    <div className='sayac-alan'>
                       
                        <Sayac/>
                        <Sayac1/>
                        <Sayac2/>
                        <Sayac3/>
                        
                       
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
