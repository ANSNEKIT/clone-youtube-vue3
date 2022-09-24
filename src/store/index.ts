import { createStore } from 'vuex'

export interface State {
    sidebarState: 'normal' | 'compact' | null
}
type sidebarState = 'normal' | 'compact' | null

const store = createStore<State>({
    state: {
        sidebarState: null,
    },
    getters: {},
    mutations: {
        setSidebarState: (state, payload: sidebarState) => {
            state.sidebarState = payload
        },
    },
})

export default store
