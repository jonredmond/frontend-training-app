import { combineReducers } from 'redux'

import { 
  CREATE_ORDER_EVENT,
  DELETE_ORDERS_EVENT,
  EXECUTE_ORDER_EVENT,
  LOG_IN,
  LOG_OUT,
  PLACE_ORDER_EVENT,
  SET_CALL_IN_PROGRESS,
  SET_INSTRUMENTS,
  SET_ORDERS,
  SET_USERS,
} from './actions';

const callInProgress = (state = false, action) => {
  switch (action.type) {
    case SET_CALL_IN_PROGRESS:
      return action.callInProgress;
    default:
      return state;
  }
}

const instruments = (state = [], action) => {
  switch (action.type) {
    case SET_INSTRUMENTS:
      return action.instruments || state;
    default:
      return state;
  }
};

const loggedInUser = (state = 'Ed Kelly', action) => {
  switch (action.type) {
    case LOG_IN:
      return action.user
    case LOG_OUT:
      return '';
    default:
      return state;
  }
};

const orders = (state = [
  {
    id: 10,
    creationTime: '2013-04-17T00:01:18.000Z',
    side: 'Buy',
    symbol: 'AAPL',
    quantity: 10000,
    quantityPlaced: 0,
    quantityExecuted: 0,
    limitPrice: 426.24,
    priority: 50,
    status: 'New',
    traderId: 'AM'
  }
], action) => {
  switch (action.type) {
    case CREATE_ORDER_EVENT:
      return [
        ...state,
        action.order
      ];
    case DELETE_ORDERS_EVENT:
      return [];
    case SET_ORDERS:
      return action.orders || state;
    case PLACE_ORDER_EVENT: {
      const {
        orderId,
        quantityPlaced,
        status,
      } = action.placementCreatedEvent;

      const newState = state.map(order => order.id === orderId ? {
        ...order,
        quantityPlaced,
        status
      } : order);
      return newState;
    }
    case EXECUTE_ORDER_EVENT:
      const {
        orderId,
        quantityExecuted,
        status,
      } = action.executionCreatedEvent;

      const newState = state.map(order => order.id === orderId ? {
        ...order,
        quantityExecuted,
        status
      } : order);
      return newState;
    default:
      return state;
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users || state;
    default:
      return state;
  }
};

export default combineReducers({
  callInProgress,
  instruments,
  loggedInUser,
  orders,
  users
});