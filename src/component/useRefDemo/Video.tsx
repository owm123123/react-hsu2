import React, { useRef } from 'react'
import dog from '../../assets/dog.mp4'

export default function Video() {
    // 若想取到tag的話,可以用useRef<HTML-XXX-Element>
    // 然後在那個標籤帶入ref={} ex: <p ref={refP}></p>
    // ref.current = 就可以取到你ref的tag,就可以做你的js操作
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleRewind = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime -= 5;

    }
    const togglePlayVideo = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }
    const handleFastForward = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime += 5;
    }

    return (
        <>
            <h1>useRef</h1>
            <video ref={videoRef} src={dog} width="350" />
            <br />
            <button onClick={handleRewind}>倒退5秒</button>
            <button onClick={togglePlayVideo}>暫停/撥放</button>
            <button onClick={handleFastForward}>快轉5秒</button>
        </>
    )
}
