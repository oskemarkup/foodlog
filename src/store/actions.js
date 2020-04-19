import { createAction } from 'redux-actions';

const loadMealsRequest = createAction('LOAD_MEALS_REQUEST');
const loadMealsSuccess = createAction('LOAD_MEALS_SUCCESS');
const loadMealsFailure = createAction('LOAD_MEALS_FAILURE');

const createMealSuccess = createAction('CREATE_MEAL_SUCCESS');
const updateMealSuccess = createAction('UPDATE_MEAL_SUCCESS');
const deleteMealSuccess = createAction('DELETE_MEAL_SUCCESS');

export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');
export const setUserData = createAction('SET_USER_DATA');

export const openModal = createAction('OPEN_MODAL');
export const closeModal = createAction('CLOSE_MODAL');
export const modalRequest = createAction('MODAL_REQUEST');
export const modalSuccess = createAction('MODAL_SUCCESS');
export const modalFailure = createAction('MODAL_FAILURE');

export const loadMeals = () => (dispatch, getState, tokenStorage) => {
  window.getState = getState;
  dispatch(loadMealsRequest());
    fetch(`${process.env.REACT_APP_BACKEND_URL}/read?id_token=${tokenStorage.getToken}`)
      .then(response => response.ok ? response.json() : dispatch(loadMealsFailure()))
      .then(({ error, user, data }) => {
        if (error) {
          tokenStorage.clearToken();
          return dispatch(logout());
        }
        dispatch(loadMealsSuccess(data));
        dispatch(setUserData(user));
      })
      .catch(() => dispatch(loadMealsFailure()))
};

export const createMeal = meal => (dispatch, getState, tokenStorage) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/create?id_token=${tokenStorage.getToken}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(meal),
  })
    .then(response => response.json())
    .then(response => {
      if (response.err) {
        return console.log(response.err);
      }
      return dispatch(createMealSuccess(response));
    })
    //.catch(() => dispatch(loadMealsFailure()));
};

export const updateMeal = (id, meal) => (dispatch, getState, tokenStorage) => {
  //fetch('http://localhost:5000/update?id=' + id, {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/update?id=${id}&id_token=${tokenStorage.getToken}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(meal),
  })
    .then(response => response.json())
    .then(response => {
      if (response.err) {
        return console.log(response.err);
      }
      return dispatch(updateMealSuccess(response));
    })
  //.catch(() => dispatch(loadMealsFailure()));
};

export const deleteMeal = id => (dispatch, getState, tokenStorage) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/delete?id=${id}&id_token=${tokenStorage.getToken}`, { method: 'POST' })
    .then(response => response.json())
    .then(response => {
      if (response.err) {
        return console.log(response.err);
      }
      return dispatch(deleteMealSuccess(response));
    })
  //.catch(() => dispatch(loadMealsFailure()));
};
