import React from 'react';

export const Input = ({ register, ...rest }) => {
    return <input {...register} {...rest} />;
};
