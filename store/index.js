export const state = () => ({
    data: []
});

export const mutations = {
    setData(state, data) {
        state.data = data
    }
}

export const actions = {
    async fetch({commit}) {
        const data = await this.$axios.$get('/data.json');
        commit('setData', data);
    }
}

export const getters = {
    data: s => s.data
}

