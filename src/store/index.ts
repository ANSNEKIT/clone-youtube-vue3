import { State, SidebarState } from '@/types/store'
import { createStore } from 'vuex'

const store = createStore<State>({
    state: {
        sidebarState: null,
        searchQuery: '',
    },
    getters: {},
    mutations: {
        setSidebarState: (state, payload: SidebarState) => (state.sidebarState = payload),
        setSearchQuery: (state, payload: string) => (state.searchQuery = payload),
    },
})

export default store
