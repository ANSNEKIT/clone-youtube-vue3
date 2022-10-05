type SidebarState = 'normal' | 'compact' | null

export interface State {
    sidebarState: SidebarState
    isMobileSerchActive: boolean
}

export type { SidebarState }
