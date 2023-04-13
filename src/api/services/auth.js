import { axiosInstance } from "../axios";

export async function signIn(email, password) {
  try {
    const response = await axiosInstance.post('/cuenta/login', {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function signUp(
  email,
  password,
  profile,
  firstName,
  lastName
) {
  try {
    const response = await axiosInstance.post('/cuenta', {
      email,
      password,
      profile,
      firstName,
      lastName,
    });
    return response;
  } catch (error) {
    return error.response;
  }
}