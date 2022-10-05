type SidebarState = 'normal' | 'compact' | null

export interface State {
    sidebarState: SidebarState
    searchQuery: string
}

export type { SidebarState }
