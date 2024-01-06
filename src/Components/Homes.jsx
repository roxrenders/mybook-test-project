import React from 'react';
import { Link } from 'react-router-dom';
import { useContextApi } from '../ContextApi/ContextApi';
import BookCard from './BookCard';
import Navbar from './Navbar';

export const Homes = () => {
  const { data } = useContextApi();

  return (
    <>
      <Navbar />
      <div className="row row-cols-1 row-cols-md-4">
        {data ? (
          data.map((item) => (
            <div key={item.id} className="col mb-4">
              <Link to={`/details/${item.isbn}`} className="text-decoration-none text-dark">
                <div className="box max-width-200px m-2">
                  <BookCard id={item.id} thumbnailUrl={item.thumbnailUrl} />
                  <div>
                    <h6 className="text-truncate text-ellipsis mb-1">
                      <span className="d-inline-block">{item.shortDescription}</span>
                    </h6>
                    <h6 className="text-truncate text-ellipsis mb-0">Count: {item.pageCount}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          'Loading...'
        )}
      </div>
    </>
  );
};
