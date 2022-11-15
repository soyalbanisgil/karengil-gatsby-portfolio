import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import AboutSection from '../components/AboutSection/AboutSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import ContactSection from '../components/ContactSection/ContactSection';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
