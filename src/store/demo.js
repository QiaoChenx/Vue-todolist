const state = {
    a: 1
}

const mutations = {
    ADD(state) {
        ++state.a;
    }
}

const actions = {
    add({ commit }) {
        commit('ADD', 11);
    }
}

const getters = {
    abc() {
        return state.a + 10;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}