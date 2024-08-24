import React from 'react';
import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { fieldsSchema } from './utils/fieldsSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Registrations.module.css';
import { Field, Button } from './components';

export const NewRegistration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            login: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        resolver: yupResolver(fieldsSchema),
    });

    const loginError = errors.login?.message;
    const emailError = errors.email?.message;
    const passwordError = errors.password?.message;
    const repeatPasswordError = errors.repeatPassword?.message;

    const submitButtonRef = useRef(null);
    const isValid = Object.keys(errors).length === 0;

    const sendFormData = (formData) => {
        console.log(formData);
        reset();
    };

    useEffect(() => {
        if (isValid) {
            submitButtonRef.current.focus();
        }
    }, [isValid]);

    return (
        <div className={styles.Registration}>
            <div>
                <p className={styles.Title}>Регистрация с react-hook-form и yup</p>
                <form className={styles.Form} onSubmit={handleSubmit(sendFormData)}>
                    <Field
                        name={'login'}
                        title={'Логин'}
                        type={'text'}
                        placeholder={'Введите Логин'}
                        register={register('login')}
                        textError={loginError}
                    />
                    <Field
                        name={'email'}
                        title={'Эл. почта'}
                        type={'email'}
                        placeholder={'Введите эл. почту'}
                        register={register('email')}
                        textError={emailError}
                    />
                    <Field
                        name={'password'}
                        title={'Пароль'}
                        type={'password'}
                        placeholder={'Введите пароль'}
                        register={register('password')}
                        textError={passwordError}
                    />
                    <Field
                        name={'repeatPassword'}
                        title={'Повторите пароль'}
                        type={'password'}
                        placeholder={'Повторите пароль'}
                        register={register('repeatPassword')}
                        textError={repeatPasswordError}
                    />

                    <Button textError={loginError} submitButtonRef={submitButtonRef} />
                </form>
            </div>
        </div>
    );
};
