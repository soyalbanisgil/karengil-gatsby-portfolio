import styled from 'styled-components';
import Theme from '../../theme/theme';

export const NavbarWrapper = styled.nav`
  margin: 0 auto;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: ${Theme.colors.secondaryColor};

  @media screen and (max-width: 640px) {
    font-size: 5px !important;
    padding: 2.5% 0;
    gap: 1rem;
  }
`;
