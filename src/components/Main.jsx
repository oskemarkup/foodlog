import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadMeals } from "../store/actions";
import { getStatus } from "../store/selectors";

import Spinner from "./Spinner";
import Header from "./Header";
import Content from "./Content";
import AddNew from "./AddNew";
import Modal from "./Modal";

const Main = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(loadMeals());
  }, []);

  if (status === 'loading') {
    return <Spinner />;
  } else if (status === 'error') {
    return 'Ошибка';
  }

  return (
    <div className="App">
      <Header />
      <Content />
      <AddNew />
      <Modal />
    </div>
  );
};

export default Main;
