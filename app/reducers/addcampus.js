// import axios from 'axios';
//
// /* -----------------    ACTIONS     ------------------ */
//
// const SET_CAMPUS = 'SET_CAMPUS';
//
// /* ------------   ACTION CREATORS     ------------------ */
//
// const setCampus = campus => ({ type: SET_CAMPUS, campus });
//
// /* ------------       REDUCERS     ------------------ */
//
// export default function reducer (campus = {}, action) {
//   switch (action.type) {
//
//     case SET_CAMPUS:
//       return action.campus;
//
//     default:
//       return campus;
//   }
// }
//
// /* ------------       DISPATCHERS     ------------------ */
//
// export const postCampus = (name, color) => dispatch => {
//   axios.post('http://localhost:1337/api/campuses', {name, color})
//   .then(res => dispatch(setCampus(res.data)))
//   .catch(err => console.error('Setting campus unsuccessful', err));
// };
