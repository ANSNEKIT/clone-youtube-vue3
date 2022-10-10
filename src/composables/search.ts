import {
    EventSearchInput,
    Keyword,
    PropsModalVoiceButton,
    PropsSearchInput,
    Status,
} from '@/types/search'
import { computed, ref } from 'vue'

export function useSearchInput(props: PropsSearchInput, emit: EventSearchInput) {
    const isActive = ref(false)
    const searchInputRef = ref<HTMLInputElement | null>(null)
    const iconTea =
        'bg-[url("data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==")]'

    const onInput = (evt: Event) => {
        const target = evt.target as HTMLInputElement

        emit('update:query', target.value)
        setState(isActive.value)
    }

    const onClear = () => {
        emit('update:query', '')

        searchInputRef.value?.focus()
    }

    const setState = (hasFocusInput: boolean) => {
        isActive.value = hasFocusInput

        emit('changeState', isActive.value)
    }

    const _removeSelection = () => {
        if (searchInputRef.value) {
            const end = searchInputRef.value.value.length

            searchInputRef.value.setSelectionRange(end, end)
        }
    }

    const onHandleEsc = () => {
        _removeSelection()

        if (isActive.value && props.hasResults) {
            emit('changeState', false)
        }
    }

    const onEnter = () => {
        setState(false)

        searchInputRef.value?.blur()

        emit('enter')
    }

    return {
        isActive,
        searchInputRef,
        iconTea,
        onInput,
        onClear,
        setState,
        onHandleEsc,
        onEnter,
    }
}

export function useSearch() {
    const query = ref('')
    const _queryBuffer = ref<string | null>(null)
    const activeSearchResultId = ref<number | null>(null)
    const isShowResults = ref(false)
    const results = ref<Array<Keyword>>([])
    const _keywords = [
        {
            value: 'javascript',
            similar: '',
            keyword: 'javascript',
        },
        {
            value: 'javascript',
            similar: 'с нуля',
            keyword: 'javascript с нуля',
        },
        {
            value: 'javascript',
            similar: 'для начинающих',
            keyword: 'javascript для начинающих',
        },
        {
            value: 'javascript',
            similar: 'за 6 часов',
            keyword: 'javascript за 6 часов',
        },
        {
            value: 'javascript',
            similar: 'за 30 секунд',
            keyword: 'javascript за 30 секунд',
        },
        {
            value: 'javascript',
            similar: 'видеоуроки',
            keyword: 'javascript видеоуроки',
        },
        {
            value: 'javascript',
            similar: 'classes',
            keyword: 'javascript classes',
        },
        {
            value: 'javascript',
            similar: 'ninja',
            keyword: 'javascript ninja',
        },
        {
            value: 'javascript',
            similar: 'objects',
            keyword: 'javascript objects',
        },
        {
            value: 'javascript',
            similar: 'уроки',
            keyword: 'javascript уроки',
        },
        {
            value: 'javascript',
            similar: 'project',
            keyword: 'javascript project',
        },
        {
            value: 'javascript',
            similar: 'практика',
            keyword: 'javascript практика',
        },
        {
            value: 'javascript',
            similar: 'за час',
            keyword: 'javascript за час',
        },
        {
            value: 'javascript',
            similar: 'девид фленеган',
            keyword: 'javascript девид фленеган',
        },
    ]

    const _trimmedQuery = () => {
        return query.value.replace(/\s+/g, ' ').trim().toLowerCase()
    }

    const updateQueryResults = () => {
        activeSearchResultId.value = null
        _queryBuffer.value = query.value

        if (query.value === '') {
            results.value = []
        } else {
            results.value = _keywords
                .filter((key: Keyword) => {
                    return key.keyword.includes(_trimmedQuery())
                })
                .map((key: Keyword) => {
                    return {
                        value: _trimmedQuery(),
                        similar: key.keyword.slice(_trimmedQuery().length),
                        keyword: key.keyword,
                    }
                })
        }
    }

    const _makePrev = () => {
        if (activeSearchResultId.value === 0) {
            activeSearchResultId.value = null
        } else if (activeSearchResultId.value === null) {
            activeSearchResultId.value = results.value.length - 1
        } else {
            activeSearchResultId.value = Number(activeSearchResultId.value) - 1
        }
    }
    const _makeNext = () => {
        if (activeSearchResultId.value === null) {
            activeSearchResultId.value = 0
        } else if (activeSearchResultId.value + 1 === results.value.length) {
            activeSearchResultId.value = null
        } else {
            activeSearchResultId.value = Number(activeSearchResultId.value) + 1
        }
    }
    const _updateQueryWithSearchResult = () => {
        if (activeSearchResultId.value !== null) {
            query.value = results.value[activeSearchResultId.value].keyword
        } else {
            query.value = String(_queryBuffer.value)
        }
    }
    const onResultClick = () => {
        if (activeSearchResultId.value !== null) {
            query.value = results.value[activeSearchResultId.value].keyword
        }

        toggleShowResults(false)
        updateQueryResults()
    }
    const toggleShowResults = (hasFocusInput: boolean) => {
        isShowResults.value = hasFocusInput && results.value.length > 0
    }
    const prevResult = () => {
        if (isShowResults.value) {
            _makePrev()
            _updateQueryWithSearchResult()
        } else {
            toggleShowResults(true)
        }
    }
    const nextResult = () => {
        if (isShowResults.value) {
            _makeNext()
            _updateQueryWithSearchResult()
        } else {
            toggleShowResults(true)
        }
    }

    return {
        query,
        activeSearchResultId,
        isShowResults,
        results,
        toggleShowResults,
        updateQueryResults,
        onResultClick,
        prevResult,
        nextResult,
    }
}

