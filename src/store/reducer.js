import { handleActions } from "redux-actions";

const initialState = {
  meals: [],
  status: null,
  modal: false,
  id: null,
  modalStatus: null,
  user: null,
  isAuthorized: null,
};

const reducer = handleActions({
  LOGIN: store => ({ ...store, isAuthorized: true }),
  LOGOUT: () => ({ ...initialState }),
  SET_USER_DATA: (store, action) => ({ ...store, user: action.payload }),

  LOAD_MEALS_REQUEST: store => ({ ...store, status: 'loading' }),
  LOAD_MEALS_SUCCESS: (store, action) => ({ ...store, meals: action.payload, status: null }),
  LOAD_MEALS_FAILURE: store => ({ ...store, status: 'failed' }),

  OPEN_MODAL: (store, action) => ({ ...store, modal: true, id: action.payload }),
  CLOSE_MODAL: store => ({ ...store, modal: false, id: null }),
  MODAL_REQUEST: store => ({ ...store, modalStatus: 'loading' }),
  MODAL_SUCCESS: store => ({ ...store, modalStatus: null }),
  MODAL_FAILURE: store => ({ ...store, modalStatus: 'failed' }),

  CREATE_MEAL_SUCCESS: (store, action) => ({
    ...store,
    meals: store.meals.concat(action.payload),
  }),

  UPDATE_MEAL_SUCCESS: (store, action) => {
    const mealIndex = store.meals.findIndex(meal => meal._id === action.payload._id);

    return {
      ...store,
      meals: Object.assign([], store.meals, { [mealIndex]: action.payload }),
    };
  },

  DELETE_MEAL_SUCCESS: (store, action) => ({
    ...store,
    meals: store.meals.filter(meal => meal._id !== action.payload._id),
  }),

}, initialState);

export default reducer;
