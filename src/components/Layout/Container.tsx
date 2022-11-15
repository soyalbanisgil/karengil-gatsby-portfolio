import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: any;
}

const Container = ({ children }: ContainerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 640px) {
    width: 90vw;
    /* margin-top: 5rem; */
  }
`;

export default Container;
