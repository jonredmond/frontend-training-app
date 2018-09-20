import fetch from 'cross-fetch';

const baseUrl = 'http://localhost:8080';

const endpoints = {
  instruments: `${baseUrl}/instruments`,
  orders: `${baseUrl}/orders`,
  users: `${baseUrl}/users`
};

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export const createOrder = async (payload) =>
  await fetch(
    endpoints.orders, 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  );

export const deleteOrders = async (payload) =>
  await fetch(
    endpoints.orders, 
    {
      method: 'DELETE',
      headers,
      body: JSON.stringify(payload)
    }
  );

export const fetchUsers = async () => {
  let users;
  try {
    users = await fetch(endpoints.users);
    users = users.json();
  } catch (e) {
    console.error('Error occurred while fetching users', e);
  }

  return users;
}

export const fetchOrders = async () => {
  let orders;
  try {
    orders = await fetch(endpoints.orders);
    orders = orders.json();
  } catch (e) {
    console.error('Error occurred while fetching orders', e);
  }

  return orders;
}

export const fetchInstruments = async () => {
  let instruments;
  try {
    instruments = await fetch(endpoints.instruments);
    instruments = instruments.json();
  } catch (e) {
    console.error('Error occurred while fetching instruments', e);
  }

  return instruments;
}