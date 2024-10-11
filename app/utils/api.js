export const apiRequest = async (url, method, data) => {
  const respons = await fetch(url, {
    method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!respons.ok) {
    throw new Error(`Error: ${respons.statusText}`);
  }

  return await respons.json();
};
