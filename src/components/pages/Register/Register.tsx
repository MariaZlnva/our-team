/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import "./Register.scss";
import { useForm } from "react-hook-form";
import { IInput } from "../../../redux/types";
import { useAppDispatch } from "../../../redux/store";
import { registerUser } from "../../../redux/userSlice";
import ButtonLink from "../../ButtonLink/ButtonLink";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<IInput>({
    mode: "all",
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });

  // для регистрации: "email": "eve.holt@reqres.in", "password": "pistol"
  const onSubmit = handleSubmit((data) => {
    if (data.password !== data.retryPassword) {
      return setError("retryPassword", {
        type: "string",
        message: "Убедитесь, что пароли совпадают",
      });
    }
    const { email, password } = data;
    if (id) {
      setIsError(true);
    }
    dispatch(registerUser({ email, password }))
      .unwrap()
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000);
      })
      .catch(() => {
        setError("retryPassword", {
          type: "string",
          message: "Что-то пошло не так. Попробуйте ещё раз",
        });
        setIsSuccess(false);
      });
  });

  return (
    <div className="register__container">
      <h1 className="register__title">Регистрация</h1>
      <form className="register__form" onSubmit={onSubmit}>
        <label className="register__label">
          Имя
          <input
            className={
              errors?.userName
                ? "register__input register__input_error"
                : "register__input"
            }
            type="text"
            {...register("userName", {
              required: "Поле не должно быть пустым",
              minLength: {
                value: 6,
                message: "Минимальное количество символов: 6 ",
              },
              maxLength: {
                value: 20,
                message: "Максимально количество символов: 20",
              },
            })}
          ></input>
          <span
            className={
              errors?.userName
                ? "register__error register__error_active"
                : "register__error"
            }
          >
            {errors?.userName?.message || "Ошибка!"}
          </span>
        </label>
        <label className="register__label">
          Электронная почта
          <input
            className={
              errors?.email
                ? "register__input register__input_error"
                : "register__input"
            }
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /[\w\.\-]+@[\w\.\-]+\.[\w\.\-]{2,}/gi,
                message: "Введите корректный Email",
              },
            })}
          ></input>
          <span
            className={
              errors?.email
                ? "register__error register__error_active"
                : "register__error"
            }
          >
            {errors?.email?.message || "Ошибка!"}
          </span>
        </label>
        <label className="register__label">
          Пароль
          <input
            className={
              errors?.password
                ? "register__input register__input_error"
                : "register__input"
            }
            type="password"
            {...register("password", {
              minLength: { value: 6, message: "Минимум 6 символов" },
              maxLength: 20,
            })}
          ></input>
          <span
            className={
              errors?.password
                ? "register__error register__error_active"
                : "register__error"
            }
          >
            {errors?.password?.message || "Ошибка!"}
          </span>
        </label>
        <label className="register__label">
          Подтвердить пароль
          <input
            className={
              errors?.retryPassword
                ? "register__input register__input_error"
                : "register__input"
            }
            type="password"
            {...register("retryPassword", {
              minLength: { value: 6, message: "Минимум 6 символов" },
              maxLength: 20,
            })}
          ></input>
          <span
            className={
              errors?.retryPassword
                ? "register__error register__error_active"
                : "register__error"
            }
          >
            {errors?.retryPassword?.message || "Ошибка!"}
          </span>
        </label>
        <button
          type="submit"
          className="register__btn"
          disabled={!isDirty || !isValid}
        >
          Зарегистрироваться
        </button>
        <span className="register__confirm">
          {isSuccess && !isError
            ? "Вы успешно зарегистрировались."
            : isError && !isSuccess && "Пользователь уже зарегистрирован"}
        </span>
      </form>
      <ButtonLink
        text="Уже зарегистрированы?"
        textLink="Войти"
        path="/sign-in"
      />
    </div>
  );
};
export default Register;
