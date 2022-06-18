import React from 'react'
import ImgHero from '../../assets/mountains.jpg';
import {HeroContainer, HeroContent, HeroH1, HeroP, Image} from './HeroElements';

function Hero() {
  return (
    <>
      <HeroContainer>
        <Image src={ImgHero}/>
        <HeroContent>
          <HeroH1>“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”</HeroH1>
          <HeroP>
            - Antoine de Saint-Exupery
          </HeroP>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero