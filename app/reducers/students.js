import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_STUDENTS = 'SET_STUDENTS';

/* ------------   ACTION CREATORS     ------------------ */

const setStudents = students => ({ type: SET_STUDENTS, students });

/* ------------       REDUCERS     ------------------ */

export default function reducer (students = [], action) {
  switch (action.type) {

    case SET_STUDENTS:
      return action.students;

    default:
      return students;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const getStudents = () => dispatch => {
  axios.get('http://localhost:1337/api/students')
  .then(res => dispatch(setStudents(res.data)))
  .catch(err => console.error('Getting students unsuccessful', err));
};
