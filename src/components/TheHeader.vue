<template>
    <header class="bg-white bg-opacity-95 fixed top-0 left-0 z-10 w-full h-[56px]">
        <div
            id="container"
            class="px-2 sm:px-[16px] h-full w-full flex items-center justify-between"
        >
            <div id="left" class="flex shrink-0 items-center justify-between">
                <button
                    class="w-[40px] h-[40px] p-2 mr-0.5 rounded-full active:shadow-lg focus:bg-black/10"
                >
                    <IconBar class="block w-7 h-7 stroke-0 text-[#030303]" />
                </button>
                <div class="flex items-center justify-between">
                    <a
                        href="#"
                        class="py-[18px] px-4 rounded-sm active:outline-none focus:outline focus:outline-2"
                    >
                        <IconLogo width="90" height="20" class="w-[90px] h-[20px]" />
                    </a>
                    <span class="-ml-3 mb-5 text-neutral-600 text-[10px]">RU</span>
                </div>
            </div>
            <div
                id="center"
                class="w-full xl:w-[728px] ml-10 flex items-center justify-end xl:justify-between"
            >
                <div id="search" class="group flex flex-1 items-center justify-end">
                    <form class="hidden sm:flex sm:flex-1 sm:items-center ml-9">
                        <div
                            id="search-wrap"
                            class="px-[6px] py-[2px] h-[40px] flex flex-1 items-center border rounded-l text-black bg-white border-gray-300"
                            :class="{ 'border border-[#1c62b9] shadow-inner': hasFocus }"
                        >
                            <div class="hidden px-2.5">
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
                                <a
                                    href="#"
                                    class="px-1 block group rounded-sm focus:outline focus:outline-2"
                                >
                                    <span
                                        class="inline-block h-[11px] w-[19px] bg-[url('data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==')] bg-no-repeat bg-center align-middle opacity-60 hover:opacity-100 active:opacity-100 group-focus:opacity-100"
                                    >
                                        <img
                                            src="@/assets/img/tia.png"
                                            width="19"
                                            class="invisible w-[19px]"
                                        />
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
                    <button
                        class="p-1 sm:px-1.5 sm:py-[1px] sm:w-[64px] w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer hover:bg-neutral-200 sm:border sm:border-solid sm:border-gray-300 sm:rounded-l-none sm:rounded-r sm:bg-neutral-100 focus:bg-black/10"
                        aria-label="Введите запрос"
                    >
                        <IconSearch class="w-[24px] h-[24px]" />
                    </button>
                </div>
                <button
                    class="ml-2 p-2 w-[40px] h-[40px] flex items-center justify-center rounded-full xl:bg-black/5 focus:bg-black/10"
                >
                    <IconMicrophone class="w-[24px] h-[24px] text-black" />
                </button>
            </div>
            <div id="right" class="min-w-max sm:min-w-[225px] flex items-center justify-end">
                <button
                    class="mr-2 w-[40px] h-[40px] relative group flex items-center justify-center rounded-full active:bg-neutral-50 active:border active:border-gray-200 focus:bg-black/10"
                >
                    <IconMore class="w-[24px] h-[24px] text-[#030303]" />
                    <TheDropdownSettings class="hidden" />
                </button>
                <button
                    class="py-[5px] px-[11px] flex items-center align-middle tracking-[0.5px] font-medium whitespace-nowrap text-base uppercase text-[#065fd4] border border-[#065fd4] focus:border-2"
                >
                    <IconUser class="w-[24px] h-[24px] mr-2 fill-current" />
                    Войти
                </button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import IconLogo from './icons/IconLogo.vue'
import IconBar from './icons/IconBar.vue'
import IconSearch from './icons/IconSearch.vue'
import IconMicrophone from './icons/IconMicrophone.vue'
import IconMore from './icons/IconMore.vue'
import IconUser from './icons/IconUser.vue'
import IconClose from './icons/IconClose.vue'
import TheDropdownSettings from './TheDropdownSettings.vue'

const hasFocus = ref(false)
</script>
