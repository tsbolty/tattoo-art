import { FetchOptions } from '../../interface/FetchOptions';
const baseUrl = 'https://vast-spire-21489.herokuapp.com/https://tattoo-art.herokuapp.com/';

const loginGoogle = async (tokenId: string): Promise<string> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tokenId }),
    credentials: 'include',
  };
  return await fetch(baseUrl + `auth/google-login`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default loginGoogle;
