import React, { useState, useEffect } from 'react';
import CheckBoxItem from './CheckBoxItem';

const DropDown = () => {

  const options = ['Date', 'Month', 'Year', 'Time', 'Seconds'];
  const [showOptions , setShowOptions] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={()=>setShowOptions(!showOptions)}
        
      >
        Dropdown
      </button>
      {showOptions && (<ul >
        {options?.map((option,i) => (
          <li key={i}>
            <CheckBoxItem
              option = {option}
            />
          </li>
        ))}
      </ul>)}
    </div>
  );
};

export default DropDown;
