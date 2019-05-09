import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
    const VideoListItems= props.videos.map((video) => { return <VideoListItem key={video.id} video={video} /> });

    return (VideoListItems);
};

export default VideoList;