export function useSearchModalVoiceButton(props: PropsModalVoiceButton) {
    const statuses: Status = {
        LiSTENING: 'listening',
        RECORDING: 'recording',
        ERROR: 'error',
        OFF: 'off',
    }

    const status = ref<Status[keyof Status]>(statuses.LiSTENING)
    const recordingTimeout = ref<number | null>(null)

    const isStatus = (...args: Array<Status[keyof Status]>) => {
        return args.includes(status.value)
    }

    const getTitle = computed(() => {
        if (!props.isMicrophonePremission) {
            return 'Голосовой поиск'
        }

        if (isStatus(statuses.OFF)) {
            return 'Микрофон отключен. Повторите попытку'
        }

        if (isStatus(statuses.RECORDING)) {
            return 'Что'
        }

        if (isStatus(statuses.ERROR)) {
            return 'Запрос не распознан. Повторите попытку'
        }

        return 'Говорите...'
    })

    const _updateStatus = (stat?: Status[keyof Status]) => {
        if (stat) {
            status.value = stat
        } else if (isStatus(statuses.LiSTENING)) {
            status.value = statuses.RECORDING
        } else if (isStatus(statuses.RECORDING)) {
            status.value = statuses.OFF
        } else if (isStatus(statuses.OFF, statuses.ERROR)) {
            status.value = statuses.RECORDING
        }
    }

    const onToggleVoiceButton = () => {
        if (!props.isMicrophonePremission) {
            return
        }

        if (recordingTimeout.value) {
            clearTimeout(recordingTimeout.value)
        }

        _updateStatus()

        stopRecording(5000)
    }

    const stopRecording = (dealay: number) => {
        recordingTimeout.value = setTimeout(() => {
            if (isStatus(statuses.RECORDING, statuses.LiSTENING)) {
                status.value = statuses.ERROR
            }
        }, dealay)
    }

    return {
        status,
        statuses,
        getTitle,
        recordingTimeout,
        isStatus,
        onToggleVoiceButton,
        stopRecording,
    }
}
