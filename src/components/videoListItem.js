import React from 'react';

const VideoListItem = (props) => {
    return (
        <li>
            <img src={props.video.thumbnails.default.url} alt=""/>
            {props.video.title}
        </li>
    );
};

export default VideoListItem;