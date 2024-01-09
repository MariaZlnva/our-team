import axios from 'axios';
import { IInput, IRegister, IToken } from '../types';

const API_URL = 'https://reqres.in/api/';

const register = async ({ email, password }: IInput) => {
  const response = await axios.post<IRegister>(API_URL + 'register', {
    email,
    password,
  });
  return response.data;
};

const login = async ({ email, password }: IInput) => {
  const response = await axios.post<IToken>(API_URL + 'login', {
    email,
    password,
  });
 
  return response.data;
};

const AuthService = { register, login };
export default AuthService;
