import React from 'react';

const BookCard = ({ id, thumbnailUrl, title }) => {
  return (
    <div key={id} className="box max-width-200px m-2 height-100 d-flex flex-column overflow-hidden">
      <img
        src={thumbnailUrl}
        alt={title}
        className="img-fluid rounded mw-100 h-auto flex-1"
      />
      <div className="mt-2">
        <h6 className="overflow-hidden text-ellipsis white-space-nowrap">{title}</h6>
      </div>
    </div>
  );
};

export default BookCard;
