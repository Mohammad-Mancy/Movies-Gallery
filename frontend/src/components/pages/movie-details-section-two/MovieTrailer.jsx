import React from 'react'
import YouTube from 'react-youtube'

function MovieTrailer({videoId}) {
  const opts = {
    height: '450',
    width: '700',
    playerVars: {
      autoplay: 0,
      wmode: 'opaque',
      origin: 'https://www.youtube.com'
    },}
    const onReady = (event) => {
      event.target.pauseVideo();
    }
  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
}

export default MovieTrailer