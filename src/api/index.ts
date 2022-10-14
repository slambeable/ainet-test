import axios from 'axios';

export default {
  getUsers() {
    return axios
      .get('/users.json')
      .then((data) => data.data);
  },
};
