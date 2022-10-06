import { State } from '@/types/store'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { throttle } from '@/composables/throttle'

export function useCategoris() {
    const store = useStore<State>()

    const categoriesRef = ref<HTMLElement | null>(null)
    const categoriesWrapRef = ref<HTMLElement | null>(null)
    const categoriesWidth = ref<number | null>(null)
    const categoriesWrapWidth = ref<number | null>(null)
    const activeItemIndex = ref(0)
    const _navStepMax = ref(0)
    const _navStep = ref(0)
    const categories = [
        'Все',
        'Видеоигры',
        'Музыка',
        'Сейчас в эфире',
        'Ситкомы',
        'Анимация',
        'Туризм',
        'Кулинарные шоу',
        'Футбол',
        'Природа',
        'Туристические направления',
        'Кулинария',
        'Ремесла',
        'Изобразительное искусство',
        'Последние опубликованные видео',
    ]

    const sidebarState = computed(() => store.state.sidebarState)
    const sidebarWidth = computed(() => (sidebarState.value === 'normal' ? 240 : 72))
    const caterogiesTranslateStyle = computed(() => ({
        transform: `translateX(${0 - _navStep.value * 100}px)`,
    }))
    const isShowRight = computed(() => _navStep.value < _navStepMax.value)
    const isShowLeft = computed(() => _navStep.value !== 0)

    const onResize = () => {
        if (categoriesRef.value && categoriesWrapRef.value) {
            categoriesWidth.value = categoriesRef.value.offsetWidth
            categoriesWrapWidth.value = categoriesWrapRef.value.offsetWidth
            _navStepMax.value = Math.ceil(
                (categoriesWidth.value + sidebarWidth.value - categoriesWrapWidth.value) / 100,
            )
        }
    }
    const throttledResize = throttle(onResize, 50)

    const onRight = () => {
        if (_navStep.value < _navStepMax.value) {
            _navStep.value += 1
        }
    }
    const onLeft = () => {
        if (_navStep.value > 0) {
            _navStep.value -= 1
        }
    }

    return {
        sidebarState,
        sidebarWidth,
        categoriesRef,
        categoriesWrapRef,
        activeItemIndex,
        categories,
        caterogiesTranslateStyle,
        isShowRight,
        isShowLeft,
        throttledResize,
        onRight,
        onLeft,
    }
}
