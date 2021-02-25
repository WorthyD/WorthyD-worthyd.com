import React from 'react';
import { Link } from 'gatsby';

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return (
    <div>
      {
        /* Your post list here. */

        postList.map((post) => (
          <article itemScope itemType="http://schema.org/Article">
            <header>
              <h2>
                <Link to={post.path} key={post.title}>
                  {post.title}
                </Link>
              </h2>
              <small>{post.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        ))
      }
    </div>
  );
}

export default PostListing;
