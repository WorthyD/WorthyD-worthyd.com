import styled from 'styled-components';

import { styles } from '../../theme';
import { PrimaryLink, AnimatedLink } from '../Links';

export const HomeButton = styled(PrimaryLink)`
  text-decoration: none;
  color: var(--color-text);

  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
  align-items: center;
`;

export const Wrapper = styled.header`
  color: var(--color-inverted-text);
  background: var(--color-primary);

  /* display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center; */
  padding: 16px;

  @media print {
    display: none;
  }
`;

export const Nav = styled.header`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  max-width: calc(1144px + 2 * 16px);
  margin: 0 auto;
`;

export const NavGrid = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;

  align-items: flex-start;
`;

export const SiteTitle = styled.p`
  ${styles.ButtonLabel}
  color: var(--color-inverted-text);

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavButton = styled(AnimatedLink)`
  ${styles.ButtonLabel}

  color: var(--color-inverted-text);

  &:after {
    margin: 8px 0 0 0;
    background-color: var(--color-inverted-text);
  }
  &:hover {
    color: var(--color-inverted-text);
  }
`;
