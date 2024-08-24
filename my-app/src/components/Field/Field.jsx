import React from 'react';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { Error } from '../Error/Error';

export const Field = ({ name, title, textError, ...rest }) => {
    return (
        <div>
            <Label name={name} title={title} />
            <Input name={name} {...rest} />
            <Error textError={textError} />
        </div>
    );
};
