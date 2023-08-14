import styled, { css } from 'styled-components';

interface ProgressBarProps {
  color: string;
  percentage: number;
}

const Bar = styled.div<{ $width: number; $color: string }>`
  height: 100%;
  width: ${(props) => `${props.$width}%`};
  background-color: ${(props) => `${props.$color}`};
`;
const BarWrapper = styled.div<{ $color: string }>`
  width: 100%;
  height: 1rem;

  border: ${(props) => `1px solid ${props.$color}`};
`;

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <BarWrapper $color={props.color} {...props}>
      <Bar $width={props.percentage} $color={props.color}></Bar>
    </BarWrapper>
  );
};
