import { ExtractPropTypes } from 'vue'

type EventSearchInput = (event: 'update:query' | 'changeState' | 'enter', ...args: any[]) => void
type PropsSearchInput = Readonly<
    ExtractPropTypes<{
        query: {
            type: StringConstructor
            default: string
        }
        hasResults: {
            type: BooleanConstructor
            default: boolean
        }
    }>
>
export interface Keyword {
    value: string
    similar: string
    keyword: string
}

export type { EventSearchInput, PropsSearchInput }
