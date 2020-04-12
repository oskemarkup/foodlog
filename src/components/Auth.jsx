import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { login } from '../store/actions';
import tokenStorage from "../utils/token";

const emojis = '🥕🥦🥬🍽🍴🥄🥢🍰🧁🍥🥘🍲🍜🍙🍱🍗🍖🥩🍕🍔🍟🌭🥓🧇🥞🧀🥗🥠'
  .split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/).filter(Boolean);

const Auth = () => {
  const [emojiIndex] = useState(() => Math.floor(Math.random() * emojis.length));
  const dispatch = useDispatch();

  const signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => {
      const id_token = googleUser.getAuthResponse().id_token;
      tokenStorage.setToken(id_token);
      dispatch(login());
    });
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="py-10 bg-white rounded-lg shadow-lg max-w-2xl text-center w-11/12 px-4">
        <p className="text-6xl">{emojis[emojiIndex]}</p>
        <p className="text-2xl font-semibold">FoodLog</p>
        <p className="mb-6">Супер удобное приложение для подсчета каллорий!</p>
        <button onClick={signIn} className="hover:shadow-md transition ease-in-out duration-300 px-4 py-2 rounded flex items-center mx-auto bg-gray-200 border border-gray-400 text-gray-700 font-medium">
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3">
            <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/>
            <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/>
            <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/>
            <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
          </svg>
          Войти с помощью Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
