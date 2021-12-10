import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';

function PostTags({ tags }) {
  return (
    <div className="post-tag-container">
      {tags &&
        tags.map((tag) => (
          <Link
            key={tag}
            style={{ textDecoration: 'none' }}
            to={`/blog/tags/${_.kebabCase(tag)}`}
          >
            {tag}
          </Link>
        ))}
    </div>
  );
}

export default PostTags;
