import React from 'react';

const VideoDetails = ({video}) => {
    if (!video){
        return (<div>Loading...</div>);
    }

    const videoId=video.id;
    return (
        <div>
            <div>
                <iframe src={`http://www.youtube.com/embed/${videoId}`} frameBorder="0" height="300px" width="300px" ></iframe>
            </div>
            <div>
                <div>{video.title}</div>
                <div>{video.description}</div>
            </div>
        </div>
    );
};

export default VideoDetails;
