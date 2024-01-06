import React from 'react';
import { useContextApi } from '../ContextApi/ContextApi';

const CheckBoxItem = ({ option}) => {
  const {checkedOptions, setCheckedOptions} = useContextApi()

  const onChange =(opt)=>{
    if(checkedOptions.includes(opt)){
      setCheckedOptions(checkedOptions.filter(item=>item !== opt))
    }else{
      setCheckedOptions([...checkedOptions,opt])}
    }
    
  return (
    <div className="form-check m-1">
    <input
      className="form-check-input"
      type="checkbox"
      id={option}
      onChange={() => onChange(option)}
      checked={checkedOptions.includes(option)}
    />

    <label className="form-check-label" htmlFor={option}>
      {option}
    </label>
  </div>
  )
  };

export default CheckBoxItem;
