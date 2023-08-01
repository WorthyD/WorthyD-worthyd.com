import { JSX } from 'react';

import UserLinks from '../UserLinks';
import { Caption, H3 } from '../../theme';
import { AnimatedLink } from '../Links';

import * as S from './styles';
import useConfig from '@/config/useConfig';

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.LinkGrid>
        <H3>LINKS</H3>
        <UserLinks includeRss />
      </S.LinkGrid>
      <S.Info>
        <Caption>
          Based on{' '}
          <AnimatedLink to="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </AnimatedLink>
        </Caption>
        <Caption>{config.website.copyright}</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
