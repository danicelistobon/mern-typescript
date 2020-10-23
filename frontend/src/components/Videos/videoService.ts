import axios from 'axios';

import { Video } from './video';

const URL = process.env.REACT_APP_BACKEND_URL;

export const createVideo = async (video: Video) => {
  return await axios.post(`${URL}/newVideo`, video);
};

export const getVideos = async () => {
  return await axios.get<Video[]>(`${URL}/videos`);
};

export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${URL}/videos/${id}`);
};

export const updateVideo = async (id: string, video: Video) => {
  return await axios.put(`${URL}/videos/${id}`, video);
};

export const deleteVideo = async (id: string) => {
  return await axios.delete(`${URL}/videos/${id}`);
};
