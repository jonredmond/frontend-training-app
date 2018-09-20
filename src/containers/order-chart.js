import { connect } from 'react-redux';

import {
  OrderChart
} from '../components/pattern';

const mapStateToProps = (state) => ({
  orders: state.orders
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderChart);