import styled from 'styled-components';

import { Link as LinkIcon } from '@styled-icons/boxicons-regular';

export const Wrapper = styled.section`
  display: grid;

  grid-auto-flow: row;
  grid-gap: 8px;
`;

export const LinkWrapper = styled.div`
  display: grid;

  grid-auto-flow: column;
  grid-gap: 24px;

  align-items: center;
  align-content: center;

  @media (max-width: 404px) {
    grid-auto-flow: row;
    grid-gap: 8px;

    justify-content: center;
    justify-items: center;
  }
`;

export const Label = styled.h3`
  color: var(--color-grey-600);
  text-transform: uppercase;
`;

export const LinkGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 12px;

  & svg {
  }
`;

export const LinkButton = styled(LinkIcon)`
  cursor: pointer;
`;
