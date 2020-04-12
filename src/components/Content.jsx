import React from "react";
import Day from "./Day";
import { useSelector } from "react-redux";
import { getDays, getStatus } from "../store/selectors";

const Content = () => {
  const status = useSelector(getStatus);
  const days = useSelector(getDays);

  const renderBody = () => {
    if (status === 'loading') {
      return 'Загрузка';
    } else if (status === 'error') {
      return 'Ошибка';
    }

    if (!days.length) {
      return (
        <p className="mt-5">Приемов пищи нет. Самое время добавить первый!</p>
      );
    }

    return days.map(date => (
      <Day
        key={date}
        date={date}
      />
    ));
  };

  return (
    <div className="Content">
      <div className="container mx-auto">
        {renderBody()}
      </div>
    </div>
  );
};

export default Content;
