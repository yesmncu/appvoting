const API_URL = 'https://6527f3b1931d71583df1a378.mockapi.io';

const contentApi = async () => {
  try {
    const response = await fetch(`${API_URL}/content`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export { contentApi };
