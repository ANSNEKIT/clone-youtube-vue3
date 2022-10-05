import { State, SidebarState } from '@/types/store'
import { createStore } from 'vuex'

const store = createStore<State>({
    state: {
        sidebarState: null,
        isMobileSerchActive: false,
    },
    getters: {},
    mutations: {
        setSidebarState: (state, payload: SidebarState) => (state.sidebarState = payload),
        setMobileSerchActive: (state, payload: boolean) => (state.isMobileSerchActive = payload),
    },
})

export default store
