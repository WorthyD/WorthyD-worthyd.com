import styled, { css } from 'styled-components';

import { Caption as BaseCaption } from '../../theme';
import LayoutWidthContainer from '../shared/LayoutWidthContainer';

export const SkillWrapper = styled.div`
  //display: grid;
  //grid-gap: 8px;
`;
export const skillHeader = styled.div`
  display: flex;

  align-items: center;
  gap: 0.5rem;
`;
export const SkillMeta = styled.div`
  flex: 1;
`;
export const SkillTitle = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  align-content: start;
`;

export const Caption = styled(BaseCaption)`
  color: var(--color-grey-700);
`;
export const ProgressBarWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const ProgressCaption = styled(BaseCaption)`
  color: #fff;
  font-size: 0.75rem;
  padding: 0.25rem;
`;

export const SkillGroupGrid = styled(LayoutWidthContainer)`
  display: grid;
  grid-template-columns: 100%;
  gap: 80px;
  align-content: space-between;
  justify-items: stretch;
  padding-top: 16px;
  padding-bottom: 16px;
  max-width: 1176px;
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 20px;
`;
export const SkillGrid = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;
