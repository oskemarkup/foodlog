const timeToMinutes = time => {
  const [hours, minutes] = time.split(':');

  return hours * 60 + parseInt(minutes);
};
const sortByTime = (a, b) => timeToMinutes(b.time) - timeToMinutes(a.time);

export const getDays = state => [...(new Set(state.meals.map(meal => meal.date)))].sort().reverse();
export const getMeals = day => state => state.meals.filter(meal => meal.date === day).sort(sortByTime);
export const isModalActive = state => state.modal;
export const getModalStatus = state => state.modalStatus;
export const getStatus = state => state.status;
export const getSelectedMeal = state => state.meals.find(meal => meal._id === state.id);
export const getUserData = state => state.user;
export const getIsAuthorized = state => state.isAuthorized;
