import React  from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from "../store/actions";

const AddNew = () => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(openModal());

  return (
    <div className="AddNewButton" onClick={onClick} />
  );
};

export default AddNew;
