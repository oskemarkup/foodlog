import React, { useState } from 'react';
import Card from "./Card";
import * as moment from 'moment';
import { getMeals } from '../store/selectors';
import { useSelector } from 'react-redux';
import { calculateProduct, sum, first } from '../utils';

const Day = ({ date }) => {
  const [ active, setActive ] = useState(true);
  const meals = useSelector(getMeals(date));
  const mealSums = meals.map(meal => meal.products.map(calculateProduct)).map(meal => [meal.reduce(sum), meal]);
  const daySum = mealSums.map(first).reduce(sum);
  const toggleDay = () => setActive(active => !active);

  return (
    <div className="Day">
      <div className="Day-Title" onClick={toggleDay}>
        <div className="Day-TitleLabel">{moment(date).format('DD MMMM YYYY')}</div>
        {Boolean(daySum) && <div className="Day-TitleSummary">{daySum} ккал</div>}
      </div>
      <div className={`Day-Cards${active ? '' : ' Day-Cards_hidden'}`}>
        {meals.map((meal, index) => (
          <Card
            key={meal._id}
            meal={meal}
            sums={mealSums[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Day;
