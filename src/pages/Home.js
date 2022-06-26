import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import {resume} from '../static/Data';

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Section {...resume}/>
    </div>
  )
}

export default Home