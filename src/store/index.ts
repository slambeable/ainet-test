// eslint-disable-next-line import/no-unresolved
import api from 'api';
import { createStore } from 'vuex';
import UsersInterface from '@/types/UsersInterface';

export default createStore({
  state: {
    users: null as UsersInterface[] | null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    filterUsers(state, options) {
      if (!state.users) {
        return;
      }

      const { value, type } = options;

      if (type === 'country') {
        state.users = state.users.filter((element: UsersInterface) => {
          const key = type as keyof typeof element;
          return element[key] === value;
        });
      } else if (type === 'score') {
        state.users = state.users.filter((element: UsersInterface) => {
          const key = type as keyof typeof element;
          if (value === 'moreThanTwenty') {
            return element[key] > 20;
          }

          if (value === 'lessThatTen') {
            return element[key] < 10;
          }

          return false;
        });
      }
    },
    clearUsers(state) {
      state.users = [];
    },
  },
  actions: {
    fetchUsers({ commit }) {
      return new Promise<void>((resolve) => {
        commit('clearUsers');

        setTimeout(async () => {
          const users = await api.getUsers();

          commit('setUsers', users.users);
          resolve();
        }, 1000);
      });
    },
  },
});
