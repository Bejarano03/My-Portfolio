import React from 'react'
import ImgHero from '../../assets/mountains.jpg';
import {HeroContainer, Image} from './HeroElements';

function Hero() {
  return (
    <>
      <HeroContainer>
        <Image src={ImgHero}/>
      </HeroContainer>
    </>
  )
}

export default Hero