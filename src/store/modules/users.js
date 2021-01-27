import Vue from "vue";

const usersStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        name: "Maxim",
        age: 31
      },
      2: {
        name: "Vasily",
        age: 17
      }
    }
  },
  getters: {
    usersList: ({ list }) => Object.values(list)
  },
  mutations: {
    ADD_USER(state, user) {
      Vue.set(state.list, user.id, user);
    }
  },
  actions: {
    /* eslint-disable */
    addNewUser({ commit }, user) {
      const newUser = { ...user, id: String(Math.random()) };
      commit("ADD_USER", newUser);
    }
    /* eslint-enable */
  }
};

export default usersStore;
