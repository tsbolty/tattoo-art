import { AuthApiData } from '../../interface/AuthApiData';
import axios from 'axios';
const baseUrl = 'https://vast-spire-21489.herokuapp.com/https://tattoo-art.herokuapp.com/';

export const forgotPassword = async (email: string): Promise<AuthApiData> => {
  return axios
    .post(baseUrl + 'reset', { email: email })
    .then((res) => res.data)
    .catch(() => ({ error: { message: 'Cannot reach email' } }));
};

export const resetPassword = async (password: string, token: string, id: string): Promise<AuthApiData> => {
  return axios
    .patch(baseUrl + `reset/update-password/${id}`, { password: password, token: token })
    .then((res) => res.data)
    .catch(() => ({ error: { message: 'Unable to reset password' } }));
};

export const changePassword = async (password: string): Promise<AuthApiData> => {
  return axios
    .patch(baseUrl + 'reset/change-password', { password: password })
    .then((res) => res.data)
    .catch(() => ({ error: { message: 'Unable to change password' } }));
};
