import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/sessionActions';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    user: state.session.user,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(signup(login)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
