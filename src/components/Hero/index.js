import { Box } from '@mui/system';
import React from 'react';
import {HeroWrapper, HeroH1, HeroP} from './HeroElements';

function Hero() {
  return (
    <>
      <Box
      xs={{
        width: '100%',
        display: 'flex',
        marginTop: '20px'
      }}
      >
        <HeroWrapper>
          <HeroH1>“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”</HeroH1>
          <HeroP>– Antoine de Saint-Exupery</HeroP>
        </HeroWrapper>
      </Box>
    </>
  )
}

export default Hero