import React  from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getIsAuthorized } from "./store/selectors";
import { login } from "./store/actions";
import tokenStorage from "./utils/token";

import Main from './components/Main';
import Auth from './components/Auth';

function App() {
  const token = tokenStorage.getToken;
  const isAuthorized2 =  useSelector(getIsAuthorized);
  const dispatch = useDispatch();

  if (token) {
    dispatch(login());
  }

  if (isAuthorized2) {
    return (
      <Main/>
    );
  }

  return (
    <Auth />
  );
}

export default App;
