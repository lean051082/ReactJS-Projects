import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import { API_URL, getPlaces } from '../services/api.js';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [myError, setMyError] = useState();

  useEffect(() => {
    async function getPlacesAsync() {
      setIsFetching(true);
      try {
        const dataPlaces = await getPlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            dataPlaces,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setMyError({
          message: error.message || 'Error occurred fetching places',
        });
        setIsFetching(false);
      }
    }

    getPlacesAsync();
  }, []);

  if (myError) {
    return (
      <ErrorPage title="Error" message={myError.message} onConfirm={() => {}} />
    );
  }
  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      isLoadintText="Fetching places data..."
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
