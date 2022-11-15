import styled from 'styled-components';

export const HeroWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  hr {
    border-top: 2px solid black;
    width: 20%;
    margin: 5% 0;
  }

  &#contact {
    a {
      display: inline-block;
    }
  }
`;

export const LeftCol = styled.div`
  width: 60%;
  align-self: center;

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-top: 35%;
  }

  a {
    display: block;
    margin: 5% 0;
  }
`;

export const RightCol = styled.div`
  align-self: flex-end;
  width: 40%;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
