import { ExtractPropTypes } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export interface Status {
    LiSTENING: 'listening'
    RECORDING: 'recording'
    ERROR: 'error'
    OFF: 'off'
}

export interface Keyword {
    value: string
    similar: string
    keyword: string
}

type PropsModalVoiceButton = Readonly<
    ExtractPropTypes<{
        isMicrophonePremission: {
            type: BooleanConstructor
            default: true
        }
    }>
>

export type { EventSearchInput, PropsSearchInput, PropsModalVoiceButton }
