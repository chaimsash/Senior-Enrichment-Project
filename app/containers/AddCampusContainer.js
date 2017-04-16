import { connect } from 'react-redux';
import addCampus from '../components/addCampus';
import { postCampus, startRemovingCampus } from '../reducers/campuses';

const mapStateToProps = (state) => {
  return {
    campus: state.campus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postCampus: (id, name, color) => {
      dispatch(postCampus(id, name, color));
    },
    startRemovingCampus: (id) => {
      dispatch(startRemovingCampus(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addCampus);
