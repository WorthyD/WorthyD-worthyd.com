import { JSX } from 'react';
//import styled from 'styled-components';

import styled from 'styled-components';
import { MailSend, Rss, Cloud } from '@styled-icons/boxicons-regular';
import { Twitter, LinkedinSquare, Github } from '@styled-icons/boxicons-logos';
import { StyledIcon } from '@styled-icons/styled-icon';

import { IconLink } from '../Links';
import { SiteConfig } from '@/config/types';
import useConfig from '@/config/useConfig';

const LinkGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
`;

// Utilities
const renderLink = (
  url: string,
  label: string,
  Icon: StyledIcon
): JSX.Element => (
  <IconLink to={url} ariaLabel={label}>
    <Icon size={48} />
  </IconLink>
);

const renderTwitterLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user?.twitterName;

  if (!userName) return null;

  const url = `https://bsky.app/profile/${userName}`;
  return renderLink(url, 'Bluesky Profile', Cloud);
};

const renderGitHubLink = (config: Readonly<SiteConfig>): JSX.Element | null => {
  const userName = config.user?.github;

  if (!userName) return null;

  const url = `https://github.com/${userName}`;
  return renderLink(url, 'GitHub Profile', Github);
};

const renderLinkedInLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user?.linkedIn;

  if (!userName) return null;

  const url = `https://www.linkedin.com/in/${userName}`;
  return renderLink(url, 'LinkedIn Profile', LinkedinSquare);
};

const renderEmailLink = (config: Readonly<SiteConfig>): JSX.Element => {
  const url = `mailto:${config.user?.email || ''}`;
  return renderLink(url, 'E-Mail', MailSend);
};

const renderRssLink = (config: Readonly<SiteConfig>): JSX.Element =>
  renderLink(config.website.rss, 'RSS Feed', Rss);

type IconLinksProps = {
  includeRss?: boolean;
  className?: string;
};

const defaultProps: IconLinksProps = {
  includeRss: false
};

const UserLinks = ({
  includeRss,
  className
}: IconLinksProps): JSX.Element | null => {
  const config = useConfig();

  if (!config.user) return null;

  return (
    <LinkGrid className={className}>
      {renderTwitterLink(config)}
      {renderGitHubLink(config)}
      {renderLinkedInLink(config)} {renderEmailLink(config)}
      {includeRss && renderRssLink(config)}
    </LinkGrid>
  );
};

UserLinks.defaultProps = defaultProps;

export default UserLinks;
