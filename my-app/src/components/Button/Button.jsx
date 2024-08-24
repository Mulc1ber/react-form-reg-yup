import React from 'react';

export const Button = ({ textError, submitButtonRef }) => {
    return (
        <button type="submit" disabled={!!textError} ref={submitButtonRef}>
            Отправить
        </button>
    );
};
