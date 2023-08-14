import { StyledIcon } from '@styled-icons/styled-icon';
import { ReactNode } from 'react';

export interface SkillSet {
  title: string;
  time: string;
  icon: ReactNode;
  iconColor?: string;
  skill: number;
  desire: number;
  subSkills: string[];
  footNotes: string;
}

export interface SkillSetGroup {
  name: string;
  description: string;
  skills: SkillSet[];
}
