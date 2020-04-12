import React from "react";

function inputClassName(first, last, className) {
  return `Input${!first ? ' Input_noBorder Input_noLeft' : ''}${!last ? ' Input_noRight' : ''}${className ? ` ${className}` : ''}`;
}

export const Field = ({ title, name, placeholder, value, onChange }) => {
  return (
    <label className="Form-Field">
      <div className="Form-Label">{title}</div>
      <input name={name} type="text" value={value} className="Input" placeholder={placeholder} onChange={onChange} />
    </label>
  );
};

export const Select = ({ name, value, options, first = false, last = false, className = '', onChange }) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      className={inputClassName(first, last, className)}
      onChange={onChange}
    >
      {Object.entries(options).map(([key, value]) => (
        <option key={key} value={key}>{value}</option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
      </svg>
    </div>
  </div>
);

export const Label = ({ first = false, last = false, children }) => (
  <span className={inputClassName(first, last, ` Input_disabled w-auto`)}>{children}</span>
);

export const Input = ({ name, value, first = false, last = false, className = '', onChange }) => (
  <input
    type="text"
    className={inputClassName(first, last, className)}
    name={name}
    value={value}
    onChange={onChange}
  />
);

export const FieldGroup = ({ title, children }) => {
  return (
    <label className="Form-Field">
      <div className="Form-Label">{title}</div>
      <div className="flex">
        {children}
      </div>
    </label>
  );
};
