import React from 'react';

const VideoPlayer = ({ id }) => {
  const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`;

  return (
<div>
  <div className='row'>
  <div className='col-3'>
        <div>
          <iframe title='yt-video' type="text/html" width="200" height="120"
          src={link} frameBorder="0"></iframe>
        </div>
      </div>
      <div className='col-3'>
        <div>
          <iframe title='yt-video' type="text/html" width="200" height="120"
          src={link} frameBorder="0"></iframe>
        </div>
      </div>
      <div className='col-3'>
        <div>
          <iframe title='yt-video' type="text/html" width="200" height="120"
          src={link} frameBorder="0"></iframe>
        </div>
      </div>
      <div className='col-3'>
        <div>
          <iframe title='yt-video' type="text/html" width="200" height="120"
          src={link} frameBorder="0"></iframe>
        </div>
      </div>
  </div>
</div>
  );
}

export default VideoPlayer;