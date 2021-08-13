import { FetchOptions } from '../../interface/FetchOptions';
import { Review } from '../../interface/User';
const baseUrl = 'https://vast-spire-21489.herokuapp.com/https://tattoo-art.herokuapp.com/';

interface review {
  artistId: string;
  rating: number;
  text: string;
}

export const getReviews = async (id: string): Promise<Review[]> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(baseUrl + `reviews/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({
      error: { message: 'Unable to get reviews', err },
    }));
};

export const getAllReviews = async (): Promise<Review[]> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(baseUrl + `reviews`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({
      error: { message: 'Unable to get reviews', err },
    }));
};

export const createReviews = async (review: review): Promise<Review> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(review),
  };
  return await fetch(baseUrl + `reviews`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({
      error: { message: 'Unable to create review', err },
    }));
};

export const deleteReview = async (id: string): Promise<number> => {
  const fetchOptions: FetchOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  return await fetch(baseUrl + `reviews/${id}`, fetchOptions)
    .then((res) => res.status)
    .catch((err) => err.status);
};
