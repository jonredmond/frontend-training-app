import { connect } from 'react-redux';

import {
  OrderTable
} from '../components/pattern';

const mapStateToProps = (state) => ({
  orders: state.orders
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderTable);