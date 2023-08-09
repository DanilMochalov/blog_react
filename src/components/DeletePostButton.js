import React from 'react';

const DeletePostButton = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <button onClick={handleDelete}>Delete Post</button>
  );
};

export default DeletePostButton;
