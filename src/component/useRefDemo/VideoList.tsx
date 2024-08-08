import React, { useRef } from 'react'
import dog from '../../assets/dog.mp4'
import dog1 from '../../assets/dog1.mp4'
import dog2 from '../../assets/dog2.mp4'

const videoList = [
    { videoUrl: dog, id: 1 },
    { videoUrl: dog1, id: 2 },
    { videoUrl: dog1, id: 3 },
]

export default function VideoList() {
    const videoRefList = useRef<HTMLVideoElement[]>([]);

    const handleRewind = (index: number) => {
        if (!videoRefList.current) return;
        videoRefList.current[index].currentTime -= 5;

    }
    const togglePlayVideo = (index: number) => {
        if (!videoRefList.current) return;
        if (videoRefList.current[index].paused) {
            videoRefList.current[index].play();
        } else {
            videoRefList.current[index].pause();
        }
    }
    const handleFastForward = (index: number) => {
        if (!videoRefList.current) return;
        videoRefList.current[index].currentTime += 5;
    }

    return (
        <>
            <h1>use useRef</h1>
            {
                videoList.map(({ videoUrl, id }, index) => (
                    <div key={id} style={{ display: "inline-block", margin: "5px" }}>
                        <video
                            ref={(ele) => ele && (videoRefList.current[index] = ele)}
                            src={videoUrl}
                            width="350"
                            controls
                        />
                        <button onClick={() => handleRewind(index)}>倒退5秒</button>
                        <button onClick={() => togglePlayVideo(index)}>暫停/撥放</button>
                        <button onClick={() => handleFastForward(index)}>快轉5秒</button>
                    </div>
                ))
            }
        </>
    );
}
