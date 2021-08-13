import { FetchOptions } from '../../interface/FetchOptions';
import { AuthApiCustomerData } from '../../interface/AuthApiData';
import { User } from '../../interface/User';
const baseUrl = 'https://vast-spire-21489.herokuapp.com/https://tattoo-art.herokuapp.com/';

export const createStripeUser = async (email: string, name: string): Promise<AuthApiCustomerData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name }),
    credentials: 'include',
  };
  return await fetch(baseUrl + `stripe/`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const retrieveStripeUser = async (id: string): Promise<AuthApiCustomerData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(baseUrl + `stripe/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const setUpIntents = async (id: string): Promise<AuthApiCustomerData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
    credentials: 'include',
  };
  return await fetch(baseUrl + `stripe/setup`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const createPaymentMethod = async (
  type: string,
  card: Record<string, unknown>,
): Promise<AuthApiCustomerData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, card }),
    credentials: 'include',
  };
  return await fetch(baseUrl + `stripe/payment`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const createPaymentSession = async (priceId: string): Promise<AuthApiCustomerData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId }),
    credentials: 'include',
  };
  return await fetch(baseUrl + `stripe/session`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const createCharge = async (customerId: string): Promise<AuthApiCustomerData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ customerId }),
    credentials: 'include',
  };
  return await fetch(baseUrl + `stripe/charge`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const addCardToCustomer = async (cardId: string, stripeId: string): Promise<AuthApiCustomerData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cardId, stripeId }),
    credentials: 'include',
  };
  return await fetch(baseUrl + `stripe/stripeToken`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to Stripe. Please try again' },
    }));
};
