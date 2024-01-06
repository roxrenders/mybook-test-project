import React, { useState } from 'react';
import DropDown from './DropDown';
import List from './List';

const NewPage = () => {
  
  return (
    <div className="d-flex justify-content-around align-items-start p-4">
      <DropDown  />
      <List />
    </div>
  );
};

export default NewPage;
