import { JSX, ReactNode } from 'react';
import MainLayout from '@/layouts';
import {
  BlogPostBySlugQuery,
  PostFromJsonList,
  jsonPostIntoPost,
  queryIntoPost
} from '../../types';
import SEO from '@/components/SEO';
import { Includes } from '@/components/Includes';
import Article from '@/components/Article';
import AuthorSegment from '@/components/AuthorSegment';
import RelatedPosts from '@/components/RelatedPosts';
import styled from 'styled-components';

type PageContext = {
  relatedPosts: PostFromJsonList;
};

export type PostTemplateProps = {
  data: BlogPostBySlugQuery;
  pageContext: PageContext;
  children: ReactNode | null | undefined;
};
const Wrapper = styled.div`
  display: grid;

  grid-gap: 60px;
`;
// export default PostTemplate;
const PostTemplate = (props: PostTemplateProps): JSX.Element => {
  const post = queryIntoPost(props.data, props.children);

  return (
    <MainLayout>
      <Wrapper>
        {/* <SEO post={post} /> */}
        <Article post={post} />
        <AuthorSegment />
        <RelatedPosts
          list={props.pageContext.relatedPosts.map(jsonPostIntoPost)}
        />
      </Wrapper>
    </MainLayout>
  );
};

export default PostTemplate;
export const Head = (props: PostTemplateProps): JSX.Element => {
  const post = queryIntoPost(props.data, props.children);
  return (
    <>
      <SEO post={post} />
      <Includes />
    </>
  );
};
