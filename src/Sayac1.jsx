import React, { useState, useEffect } from 'react';

function Sayac1() {
    const [sayi, setSayi] = useState(0);

    useEffect(() => {
        let isCounting = false;

        function handleScroll() {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = 10;

            if (scrollPosition <= windowHeight) {
                setSayi(0);
                isCounting = false;
            } else if (!isCounting) {
                isCounting = true;
                countUp();
            }
        }

        function countUp() {
            let interval = setInterval(() => {
                setSayi((prevSayi) => {
                    const yeniSayi = prevSayi + 1;
                    if (yeniSayi === 136) {
                        clearInterval(interval);
                    }
                    return yeniSayi;
                });
            }, 10);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='sayac-sayı'>
            <div className='number'>{sayi}</div>
            <div className='number_text'>
                <i class="fa fa-user-o" aria-hidden="true" style={{ fontSize: "20px", color: "#90ff36" }}></i>
                <div className='proje'>BİTEN PROJELER</div>
            </div>
        </div>
    );
}

export default Sayac1;
