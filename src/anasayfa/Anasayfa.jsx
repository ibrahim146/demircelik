import './style/menu.css'
import { useEffect, useRef } from "react";
import Resim1 from './demirimage/resim1.jpg';
import Resim2 from './demirimage/resim2.jpg';
import Resim3 from './demirimage/resim3.jpg';
import Resim4 from './demirimage/resim4.jpg';
import Resim5 from './demirimage/resim5.jpg';
import Resim6 from './demirimage/resim6.jpg';
import Resim7 from './demirimage/resim7.jpg';
import Resim8 from './demirimage/resim8.jpg';
import Resim9 from './demirimage/resim9.jpg';
function Gallery() {
    const losBoxesRef = useRef(null);

    useEffect(() => {
        const losBoxes = losBoxesRef.current.querySelectorAll(".gallery-image");
        const elGallery = losBoxesRef.current.querySelector(".gallery");

        let options = {
            threshold: 0.25
        };

        let observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, intersectionRatio, boundingClientRect }) => {
                target.dataset.visible = intersectionRatio > 0.25;

                let viewportPosition = 1;
                if (intersectionRatio > 0.24) {
                    viewportPosition = 0;
                } else if (boundingClientRect.y < 0) {
                    viewportPosition = -1;
                }

                target.dataset.viewportPosition = viewportPosition;
                target.style.setProperty("--ix-ratio", intersectionRatio);
            });
        }, options);

        losBoxes.forEach((elBox) => {
            observer.observe(elBox);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>

            <main ref={losBoxesRef} className="gallery">
                <figure className="gallery-image">
                    <img className='imagega' src={Resim9} alt='sdasdda' />
                    <figcaption>giriş kapı cercevesi</figcaption>
                </figure>

                <figure className="gallery-image">
                    <img className='imagega' src={Resim2} alt='sdasdda' />
                    <figcaption>2</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim3} alt='sdasdda' />
                    <figcaption>3</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim4} alt='sdasdda' />
                    <figcaption>4</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim5} alt='sdasdda' />

                    <figcaption>5</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim6} alt='sdasdda' />

                    <figcaption>6</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim7} alt='sdasdda' />
                    <figcaption>7</figcaption>
                </figure>
                <figure  className="gallery-image">
                    <img className='imagega' src={Resim8} alt='sdasdda' />

                    <figcaption>8</figcaption>
                </figure>
                <figure className="gallery-image">
                    <img className='imagega' src={Resim1} alt='sdasdda' />

                    <figcaption>9</figcaption>
                </figure> 

            </main>


        </>
    );
}

export default Gallery;
