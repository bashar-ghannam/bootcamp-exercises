import React from 'react';
import { useState } from 'react';

const countries = ['united states', 'china', 'united kingdom', 'australia'];
const initialValues = {
  name: '',
  city: '',
  country: countries[0],
};

export default function Exercise1() {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <div>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            placeholder="name"
          />
          <input
            type="text"
            value={values.city}
            name="city"
            onChange={handleChange}
            placeholder="city"
          />
          <select
            name="country"
            id="countries"
            onChange={handleChange}
            value={values.country}
          >
            {countries.map((country) => {
              return <option value={country}>{country}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
