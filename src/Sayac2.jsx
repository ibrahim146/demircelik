import React, { useState, useEffect } from 'react';

function Sayac2() {
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
                    if (yeniSayi === 100) {
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
        <div data-aos="fade-up" data-aos-duration="2000" className='sayac-sayı'>

            <div>
                <div>sayac 2</div>
                <div>{sayi}+</div>
            </div>
        </div>
    );
}

export default Sayac2;
