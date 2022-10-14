import axios from 'axios';

export default {
  getUsers() {
    return axios
      .get('https://slambeable.github.io/ainet-test/users.json')
      .then((data) => data.data);
  },
};
