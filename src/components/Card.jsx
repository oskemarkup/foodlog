import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/actions';
import { plural } from '../utils';

const locales = {
  quantity: {
    'portion': ['порция', 'порции', 'порций'],
    'piece': 'шт',
    'milliliter': 'мл',
    'gram': 'гр',
  },
  calorie: {
    'portion': 'ккал / порция',
    'piece': 'ккал / шт',
    'milliliter': 'ккал / 100 мл',
    'gram': 'ккал / 100 гр',
  },
};

const getLocale = (count, field, type) => {
  if (!locales[field] || !locales[field][type]) {
    return count;
  }

  return `${count} ${Array.isArray(locales[field][type]) ? plural(locales[field][type], count) : locales[field][type]}`;
};

const CardProduct = ({ name, quantity, calorie, amount, design, type }) => (
  <div className={`Card-Product Card-Product_${design}`}>
    <div className="Card-ProductInfo">
      <div className="Card-ProductInfo2">
        <div className="Card-ProductName">{name.substr(0, 500)}</div>
        {quantity && <div className="Card-ProductQuantity">{getLocale(quantity, 'quantity', type)}</div>}
      </div>
      {calorie && <div className="Card-ProductCalorie">{getLocale(calorie, 'calorie', type)}</div>}
    </div>
    {Boolean(amount) && <div className={`Card-ProductSummary Card-ProductSummary_${design}`}>{amount} ккал</div>}
  </div>
);

const Card = ({ meal, sums }) => {
  const { _id, name, time, products } = meal;
  const [mealSum, productSums] = sums;
  const dispatch = useDispatch();
  const onClick = () => dispatch(openModal(_id));

  return (
    <div className={`Card${productSums.some(el => !el) ? ' Card_draft' : ''}`} onClick={onClick}>
      <div className="Card-Title">
        {Boolean(time) && <div className="Card-Time">{time}</div>}
        <CardProduct
          name={products.length === 1 ? products[0].name : name}
          quantity={products.length === 1 ? products[0].quantity : null}
          calorie={products.length === 1 ? products[0].calorie : null}
          type={products.length === 1 ? products[0].type : null}
          amount={mealSum}
          design="alt"
        />
      </div>
      {(products.length > 1) && (
        <div className="Card-Products">
          {products.map((product, index) => (
            <CardProduct
              key={`${product.name}-${index}`}
              name={product.name}
              quantity={product.quantity}
              calorie={product.calorie}
              type={product.type}
              amount={productSums[index]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
