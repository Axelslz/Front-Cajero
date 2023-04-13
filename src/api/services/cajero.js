import { axiosInstance } from "../axios";

export async function depositar(quantity, email) {
  try {
    const response = await axiosInstance.post('/cuenta/depositar', {
      quantity,
      email
    }, {
      headers: {
        'Authorization': `${localStorage.getItem('accessToken')}`
      }
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function retirar(quantity, email) {
  try {
    const response = await axiosInstance.post('/cuenta/retirar', {
      quantity,
      email
    }, {
      headers: {
        'Authorization': `${localStorage.getItem('accessToken')}`
      }
    });
    return response;
  } catch (error) {
    return error.response;
  }
}