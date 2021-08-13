import { FetchOptions } from '../../interface/FetchOptions';
import { Submission } from '../../interface/User';
import { submissionByArtist } from '../../interface/User';
const baseUrl = 'https://vast-spire-21489.herokuapp.com/https://tattoo-art.herokuapp.com/';

export const uploadSubmissionPic = async (file: FormData): Promise<string> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    credentials: 'include',
    body: file,
  };
  return await fetch(baseUrl + `upload/submission`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const createSubmission = async (images: string[], contestId: string): Promise<Submission> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(images),
  };
  return await fetch(baseUrl + `submission/${contestId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const getContestSubmissions = async (contestId: string): Promise<Submission[]> => {
  const fetchData: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  return await fetch(baseUrl + `submission/${contestId}`, fetchData)
    .then((data) => data.json())
    .catch((err) => ({ error: { message: 'Could not find Contest.' } }));
};

export const getUserSubmissions = async (): Promise<Submission[]> => {
  const fetchData: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  return await fetch(baseUrl + `submission`, fetchData)
    .then((data) => data.json())
    .catch((err) => ({ error: { message: 'Could not find Contest.' } }));
};

export const getartistSubmission = async (artistId: string): Promise<submissionByArtist[]> => {
  const fetchData: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  return await fetch(baseUrl + `submission/artist/${artistId}`, fetchData)
    .then((data) => data.json())
    .catch((err) => ({ error: { message: 'Could not get submission.' } }));
};
