// TODO: add and export your own actions
import cities from '../cities';

const setCities = () => {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_CITIES',
    payload: cities
  };
};
const setActiveCity = (city) => {
  return {
    type: "ACTIVE_CITY",
    payload: city
  };
};
export { setCities, setActiveCity };
