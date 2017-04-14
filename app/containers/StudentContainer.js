import { connect } from 'react-redux'
import Student from '../components/student'
import { getStudent } from '../reducers/student'

const mapStateToProps = (state) => {
  return {
    student: state.student
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStudent: (id) => {
      dispatch(getStudent(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
