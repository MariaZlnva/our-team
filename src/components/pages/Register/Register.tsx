import React from 'react';
import './Register.scss';
const Register: React.FC = () => {
  return (
    <div className='register__container'>
      <h1 className='register__title'>Регистрация</h1>
      <form className='register__form'>
        <label className='register__label'>
          Имя
          <input
            className='register__input'
            type='text'
            name='userName'
            required
          ></input>
          <span className='register__error'>Ошибка</span>
        </label>
        <label className='register__label'>
          Электронная почта
          <input
            className='register__input'
            type='email'
            name='email'
            required

          ></input>
          <span className='register__error'>Ошибка</span>
        </label>
        <label className='register__label'>
          Пароль
          <input
            className='register__input'
            type='password'
            name='password'
            required

          ></input>
          <span className='register__error'>Ошибка</span>
        </label>
        <label className='register__label'>
          Подтвердить пароль
          <input
            className='register__input'
            name='retryPassword'
            type='password'
            required


          ></input>
          <span className='register__error'>Ошибка</span>
        </label>
        <button
          type='submit'
          className='register__btn'
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
export default Register;
