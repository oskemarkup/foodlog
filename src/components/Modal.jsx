import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { getScrollbarWidth } from '../utils';
import { isModalActive } from "../store/selectors";
import Form from "./Form";

const Modal = ({ children }) => {
  const modalActive = useSelector(isModalActive);

  useEffect(() => {
    if (!modalActive) {
      return;
    }

    document.body.style.paddingRight = getScrollbarWidth() + 'px';
    document.body.classList.add('scroll-lock');

    return () => {
      document.body.classList.remove('scroll-lock');
      document.body.style.paddingRight = '0';
    }
  }, [modalActive]);

  if (!modalActive) {
    return null;
  }

  return (
    <div className="Modal">
      <div className="Modal-Body">
        <Form />
      </div>
    </div>
  );
};

export default Modal;
