import React from 'react';

const VideoDetail = ({video}) => {
  // when the App component inititally loads up, its state is simple {video: []}
  // or an empty array. Therefore, it will pass undefined as props.video
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  // note youtube video urls are simply searched by each video's special video id
  const url = `https://www.youtube.com/embed/${videoId}`;


  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
