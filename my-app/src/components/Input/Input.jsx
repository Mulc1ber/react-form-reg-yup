import React from 'react';

export const Input = ({ name, type, placeholder, register }) => {
    return <input name={name} type={type} placeholder={placeholder} {...register} />;
};
