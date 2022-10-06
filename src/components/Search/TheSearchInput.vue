<template>
    <form class="flex flex-1 items-center">
        <div
            id="search-wrap"
            ref="searchWrap"
            class="px-[6px] py-[2px] h-[40px] flex flex-1 items-center border rounded-l text-black bg-white border-gray-300"
            :class="{
                'border border-[#1c62b9] shadow-inner ml-0': isActive,
                'ml-9': !isActive,
                'pr-0': hasResults,
            }"
        >
            <div v-show="isActive" class="flex items-center px-2">
                <IconSearch class="w-[20px] h-[20px]" />
            </div>
            <input
                id="search"
                ref="searchInputRef"
                :value="query"
                autocapitalize="none"
                autocomplete="off"
                autocorrect="off"
                name="search_query"
                tabindex="0"
                type="text"
                spellcheck="false"
                placeholder="Введите запрос"
                aria-label="Введите запрос"
                role="combobox"
                aria-haspopup="false"
                aria-autocomplete="list"
                class="w-full h-[24px] text-lg outline-0"
                @input="onInput"
                @focus="setState(true)"
                @click.stop="setState(true)"
                @keyup.esc="onHandleEsc"
                @keydown.enter="onEnter"
            />
            <div class="flex items-center">
                <a href="#" class="px-1 block group rounded-sm focus:outline focus:outline-2">
                    <span
                        class="inline-block h-[11px] w-[19px] bg-no-repeat bg-center align-middle opacity-60 hover:opacity-100 active:opacity-100 group-focus:opacity-100"
                        :class="[iconTea]"
                    >
                        <img src="@/assets/img/tia.png" width="19" class="invisible w-[19px]" />
                    </span>
                </a>
            </div>
            <AppButton
                v-show="query"
                btn-class="ml-1 hover:bg-black/10 active:bg-black/20 focus:outline-2 focus:outline focus:bg-transparent focus:outline-offset-[-4px]"
                aria-label="Очистить"
                @click.stop="onClear"
            >
                <IconClose class="w-[24px] h-[24px]" />
            </AppButton>
        </div>
    </form>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, watch } from 'vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconClose from '@/components/icons/IconClose.vue'
import AppButton from '@/components/base/AppButton.vue'
import { useStore } from 'vuex'
import { State } from '@/types/store'
import { useSearchInput } from '@/composables/search'

const props = defineProps({
    query: {
        type: String,
        default: '',
    },
    hasResults: {
        type: Boolean,
        default: false,
    },
})
const emit = defineEmits(['update:query', 'changeState', 'enter'])

const { state } = useStore<State>()
const isMobileSerchActive = computed(() => state.isMobileSerchActive)

const { searchInputRef, isActive, iconTea, onInput, onClear, setState, onHandleEsc, onEnter } =
    useSearchInput(props, emit)

watch(
    () => isMobileSerchActive.value,
    async () => {
        if (isMobileSerchActive.value) {
            await nextTick()
            searchInputRef.value?.focus()
        }
    },
)

onMounted(() => {
    window.addEventListener('click', ({ target }: MouseEvent) => {
        if (!searchInputRef.value?.contains(target as Node)) {
            isActive.value = false
        }
    })
    const sm = 640

    if (window.innerWidth < sm) {
        searchInputRef.value?.focus()
    }
})
</script>
