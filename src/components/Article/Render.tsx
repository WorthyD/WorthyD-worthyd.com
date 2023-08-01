import styled from 'styled-components';

// import { MDXRenderer } from 'gatsby-plugin-mdx';
import MDXTheme from './MdxTheme';

import { WrapperCss } from './Spacing';
import { Post } from '@/types';

const MDXWrapper = styled.article`
  width: 100%;
  max-width: 100%;

  overflow-x: auto;

  /* Center and space child elements */
  & > *,
  & .gatsby-highlight,
  .gatsby-resp-image-figure {
    margin-bottom: 24px;
    margin-right: auto;
    margin-left: auto;
  }

  /* Apply generic width rules to everything except images, separators and containers */
  & > *:not(figure, div, hr) {
    ${WrapperCss}
  }

  /* Apply margins for headings */
  & > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 36px;
    margin-bottom: 16px;
  }

  /* Remove bottom margin from the last child */
  & > *:last-child {
    margin-bottom: 0px;
  }
`;

type RenderProps = {
  post: Post;
};
const Render = ({ post }: RenderProps) => {
  if (!post.bodyComponent)
    throw Error(
      `Render: post data doesn't contain MDX body for rendering. Aborting. Post slug: ${post.slug}`
    );

  return (
    <MDXWrapper>
      <MDXTheme post={post} />
    </MDXWrapper>
  );
};

export default Render;
