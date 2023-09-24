import React from 'react';
import "./hakkımızda.css";
import hakkımızdaimage from "../resim/hakkımızda1.jpg"
import Foterr from '../Foterr';
const Hakkımızda = () => {
    return (
        <>
            <div className='hakkımızda_container'>
                <div className='hakkımızda_image' data-aos="flip-right" data-aos-duration="1000">

                </div>
                <div className='hakkımızda_text' data-aos="fade-left" data-aos-duration="1000">
                    <h1>hakkımızda</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit rerum, doloremque vitae repellendus incidunt eligendi! Id debitis eaque repudiandae possimus quo, iure voluptatibus beatae adipisci delectus nobis, voluptatem tenetur.
                        Iusto hic dicta excepturi sunt velit earum ex nobis aliquid quo dolorem accusantium doloribus aliquam aperiam molestiae totam nihil eligendi assumenda tempora, cupiditate, modi dolor nulla pariatur recusandae debitis? Maxime.
                        Sequi laborusquam illum consequuntur tempore nobis officia quidem dignissimos
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit rerum, doloremque vitae repellendus incidunt eligendi! Id debitis eaque repudiandae possimus quo, iure voluptatibus beatae adipisci delectus nobis, voluptatem tenetur.
                        Iusto hic dicta excepturi sunt velit earum ex nobis aliquid quo dolorem accusantium doloribus aliquam aperiam molestiae totam nihil
                    </p>
                </div>
            </div>

            <Foterr />
        </>
    )
}

export default Hakkımızda