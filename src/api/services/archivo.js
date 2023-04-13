import { axiosInstance } from "../axios";

export async function uploadFile(file) {
  try {
    
    const formData = new FormData();
    formData.append('file', file);

    const response = await axiosInstance.post('/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }

}