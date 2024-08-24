import React from 'react';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { Error } from '../Error/Error';

export const Field = ({ name, title, type, placeholder, register, textError }) => {
    return (
        <div>
            <Label name={name} title={title} />
            <Input name={name} type={type} placeholder={placeholder} register={register} />
            <Error textError={textError} />
        </div>
    );
};
