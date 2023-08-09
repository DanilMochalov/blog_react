import React, { useState } from 'react';

const AddPostForm = ({ onAddPost, onEditPost, editedPost }) => {
    const [title, setTitle] = useState(editedPost ? editedPost.title : '');
    const [content, setContent] = useState(editedPost ? editedPost.content : '');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newPost = {
        title,
        content,
      };
      if (editedPost) {
        onEditPost(editedPost.id, newPost);
      } else {
        onAddPost(newPost);
      }
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />

        <label>Content:</label>
        <textarea value={content} onChange={handleContentChange} />

        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
