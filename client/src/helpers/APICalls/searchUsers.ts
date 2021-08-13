import { FetchOptions } from '../../interface/FetchOptions';
import { SearchUsersApiData } from '../../interface/User';
const baseUrl = 'https://vast-spire-21489.herokuapp.com/https://tattoo-art.herokuapp.com/';

interface Props {
  search: string;
}

export async function searchUsers({ search }: Props): Promise<SearchUsersApiData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(baseUrl + `users?search=${search}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
