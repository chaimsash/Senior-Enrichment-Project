import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CAMPUSES = 'SET_CAMPUSES';

/* ------------   ACTION CREATORS     ------------------ */

const setCampuses = campuses => ({ type: SET_CAMPUSES, campuses });

/* ------------       REDUCERS     ------------------ */

export default function reducer (campuses = [], action) {
  switch (action.type) {

    case SET_CAMPUSES:
      return action.campuses;

    default:
      return campuses;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const getCampuses = () => dispatch => {
  axios.get('http://localhost:1337/api/campuses')
  .then(res => dispatch(setCampuses(res.data)))
  .catch(err => console.error('Getting campuses unsuccessful', err));
};
