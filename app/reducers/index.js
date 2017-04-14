import { combineReducers } from 'redux';
import campuses from './campuses';
import campus from './campus';
import students from './students';
import student from './student';


export default combineReducers({ campuses, campus, students, student });
