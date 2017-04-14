import { connect } from 'react-redux'
import addCampus from '../components/addCampus'
import { setCampus } from '../reducers/setCampus'

const mapStateToProps = (state) => {
  return {
    campuses: state.campus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCampus: (name, color) => {
      dispatch(setCampus(name, color));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addCampus);
