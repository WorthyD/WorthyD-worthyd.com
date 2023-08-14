import { mySkills } from './data';
import { SkillSetGroup, SkillSet as iSkillSet } from './types';
import * as S from './styles';
import { H5 } from '../../theme';
import { ProgressBar } from './SkillProgressBar';
import { Code } from '@styled-icons/boxicons-regular/Code';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { Tooltip } from 'react-tooltip';
interface SkillSetProps {
  skillSetGroup: SkillSetGroup;
}
interface SkillProps {
  skillSet: iSkillSet;
}

const compToolTips = [
  'I know a little about this, but would need time to become familiar again.',
  'I know something about this and can perform a simple task (may require additional research)',
  'I can perform daily tasks',
  'I can easily complete complex tasks',
  'I know a lot on this subject and would be comfortable leading an effort using this technology'
];

const Skill = (props: SkillProps) => {
  const skill = props.skillSet;
  const compToolTip = compToolTips[Math.floor(skill.skill / 20)];
  return (
    <S.SkillWrapper>
      <S.skillHeader>
        {skill.icon}
        <S.SkillMeta>
          <S.SkillTitle>
            <H5>{skill.title}</H5>
            <S.Caption>{skill.time}</S.Caption>
          </S.SkillTitle>

          <S.Caption>{skill.subSkills.join(', ')}</S.Caption>
        </S.SkillMeta>
      </S.skillHeader>
      <S.ProgressBarWrapper>
        <Code
          size={30}
          color={'var(--color-primary)'}
          data-tooltip-id="skill-tip"
          data-tooltip-content="Competency"
        />
        <ProgressBar
          percentage={skill.skill}
          color={'var(--color-primary)'}
          data-tooltip-id="skill-tip"
          data-tooltip-content={compToolTip}
        ></ProgressBar>
      </S.ProgressBarWrapper>
      {skill.desire > 0 && (
        <S.ProgressBarWrapper>
          <Heart
            size={30}
            color={'var(--color-primary)'}
            data-tooltip-id="skill-tip"
            data-tooltip-content="Interest"
          />
          <ProgressBar
            percentage={skill.desire}
            color={'var(--color-secondary)'}
          ></ProgressBar>
        </S.ProgressBarWrapper>
      )}

      <footer>{skill.footNotes}</footer>
    </S.SkillWrapper>
  );
};

const SkillSet = (props: SkillSetProps) => {
  const skillGroup = props.skillSetGroup;
  return (
    <S.SkillContainer>
      <h2 key={skillGroup.name}>{skillGroup.name}</h2>
      <h5>{skillGroup.description}</h5>

      <S.SkillGrid>
        {skillGroup.skills.map((skill, index) => {
          return <Skill key={`skill_${index}`} skillSet={skill}></Skill>;
        })}
      </S.SkillGrid>
    </S.SkillContainer>
  );
};

const SkillSets = () => {
  return (
    <S.SkillGroupGrid>
      {mySkills.map((skillGroup, i) => {
        return <SkillSet key={`skill_set_${i}`} skillSetGroup={skillGroup} />;
      })}
      <Tooltip id="skill-tip" />
    </S.SkillGroupGrid>
  );
};
export default SkillSets;
