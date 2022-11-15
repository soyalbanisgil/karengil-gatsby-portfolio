import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { HeroWrapper, LeftCol, RightCol } from './styles';

const HeroSection = () => {
  return (
    <HeroWrapper>
      <LeftCol>
        <h1>I help you to create high quality digital products</h1>
        <hr />
        <p>
          Hi there! Karen Gil. I'm a creative developer that will help you
          materializing your idea into a Minimun Viable Product (MVP) or improve
          an existing project to increase engagement and retain potential
          clients.
        </p>
        {/* <Link className='button' to='/#portfolio'>
          Check some Projects
        </Link> */}
      </LeftCol>
      <RightCol
        data-sal='slide-up'
        data-sal-delay='300'
        data-sal-easing='ease-out-back'
      >
        <StaticImage
          src={'../../images/homepage-image.png'}
          alt={'hero image'}
        />
      </RightCol>
    </HeroWrapper>
  );
};

export default HeroSection;
