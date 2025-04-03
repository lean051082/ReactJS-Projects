export const API_URL = 'http://localhost:3000/'; // Ajusta según tu Django API

export async function getPlaces() {
  const response = await fetch(API_URL + 'places');
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Error fetching places');
  }

  return data.places;
}

export async function getUserPlaces() {
  const response = await fetch(API_URL + 'user-places');
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Error fetching places');
  }

  return data.places;
}

export async function updateUserPlaces(userplaces) {
  console.log(userplaces);
  const response = await fetch(API_URL + 'user-places', {
    method: 'PUT',
    body: JSON.stringify({ places: userplaces }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Error updating user places');
  }

  return data.message;
}
