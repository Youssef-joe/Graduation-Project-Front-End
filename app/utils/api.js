export const apiRequest = async (url, method, data) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    return await response.json();

  } catch(er) {
    console.error('API request error: ', er);
    throw error; // rethrow to handle it in the calling function

  }
};
