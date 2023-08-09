import React from 'react';
import Post from './Post';

const BlogList = ({ posts, onEditPost, onDeletePost }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <Post post={post} />
          <button onClick={() => onEditPost(post.id, post)}>Edit</button>
          <button onClick={() => onDeletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
