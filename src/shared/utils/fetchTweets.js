import axios from 'axios';

export const fetchTweets = async setUsers => {
  try {
    const response = await axios.get(
      'https://640dee65b07afc3b0dba3c72.mockapi.io/users'
    );
    const savedUsers = JSON.parse(localStorage.getItem('users'));
    if (savedUsers) {
      setUsers(savedUsers);
    } else {
      setUsers(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
