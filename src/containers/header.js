import { connect } from 'react-redux';

import {
  deleteOrders,
  signOut,
  createMultipleOrders,
} from '../actions';
import Header from '../components/module/header/header';

const mapStateToProps = (state) => ({
  username: state.loggedInUser
});

const mapDispatchToProps = (dispatch) => ({
  createOrders: () => {
    dispatch(createMultipleOrders());
  },
  logOut: () => {
    dispatch(logOut());
  },
  deleteOrders: () => {
    dispatch(deleteOrders());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);