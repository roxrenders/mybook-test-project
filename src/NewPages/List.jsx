import React from 'react';
import { useContextApi } from '../ContextApi/ContextApi';


const List = ( ) => {
  const  {selectedOptions , setSelectedOptions}= useContextApi()
  return (
    <div className="card " style={{width: '150px'}}>
      <div className="card-body d-flex flex-column ">
        <h5 className="card-title mb-3">List</h5>
        <ul className="list-group list-group-flush">
          {selectedOptions.map((option, index) => (
            <li key={index} className="list-group-item">
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
