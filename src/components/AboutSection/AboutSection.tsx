import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  AboutContentSection,
  AboutSectionContainer,
  TextSectionContainer,
} from './styles';

const AboutSection = () => {
  return (
    <AboutSectionContainer id='about'>
      <h2>About</h2>
      <AboutContentSection>
        <TextSectionContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            alias deleniti, tempore ullam enim sit? Sit, fugit quibusdam? Ullam
            magni, possimus corrupti nobis saepe aperiam veritatis ea odit cum
            enim, dicta officia dolorem nam fugiat sapiente maiores totam
            aspernatur odio quod pariatur nesciunt magnam voluptates assumenda
            tempora? Quis velit necessitatibus labore recusandae et at iusto
            atque, minima non quas repudiandae veniam quibusdam? Doloremque ex
            quis numquam, ducimus nulla assumenda beatae ad consequuntur cum
            impedit repellendus, necessitatibus laudantium odio aliquid
            voluptate maiores atque qui laboriosam id officiis quisquam!
            Laudantium, aspernatur esse quia dignissimos possimus aliquam
            suscipit libero velit officiis beatae modi!
          </p>
        </TextSectionContainer>
        <StaticImage src={'../../images/about-me-image.png'} alt={''} />
      </AboutContentSection>
    </AboutSectionContainer>
  );
};

export default AboutSection;
