import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CAMPUS_STUDENTS = 'SET_CAMPUS_STUDENTS';

/* ------------   ACTION CREATORS     ------------------ */

const setCampusStudents = campusStudents => ({ type: SET_CAMPUS_STUDENTS, campusStudents });

/* ------------       REDUCERS     ------------------ */

export default function reducer (campus = [], action) {
  switch (action.type) {

    case SET_CAMPUS_STUDENTS:
        return action.campusStudents;

    default:
      return campus;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const getCampus = (id) => dispatch => {
  axios.get(`http://localhost:1337/api/campuses/${id}`)
  .then(res => dispatch(setCampusStudents(res.data)))
  .catch(err => console.error('Getting campus unsuccessful', err));
};
