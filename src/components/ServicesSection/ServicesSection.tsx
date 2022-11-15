import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  ServiceCard,
  ServiceImageContainer,
  ServicesContentSection,
  ServicesSectionWrapper,
} from './styles';
import '../../images/web-design-image-1.svg';

const ServicesSection = () => {
  return (
    <ServicesSectionWrapper id='services'>
      <h2>SERVICES</h2>
      <ServicesContentSection>
        <ServiceCard>
          <ServiceImageContainer>
            <StaticImage
              src={'../../images/web-dev-image.png'}
              alt={'web design service'}
            />
          </ServiceImageContainer>
          <h3>Web & Mobile Development</h3>
          <p>
            You already have the design and need to materialize into a real
            world digital product? Using technologies like React.js or Gatsby.js
            for web development and React Native for Hybrid app development.
          </p>
        </ServiceCard>

        <ServiceCard style={{ marginTop: '10%' }}>
          <ServiceImageContainer>
            <StaticImage
              src={'../../images/web-design-image.svg'}
              alt={'web design service'}
            />
          </ServiceImageContainer>
          <h3>Web & Mobile Design</h3>
          <p>
            Requirements study, competitive research, modern, minimal, and
            professional results for you website, plafotm, landing or mobile
            appication project.
          </p>
        </ServiceCard>
      </ServicesContentSection>
    </ServicesSectionWrapper>
  );
};

export default ServicesSection;
