import { connect } from 'react-redux'
import Campuses from '../components/campuses'
import { getCampuses } from '../reducers/campuses'

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: () => {
      dispatch(getCampuses());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
