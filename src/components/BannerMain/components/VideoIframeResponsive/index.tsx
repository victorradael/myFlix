import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

interface IProps {
  youtubeID: string;
}

const YouTubeIframeResponsive = ({ youtubeID }: IProps) => {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
};

export default YouTubeIframeResponsive;
