import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { Element } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires loader

import Sawat from '../../Images/Sawat.jpg';
import BadshahiImage from '../../Images/badshai.jpg';
import BadshahiMasjid from '../../Images/badshahiMasjid.jpg';
import Kashmir from '../../Images/Kashmir.jpg';
import SaifulMalooq from '../../Images/SaifulMalooq.jpg';
import AttabadLake from '../../Images/Attabad Lake.jpg';
import K2Image from '../../Images/K2.jpg';

const ExploreSectionContainer = tw(Element)`
    w-full
    h-screen
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
`;

const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    mt-6
    lg:mt-0
    2xl:mt-6
    2xl:mb-6
    text-gray-800
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-6
    lg:mt-4
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl
`;

const Item = styled.div`
    ${tw`
        flex
        flex-col
    `};
    img {
        ${tw`
            max-w-full
            max-h-full
        `};
    }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

export default function Explore() {
  return <ExploreSectionContainer name='Explore'>
      <Title>Explore Pakistan</Title>
      <SectionInfo>
        It’s hard to imagine a more magnificent landscape than the rugged peaks, hidden villages and wind-swept
        plains of Pakistan. Here are 20 of the most beautiful places in Pakistan, from wild mountain passes and 
        unreal lakes, to ornate mosques and ancient fortresses.
      </SectionInfo>
      <ExploreSectionWrapper>
          <Carousel dynamicHeight={false} autoPlay infiniteLoop stopOnHover showThumbs={false}>
              <Item>
                  <img src = {Sawat}/>
                  <Description>Beautiful, swat, Pakistan</Description>
              </Item>
              <Item>
                  <img src = {SaifulMalooq}/>
                  <Description> Lake saif ul malook, Pakistan</Description>
              </Item>
              <Item>
                  <img src = {Kashmir}/>
                  <Description>Kashmir, Murree, Pakistan</Description>
              </Item>
              <Item>
                  <img src = {AttabadLake}/>
                  <Description>Attabad Lake, Karakoram Mountains, Pakistan</Description>
              </Item>
              <Item>
                  <img src = {SaifulMalooq}/>
                  <Description> Lake saif ul malook, Pakistan</Description>
              </Item>
              <Item>
                  <img src = {BadshahiMasjid}/>
                  <Description> Night view, Badshahi Masjid, Lahore, Pakistan</Description>
              </Item>
          </Carousel>
      </ExploreSectionWrapper>
  </ExploreSectionContainer>
}
