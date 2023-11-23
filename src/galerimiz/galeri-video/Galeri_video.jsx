import video2 from "../../video/sadık2.mp4";
import video1 from "../../video/sadık3.mp4";
import video from "../../video/sadık.mp4";
import video4 from "../../video/sadık4.mp4";
import "./galeri_video.css"
import { useRef } from "react";
const Galeri_video = () => {
    const videoRef = useRef(null);
    
    return (
        <>
            <div className="video-container">
            <video className="galeri__video" ref={videoRef} src={video2} autoPlay loop muted controls height="auto" />
            </div>
            <div className="video-container">
                <div className='video_galeri'>
                    <video ref={videoRef} src={video1} autoPlay loop muted controls
                        width="100%"
                        height="auto" />
                </div>
                <div className='video_galeri'>
                    <video ref={videoRef} src={video} autoPlay loop muted controls
                        width="100%"
                        height="auto" />
                </div>
                <div className='video_galeri'>
                    <video ref={videoRef} src={video4} autoPlay loop muted controls
                        width="100%"
                        height="auto" />
                </div>
            </div>
        </>
    );
};

export default Galeri_video;
