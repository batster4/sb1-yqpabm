// src/api/index.js
import { API_URL } from './config';

// Example API calls
export const api = {
  // Check if bot is running
  checkStatus: async () => {
    try {
      const response = await fetch(`${API_URL}/`);
      return await response.text();
    } catch (error) {
      console.error('Error checking bot status:', error);
      throw error;
    }
  },
  getMessages: async () => {
    try {
      const response = await fetch(`${API_URL}/messages`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  },
  // Get tweets posted by the agent
  getTweets: async () => {
    try {
      const response = await fetch(`${API_URL}/tweets`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching tweets:', error);
      throw error;
    }
  },
  // Check bot status
  checkStatus: async () => {
    try {
      const response = await fetch(`${API_URL}/`);
      return await response.text();
    } catch (error) {
      console.error('Error checking bot status:', error);
      throw error;
    }
  }
};
  // Add more API calls here as needed
  // Example:
  // getTweets: async () => {
  //   const response = await fetch(`${API_URL}/tweets`);
  //   return await response.json();
  // }
};