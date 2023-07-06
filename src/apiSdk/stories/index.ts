import axios from 'axios';
import queryString from 'query-string';
import { StoryInterface, StoryGetQueryInterface } from 'interfaces/story';
import { GetQueryInterface } from '../../interfaces';

export const getStories = async (query?: StoryGetQueryInterface) => {
  const response = await axios.get(`/api/stories${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createStory = async (story: StoryInterface) => {
  const response = await axios.post('/api/stories', story);
  return response.data;
};

export const updateStoryById = async (id: string, story: StoryInterface) => {
  const response = await axios.put(`/api/stories/${id}`, story);
  return response.data;
};

export const getStoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/stories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteStoryById = async (id: string) => {
  const response = await axios.delete(`/api/stories/${id}`);
  return response.data;
};
