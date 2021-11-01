import React, { useState, useEffect } from 'react';
import useVideos from '../hooks/useVideos';
import SearchBar from './SeachBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {
  const [videos, search] = useVideos('homes');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ margin: '10px' }}>
      <SearchBar label="Search for Videos" onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eight wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="eight wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
