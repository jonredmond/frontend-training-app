import io from 'socket.io-client';
import * as transport from './transport';

export const CREATE_ORDER_EVENT = 'CREATE_ORDER_EVENT';
export const createOrderEvent = order => ({
  type: CREATE_ORDER_EVENT,
  order
});

export const DELETE_ORDERS_EVENT = 'DELETE_ORDERS_EVENT';
export const deleteOrdersEvent = () => ({
  type: DELETE_ORDERS_EVENT
});

export const EXECUTE_ORDER_EVENT = 'EXECUTE_ORDER_EVENT';
export const executeOrderEvent = executionCreatedEvent => ({
  type: EXECUTE_ORDER_EVENT,
  executionCreatedEvent
});

export const PLACE_ORDER_EVENT = 'PLACE_ORDER_EVENT';
export const placeOrderEvent = placementCreatedEvent => ({
  type: PLACE_ORDER_EVENT,
  placementCreatedEvent
});

export const LOG_IN = 'LOG_IN';
export const logIn = user => ({
  type: LOG_IN,
  user
});

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
  type: LOG_OUT
});

export const SET_CALL_IN_PROGRESS = 'SET_CALL_IN_PROGRESS';
export const setCallInProgress = callInProgress => ({
  type: SET_CALL_IN_PROGRESS,
  callInProgress
});

export const SET_INSTRUMENTS = 'SET_INSTRUMENTS';
export const setInstruments = instruments => ({
  type: SET_INSTRUMENTS,
  instruments
});

export const SET_ORDERS = 'SET_ORDERS';
export const setOrders = orders => ({
  type: SET_ORDERS,
  orders
});

export const SET_USERS = 'SET_USERS';
export const setUsers = users => ({
  type: SET_USERS,
  users
});

// Thunk actions

export const createMultipleOrders = (numberOfOrders = 1) => async (dispatch) => {
  dispatch(setCallInProgress(true));
  const orderRequests = [];

  for (let i = 0; i < numberOfOrders; i++) {
    const payload = {
      side: 'Buy',
      symbol: 'AAPL',
      quantity: 10000,
      limitPrice: 426.24,
      traderId: 'AM'
    }

    orderRequests.push(transport.createOrder(payload));
  }

  await Promise.all(orderRequests);

  dispatch(setCallInProgress(false));
};

export const deleteOrders = () => async (dispatch) => {
  dispatch(setCallInProgress(true));

  await transport.deleteOrders();

  dispatch(setCallInProgress(false));
};

export const fetchInstruments = () => async (dispatch) => {
  dispatch(setCallInProgress(true));
  const instruments = await transport.fetchInstruments();
  dispatch(setCallInProgress(false));
  
  dispatch(setInstruments(instruments));
};

export const fetchOrders = () => async (dispatch) => {
  dispatch(setCallInProgress(true));
  const orders = await transport.fetchOrders();
  dispatch(setCallInProgress(false));
  dispatch(setOrders(orders));
};

export const fetchUsers = () => async (dispatch) => {
  dispatch(setCallInProgress(true));
  const users = await transport.fetchUsers();
  dispatch(setCallInProgress(false));
  
  dispatch(setUsers(users));
};

let orderSocket;

export const initialiseWebsocket = () => (dispatch) => {
  orderSocket = io('http://localhost:8080');

  orderSocket.on('connect', () => console.log('websocket connected'));

  orderSocket.on('orderCreatedEvent', order => dispatch(createOrderEvent(order)));
  orderSocket.on('placementCreatedEvent', placementCreatedEvent => dispatch(placeOrderEvent(placementCreatedEvent)));
  orderSocket.on('executionCreatedEvent', executionCreatedEvent => dispatch(executeOrderEvent(executionCreatedEvent)));
  orderSocket.on('allOrdersDeletedEvent', () => dispatch(deleteOrdersEvent()));

  orderSocket.on('disconnect', () => console.log('websocket disconnected'));
};