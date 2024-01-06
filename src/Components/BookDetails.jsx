import React from 'react';
import { useParams } from 'react-router-dom';
import { useContextApi } from '../ContextApi/ContextApi';

const BookDetails = () => {
  const { data } = useContextApi();
  const { id } = useParams();

  const selectedBook = data.find((item) => item.isbn == id);

  if (!selectedBook) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center">
      <h2 className="mt-4 mb-3">{selectedBook.title}</h2>
      <img
        src={selectedBook.thumbnailUrl}
        alt={selectedBook.title}
        className="img-fluid rounded mx-auto mb-3 d-block"
      />

      <p className="mb-3">{selectedBook.longDescription}</p>

      <div className="mb-3">
        <h6 className="mb-2">Page Count: {selectedBook.pageCount}</h6>
        <h6>Authors: {selectedBook.authors.join(', ')}</h6>
      </div>
    </div>
  );
};

export default BookDetails;
