aimport axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CAMPUS = 'SET_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const setCampus = campus => ({ type: SET_CAMPUS, campus });

/* ------------       REDUCERS     ------------------ */

export default function reducer (campuses = {}, action) {
  switch (action.type) {

    case SET_CAMPUS:
      return action.campus;

    default:
      return campus;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const getCampuses = () => dispatch => {
  axios.get('http://localhost:1337/api/campuses')
  .then(res => dispatch(setCampuses(res.data)))
  .catch(err => console.error('Setting campus unsuccessful', err));
};
