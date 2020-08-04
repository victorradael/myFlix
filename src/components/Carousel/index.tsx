import React from 'react';
import {
  VideoCardGroupContainer,
  Title,
  ExtraLink,
  SliderItem,
} from './styles';
import VideoCard from './components/VideoCard';
import Slider from './components/Slider';

function Carousel({ ignoreFirstVideo, category }: any) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos &&
          videos.map((video: any, index: number) => {
            if (ignoreFirstVideo && index === 0) {
              return null;
            }

            return (
              <SliderItem key={video.titulo}>
                <VideoCard
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  categoryColor={categoryColor}
                />
              </SliderItem>
            );
          })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
