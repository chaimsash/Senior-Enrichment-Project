import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_STUDENT = 'SET_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

const setStudent = student => ({ type: SET_STUDENT, student });

/* ------------       REDUCERS     ------------------ */

export default function reducer (student = {}, action) {
  switch (action.type) {

    case SET_STUDENT:
        return action.student;

    default:
      return student;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const getStudent = (id) => dispatch => {
  axios.get(`http://localhost:1337/api/students/${id}`)
  .then(res => dispatch(setStudent(res.data)))
  .catch(err => console.error('Getting student unsuccessful', err));
};
