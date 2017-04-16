import { connect } from 'react-redux';
import addStudent from '../components/addStudent';
import { postStudent, startRemovingStudent } from '../reducers/students';

const mapStateToProps = (state) => {
  return {
    student: state.student,
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postStudent: (id, name, email, campusId) => {
      dispatch(postStudent(id, name, email, campusId));
    },
    startRemovingStudent: (id) => {
      dispatch(startRemovingStudent(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addStudent);
