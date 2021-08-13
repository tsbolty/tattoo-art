import { AuthApiData } from '../../interface/AuthApiData';
import { PersonalInfoProps, PersonalInfo } from '../../interface/PersonalInfo';
import axios from 'axios';
import { FetchOptions } from '../../interface/FetchOptions';
const baseUrl = 'https://vast-spire-21489.herokuapp.com/https://tattoo-art.herokuapp.com/';

export const postPersonalInfo = async (info: PersonalInfoProps): Promise<AuthApiData> => {
  return await axios
    .post(baseUrl + 'info', info)
    .then((res) => res.data)
    .catch(() => ({ error: { message: 'Failed to save personal information' } }));
};

export const getPersonalInfo = async (id: string): Promise<PersonalInfo> => {
  const fetchData: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  return await fetch(baseUrl + `info/${id}`, fetchData)
    .then((data) => data.json())
    .catch(() => ({ err: { message: 'Could not get personal info' } }));
};
