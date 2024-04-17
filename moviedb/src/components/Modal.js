import React from 'react';

const Modal = ({ movie, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default Modal;
