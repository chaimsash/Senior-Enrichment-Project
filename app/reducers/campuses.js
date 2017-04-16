import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CAMPUSES = 'SET_CAMPUSES';
const SET_CAMPUS = 'SET_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const setCampuses = campuses => ({ type: SET_CAMPUSES, campuses });
const setCampus = campus => ({ type: SET_CAMPUS, campus });
const removeCampus = campusId => ({ type: REMOVE_CAMPUS, campusId });

/* ------------       REDUCERS     ------------------ */

export default function reducer (campuses = [], action) {
  switch (action.type) {

    case SET_CAMPUSES:
      return action.campuses;

    case SET_CAMPUS:
      return [action.campus, ...campuses];

    case REMOVE_CAMPUS:
        return campuses.filter(campus => campus.id !== action.campusId);

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

export const postCampus = (id, name, color) => dispatch => {
  const axType = id ? 'put' : 'post';
  axios[axType]('http://localhost:1337/api/campuses', {id, name, color})
  .then(res => dispatch(setCampus(res.data)))
  .catch(err => console.error('Setting campus unsuccessful', err));
};

export const startRemovingCampus = (id) => dispatch => {
  axios.delete(`http://localhost:1337/api/campuses/${id}`)
  .then(res => dispatch(removeCampus(res.data)))
  .catch(err => console.error('Removing campus unsuccessful', err));
};
