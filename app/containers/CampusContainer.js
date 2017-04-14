import { connect } from 'react-redux'
import Campus from '../components/campus'
import { getCampus } from '../reducers/campus'

const mapStateToProps = (state) => {
  return {
    campus: state.campus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCampus: (id) => {
      dispatch(getCampus(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
