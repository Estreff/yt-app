import './VideoDetail.css'
import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  const channelSrc = `https://www.youtube.com/channel/${video.snippet.channelId}`
  const published = new Date(video.snippet.publishedAt).toLocaleString()
  const postedAgo = Math.floor(
    (new Date() - Date.parse(video.snippet.publishedAt)) / (1000 * 3600 * 24),
  )

  const publishedContent =
    postedAgo < 1
      ? published
      : postedAgo === 1
      ? `Posted 1 day ago`
      : `Posted ${postedAgo} days ago`

  return (
    <div className="ui card main-view">
      <iframe
        width="100%"
        height="315"
        src={videoSrc}
        title="video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
      <div className="content">
        <a className="header" href={channelSrc}>
          {video.snippet.channelTitle}
        </a>
        <div className="meta">
          <p>{publishedContent}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
