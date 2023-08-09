import React, { useState } from 'react';
import BlogList from '../components/BlogList';
import AddPostForm from '../components/AddPostForm';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleEditPost = (postId, editedPost) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? editedPost : post
    );
    setPosts(updatedPosts);
  };
  

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };
  
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <AddPostForm onAddPost={handleAddPost} />
      <BlogList posts={posts} onEditPost={handleEditPost} onDeletePost={handleDeletePost} />
    </div>
  );
};

export default HomePage;
