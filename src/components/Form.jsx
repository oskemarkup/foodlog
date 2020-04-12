import React   from 'react';
import { useFormik } from 'formik';
import * as moment from 'moment';
import { getSelectedMeal, getModalStatus } from "../store/selectors";
import { closeModal, createMeal, updateMeal, deleteMeal, modalFailure, modalRequest, modalSuccess } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

import { Field, FieldGroup, Select, Input, Label } from "./Field";
import Trash from "./Trash";
import Spinner from "./Spinner";

const typeLabels = {
  'portion': '1 порцию',
  'piece': '1 шт',
  'gram': '100 гр',
  'milliliter': '100 мл',
};

const quantityLabels = {
  'portion': 'порц',
  'piece': 'шт',
  'gram': 'гр',
  'milliliter': 'мл',
};

const initialProduct = {
  name: "",
  calorie: "",
  type: 'portion',
  quantity: "",
};

const Form = () => {
  const now = moment();
  const dispatch = useDispatch();
  const loading = useSelector(getModalStatus);
  const onSubmit = values => {
    const { _id, ...meal } = values;
    dispatch(modalRequest());
    dispatch(_id ? updateMeal(_id, meal) : createMeal(meal))
      .then((a,b,c) => {
        console.log('modal success', a, b, c);
        dispatch(modalSuccess())
      })
      .then((a,b,c) => {
        console.log('close modal', a, b, c);
        dispatch(closeModal())
      })
      .catch((a,b,c) => {
        console.log('error', a, b, c);
        dispatch(modalFailure());
      });
  };
  const onRemove = id => {
    dispatch(modalRequest());
    dispatch(deleteMeal(id))
      .then(() => dispatch(modalSuccess()))
      .then(() => dispatch(closeModal()))
      .catch((a,b,c) => {
        console.log('error', a, b, c);
        dispatch(modalFailure());
      });
  };
  const onReset = () => dispatch(closeModal());
  const { values, setFieldValue, handleSubmit, handleChange, handleReset } = useFormik({
    initialValues: useSelector(getSelectedMeal) || {
      name: "",
      date: now.format('YYYY-MM-DD'),
      time: now.format('HH:mm'),
      products: [{ ...initialProduct }],
    },
    onSubmit,
    onReset,
  });

  const productCount = values.products.length;

  const addProduct = () => {
    setFieldValue('products', values.products.concat({ ...initialProduct }));
  };

  const removeProduct = index => () => {
    setFieldValue('products', values.products.filter((_, productIndex) => index !== productIndex));
  };

  return (
    <form onSubmit={handleSubmit} className={`Form${loading ? ' Form_loading' : ''}`}>
      {loading && <Spinner />}
      <div className="Form-Container">
        <div className="Form-Title">
          {values._id ? 'Редактировать прием пищи' : 'Добавить прием пищи'}
        </div>
        <Field
          name="date"
          title="Дата"
          placeholder="ДД.ММ.ГГГГ"
          value={values.date}
          onChange={handleChange}
        />
        <Field
          name="time"
          title="Время"
          placeholder="ЧЧ:ММ"
          value={values.time}
          onChange={handleChange}
        />
        {Object.values(values.products).map((product, i) => {
          return (
            <div className="Form-C" key={`product-${i}`}>
              <Field
                name={`products[${i}].name`}
                title="Название"
                value={values.products[i].name}
                onChange={handleChange}
              />
              <FieldGroup title="Калорийность">
                <Input
                  value={values.products[i].calorie}
                  onChange={handleChange}
                  name={`products[${i}].calorie`}
                  first={true}
                />
                <Label>на</Label>
                <Select
                  className="w-32 Input Input_noBorder Input_noLeft"
                  value={values.products[i].type}
                  onChange={handleChange}
                  name={`products[${i}].type`}
                  last={true}
                  options={typeLabels}
                />
              </FieldGroup>
              <FieldGroup title="Количество">
                <Input
                  value={values.products[i].quantity}
                  onChange={handleChange}
                  name={`products[${i}].quantity`} first={true}
                />
                <Label last={true}>{quantityLabels[values.products[i].type]}</Label>
              </FieldGroup>
              <div className="flex justify-between">
                {(i === productCount - 1) && (
                  <button type="button" className="Form-Add" onClick={addProduct}>Добавить еще</button>
                )}
                {(productCount > 1) && (
                  <button type="button" className="Form-Remove" onClick={removeProduct(i)}>Удалить</button>
                )}
              </div>
            </div>
          )
        })}
        {(productCount > 1) && (
          <Field
            title="Название приема пищи"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        )}
      </div>
      <div className="Form-Footer">

        {values._id && (
          <button
            onClick={() => onRemove(values._id)}
            type="button"
            className="Form-RemoveItem"
          >
            <Trash className="Form-Trash" />
          </button>
        )}
        <div className="Form-Actions">
          <button type="button" onClick={handleReset} className="Form-Action Form-Action_secondary">Отмена</button>
          <button type="submit" className="Form-Action">Сохранить</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
