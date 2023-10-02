import React, { useEffect, useRef, useState } from 'react';
import video2 from "../../video/sadık2.mp4";
import video1 from "../../video/sadık3.mp4";
import video from "../../video/sadık.mp4";
import "./galeri_video.css"
const Galeri_video = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Videoyu otomatik olarak oynatmak için kullanılan fonksiyon
    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    // Videonun ekranın üstüne geldiğini kontrol etmek için kullanılan fonksiyon
    const checkVisibility = () => {
        if (videoRef.current) {
            const videoTop = videoRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Videonun ekranın içine geldiğini kontrol eder
            if (videoTop < windowHeight && videoTop > 0 && !isPlaying) {
                playVideo();
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, [isPlaying]);

    return (
        <>
            <div className="video-container">
                <video
                    muted
                    loop
                    autoPlay
                    ref={videoRef}
                    src={video2}
                    controls
                    width="80%"
                    height="auto"
                ></video>
            </div>

            <div className="video-container">

                <div className='video_galeri'>
                    <video ref={videoRef} src={video1} autoPlay loop muted controls
                    width="100%"
                    height="auto" />
                </div>
                <div className='video_galeri'>
                    <video ref={videoRef} src={video} autoPlay loop muted  controls
                    width="100%"
                    height="auto"/>
                </div>
                <div className='video_galeri'>
                    <video ref={videoRef} src={video} autoPlay loop muted  controls
                    width="100%"
                    height="auto"/>
                </div>


            </div>
        </>
    );
};

export default Galeri_video;
