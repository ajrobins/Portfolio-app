import React from 'react';
import ReactPlayer from 'react-player';
import './Project.css';

function Project({ title, description, link, image, video, gif }) {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      <p>{description}</p>

      {image && <img src={image} alt={`${title} screenshot`} className="project-media" />}
      {video && (
        <div className="video-wrapper">
          <ReactPlayer url={video} controls={true} width="100%" />
        </div>
      )}
      {gif && <img src={gif} alt={`${title} gif`} className="project-media" />}

      {/* Conditionally render the link */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      )}
    
    </div>
  );
}

export default Project;
