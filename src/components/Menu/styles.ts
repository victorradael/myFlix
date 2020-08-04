import styled from 'styled-components';

export const Logo = styled.img`
  max-width: 168px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const NavMenu = styled.nav`
  width: 100%;
  height: 94px;
  /* z-index: 100; */
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);
`;
