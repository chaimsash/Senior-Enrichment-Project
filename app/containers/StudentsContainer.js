import { connect } from 'react-redux'
import Students from '../components/students'
import { getStudents } from '../reducers/students'

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: () => {
      dispatch(getStudents());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
