/* eslint-disable no-useless-escape */
import React, { useEffect } from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { IInput } from "../../../redux/types";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { loginUser } from "../../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import ButtonLink from "../../ButtonLink/ButtonLink";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const id = localStorage.getItem("id");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<IInput>({
    mode: "all",
    defaultValues: {
      password: "cityslicka",
      email: "eve.holt@reqres.in",
    },
  });

  // данные для логина
  // "email": "eve.holt@reqres.in",
  // "password": "cityslicka"

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    if (id) {
      dispatch(loginUser({ email, password }))
      .unwrap()
      .then(()=> {

      })
      .catch(()=> {
        setError("password", {
        type: "string",
        message: "Пользователь не найден",
      });})
    }
    return 
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (id && token && isLoggedIn) {
      navigate("/users");
    }
  }, [isLoggedIn]);

  return (
    <div className="login__container">
      <h1 className="login__title">Вход</h1>
      <form className="login__form" onSubmit={onSubmit}>
        <label className="login__label">
          Электронная почта
          <input
            className={
              errors?.email ? "login__input login__input_error" : "login__input"
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
                ? "login__error login__error_active"
                : "login__error"
            }
          >
            {errors?.email?.message || "Ошибка!"}
          </span>
        </label>
        <label className="login__label">
          Пароль
          <input
            className={
              errors?.password
                ? "login__input login__input_error"
                : "login__input"
            }
            type="password"
            {...register("password", {
              minLength: { value: 6, message: "Минимум 6 символов" },
              maxLength: {
                value: 20,
                message: "Максимально количество символов: 20",
              },
            })}
          ></input>
          <span
            className={
              errors?.password
                ? "login__error login__error_active"
                : "login__error"
            }
          >
            {errors?.password?.message || "Ошибка!"}
          </span>
        </label>
        <button
          type="submit"
          className="login__btn"
          disabled={!isDirty || !isValid}
        >
          Войти
        </button>
      </form>
      <ButtonLink text="Ещё не зарегистрированы?" textLink="Зарегистрироваться" path='/sign-up'/>
    </div>
  );
};
export default Login;
