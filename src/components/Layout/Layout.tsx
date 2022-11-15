import React, { ReactElement, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyles';
import Theme from '../../theme/theme';
import Navbar from '../Navbar/Navbar';
import Container from './Container';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Container>
          <>
            <Navbar />
            {children}
          </>
          );
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
