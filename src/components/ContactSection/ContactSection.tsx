import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { HeroWrapper, LeftCol, RightCol } from '../HeroSection/styles';
import { ContactSectionContainer, ContactTextContainer } from './styles';

const ContactSection = () => {
  return (
    <HeroWrapper id='contact'>
      <LeftCol>
        <h2>Schedule your discovery call!</h2>
        <p>
          Let’s talk for 15min about your project requiments, doubt, and
          discover if we are a good fit.
        </p>
        <a
          className='button'
          href='https://calendly.com/karenagiln/15min'
          target='_blank'
        >
          Schedule your call
        </a>
        <p>
          Or contact me directlty via email:{' '}
          <a
            style={{ display: 'inline-block' }}
            href='mailto:karenagiln@gmail.com'
          >
            karenagiln@gmail.com
          </a>
        </p>
        <p>
          On the web:{' '}
          <a
            href='https://www.linkedin.com/in/karenalbanisgil/'
            target='_blank'
          >
            Linkedin
          </a>{' '}
          /{' '}
          <a href='https://github.com/soyalbanisgil' target='_blank'>
            Github
          </a>{' '}
          /{' '}
          <a href='https://dribbble.com/soyalbanisgil' target='_blank'>
            Dribbble
          </a>{' '}
          /{' '}
          <a
            href='https://www.upwork.com/freelancers/~01113d29b3d3772dcf'
            target='_blank'
          >
            Upwork
          </a>
        </p>
      </LeftCol>
      <RightCol>
        <StaticImage
          src={'../../images/contact-image.png'}
          alt={'contact image'}
        />
      </RightCol>
    </HeroWrapper>
  );
};

export default ContactSection;
