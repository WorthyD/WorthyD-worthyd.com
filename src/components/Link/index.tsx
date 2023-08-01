import React, { JSX } from 'react';

import { Link as GatsbyLink } from 'gatsby';
import useConfig from '@/config/useConfig';
import { withBasePath } from '../../../gatsby/utils/withBasePath';

export type LinkProps = {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  to: string;
  href?: string;
  noBasePath?: boolean;
  ariaLabel?: string;
};

const Link = ({
  to,
  href,
  className,
  children,
  activeClassName,
  noBasePath,
  ariaLabel
}: LinkProps) => {
  const config = useConfig();

  const url = href || to;

  const isInternalUrl = /^\/(?!\/)/.test(url);

  // Append basePath when dealing with internal URLs
  const internalUrl = !noBasePath ? withBasePath(config, url) : url;

  return isInternalUrl ? (
    <GatsbyLink
      activeClassName={activeClassName}
      className={className}
      to={internalUrl}
      aria-label={ariaLabel}
    >
      {children}
    </GatsbyLink>
  ) : (
    <a className={className} href={url} aria-label={ariaLabel}>
      {children}
    </a>
  );
};

export default Link;
