import React from 'react';
import Post from '../components/Post';
import DeletePostButton from '../components/DeletePostButton';

const PostPage = () => {
  const post = { id: 1, title: 'Example Post', content: 'This is an example post content.' };

  const handleDeletePost = () => {
    
  };

  return (
    <div>
      <h1>Post Details</h1>
      <Post post={post} />
      <DeletePostButton onDelete={handleDeletePost} />
    </div>
  );
};

export default PostPage;
