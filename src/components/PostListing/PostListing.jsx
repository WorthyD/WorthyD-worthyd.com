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
          <div>
            <Link to={post.path} key={post.title}>
              <h2>{post.title}</h2>
            </Link>
            <h5>{post.date}</h5>

          </div>
        ))
      }
    </div>
  );
}

export default PostListing;
