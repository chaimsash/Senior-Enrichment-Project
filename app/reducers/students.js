import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_STUDENTS = 'SET_STUDENTS';
const SET_STUDENT = 'SET_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

const setStudents = students => ({ type: SET_STUDENTS, students });
const setStudent = student => ({ type: SET_STUDENT, student });
const removeStudent = studentId => ({ type: REMOVE_STUDENT, studentId });

/* ------------       REDUCERS     ------------------ */

export default function reducer (students = [], action) {
  switch (action.type) {

    case SET_STUDENTS:
      return action.students;

    case SET_STUDENT:
      return [action.student, ...students];

    case REMOVE_STUDENT:
      return students.filter(student => student.id !== action.studentId);

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

export const postStudent = (id, name, email, campusId) => dispatch => {
  const axType = id ? 'put' : 'post';
  axios[axType]('http://localhost:1337/api/students', {id, name, email, campusId})
  .then(res => console.log(res.data))
  .catch(err => console.error('Setting student unsuccessful', err));
};

export const startRemovingStudent = (id) => dispatch => {
  axios.delete(`http://localhost:1337/api/students/${id}`)
  .then(res => dispatch(removeStudent(res.data)))
  .catch(err => console.error('Removing student unsuccessful', err));
};
