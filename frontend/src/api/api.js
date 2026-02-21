import axios from 'axios';
import asios from 'axios';

const BASE_URL = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

//Instance Create


const api = axios .create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//jobs apis

export const getJobs = async () => {
  try {
    const response = await api.get('/jobs');
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const getJobById = async (id) => {
  try {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching job with id ${id}:`, error);
    throw error;
  }
};

export const createJob = async (jobData) => {
  try {
    const response = await api.post('/jobs', jobData,{headers: {
      'Content-Type': 'multipart/form-data',
    },});  
    return response.data;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }

};

export const updateJob = async (id, jobData) => {
  try {
    const response = await api.put(`/jobs/${id}`, jobData);
    return response.data;
  } catch (error) {
    console.error(`Error updating job with id ${id}:`, error);
    throw error;
  }
};

export const deleteJob = async (id) => {
  try {
    const response = await api.delete(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting job with id ${id}:`, error);
    throw error;
  }
};

export const getimageurl = (imagepath) => {
  return `${import.meta.env.VITE_API_BASE_URL}/${imagepath}`;
};

export default api;