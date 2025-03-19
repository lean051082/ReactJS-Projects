import { useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';
import { useEffect } from 'react';

/**
 *
 * 1. Let's add to this app a new feature that consist in: the available places sorted by the user's current position.
 * How we can do that?
 * We can use the object navigator. This object exposed by the browser give us a function that allows us to get the
 * current position by geolocalization.
 * With this position we call the helper function sortPlacesByDistance to sort our array of available places
 *
 * 2. We need to create a state variable to save this information and use it to display the sorted array in the JSX, but...
 * what happened with or application then? Infinite loop...
 *
 * 3. To solve this problem we can use the useEffect hook useEffect(() => {}, dependencies)
 *
 * 4. Now we want to persist our selected places array. To do this we can use another object from the browser (localStorage) and
 * save in this localStorage and array of selectedPlaces Ids
 *    4.1 get the array stored in localstorage
 *        if the new Id isn't in this array then set the copy of the array plus de new Id
 * Have we to do this new feature inside a useEffect hook?
 *
 * 5. When we delete a selected place from the list you have to do the same. In this case we don't need a useEffect either (is the same
 * case as above)
 *
 * 6. Now we can get the info saved in the localStorage to populate our selected Places. Where we have to put this code? In an useEffect?
 * Not in the useEffect but inside de component?
 *
 * 7. Another use of useEffect is to syncing with Browser API.
 *    7.1 First we change the way we open and close the modal from imperative way to declarative
 *        use a prop (open) on modal and a state (true/false) in app to manage the open/close
 *        What happens now? We are missing the backdrop of the modal...
 *
 *        This occurs because the backdrop only is added if we open the modal with the function
 *        showModal...
 *
 *    7.2 We can solve this problem with an if-else case just before the jsx to call the functions
 *        showModal/close
 *        Now the app crash because we try to access to dialog variable before the link between
 *        the ref and the jsx...
 *        We can syncing this using useEffect
 *
 * 8. Let's add some more features to our places app. We have to confirm to delete a selected place
 * after 3 seconds. We can do it with SetTimeout but, what problem have implement this feature?
 * In this case we can use another functionality of useEffect the clean up function, a function
 * executed in the return statement of the use effect.
 *
 * 9. You have to be very careful with functions as a dependecies in useEffect, this sort
 * of dependencies can create infinite loops. (onConfirm in DeleteConfirmation if you comment
 * the line: setIsOpenModal(false); in the function handleRemovePlace).
 *
 * 10. The secure the possible function that can create an infinite loop you have to use another
 * hook (useCallback) with this structure:
 * const FunctionName = useCallback(FunctionName(){},[]);
 *
 * 11. Finally we implemented a progress bar to give some feedback to the user on why the
 * modal closes automatically (setInterval)
 */

const idPlacesStored =
  JSON.parse(localStorage.getItem('SelectedIdPlaces')) || [];
const selectedPlaces = idPlacesStored.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(selectedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log(pickedPlaces);

  console.log(localStorage.getItem('SelectedIdPlaces'));
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setIsOpenModal(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsOpenModal(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const idPlacesStored =
      JSON.parse(localStorage.getItem('SelectedIdPlaces')) || [];
    if (idPlacesStored.indexOf(id) === -1) {
      localStorage.setItem(
        'SelectedIdPlaces',
        JSON.stringify([id, ...idPlacesStored])
      );
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setIsOpenModal(false);

    const idPlacesStored = JSON.parse(localStorage.getItem('SelectedIdPlaces'));

    if (idPlacesStored.indexOf(selectedPlace.current) !== -1) {
      localStorage.setItem(
        'SelectedIdPlaces',
        JSON.stringify(
          idPlacesStored.filter((idPlace) => idPlace !== selectedPlace.current)
        )
      );
    }
  }

  return (
    <>
      <Modal open={isOpenModal} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
