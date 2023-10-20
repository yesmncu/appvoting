const API_URL = process.env.API_URL;

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
