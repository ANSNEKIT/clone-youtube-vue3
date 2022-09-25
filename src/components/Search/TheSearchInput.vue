<template>
    <form class="hidden sm:flex sm:flex-1 sm:items-center ml-9">
        <div
            id="search-wrap"
            class="px-[6px] py-[2px] h-[40px] flex flex-1 items-center border rounded-l text-black bg-white border-gray-300"
            :class="{ 'border border-[#1c62b9] shadow-inner': hasFocus }"
        >
            <div class="hidden px-2.5" :class="{ '!flex items-center': hasFocus }">
                <IconSearch class="w-[20px] h-[20px]" />
            </div>
            <input
                id="search"
                ref="searchInput"
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
                @focusin="hasFocus = true"
                @focusout="hasFocus = false"
            />
            <div class="flex items-center">
                <a href="#" class="px-1 block group rounded-sm focus:outline focus:outline-2">
                    <span
                        class="inline-block h-[11px] w-[19px] bg-[url('data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==')] bg-no-repeat bg-center align-middle opacity-60 hover:opacity-100 active:opacity-100 group-focus:opacity-100"
                    >
                        <img src="@/assets/img/tia.png" width="19" class="invisible w-[19px]" />
                    </span>
                </a>
            </div>
            <button
                class="hidden mx-1 w-[24px] h-[24px] flex items-center justify-center focus:bg-black/10"
                aria-label="Очистить"
            >
                <IconClose class="w-[20px] h-[20px]" />
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconClose from '@/components/icons/IconClose.vue'

const hasFocus = ref(false)
</script>
