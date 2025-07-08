import React from 'react';
import BannerVideo from "../assets/BannerVideo.mp4"
import PokemonSearch from './PokemonSearch';


const BackgroundVideoBanner = () => {
  return (
    <div className="video-banner-container ">
    <video
      className="video-banner"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={BannerVideo} type="video/mp4" />

    </video>
    <div className='video-overlay'>
    <PokemonSearch/>
    </div>
  </div>
  );
}

export default BackgroundVideoBanner;
