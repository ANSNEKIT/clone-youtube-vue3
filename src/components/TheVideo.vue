<template>
    <div class="max-w-[320px] 2xl:max-w-[360px] relative">
        <div>
            <div class="relative">
                <a href="#" class="outline-none">
                    <img
                        class="max-h-full max-w-full object-contain"
                        :src="videoImg"
                        alt="unsplash-preview"
                        @mouseenter="hasHover = true"
                        @mouseleave="hasHover = false"
                    />
                </a>

                <span
                    class="hidden absolute bottom-0 right-0 m-1 px-1 pt-[2px] bg-black text-white text-sm rounded-sm"
                    :class="{ '!inline-block': hasHover }"
                    >Если убрать указатель предпросмотр прекратится</span
                >
                <span
                    class="absolute bottom-0 right-0 inline-block m-1 px-1 pt-[2px] bg-black text-white text-sm rounded-sm"
                    :class="{ hidden: hasHover }"
                    >8:39</span
                >
            </div>
            <div id="details" class="pt-3 flex relative">
                <a href="#" class="mr-3 shrink-0 outline-none">
                    <img
                        class="rounded-full w-[36px] h-[36px]"
                        width="36"
                        height="36"
                        :src="userProfileImg"
                        alt="profile-icon"
                    />
                </a>
                <div class="pr-7 w-full">
                    <div :class="{ 'outline outline-2 rounded-sm': hasFocusTitle }">
                        <h3 class="mb-2 text-base 2xl:text-lg font-medium leading-6 line-clamp-2">
                            <a
                                href="#"
                                class="outline-none"
                                @focusin="hasFocusTitle = true"
                                @focusout="hasFocusTitle = false"
                                >💎 Новые музыкальные клипы 2022 (11-14-я недели) 💎 В Рейтинге
                                Лучшие моменты
                            </a>
                        </h3>
                    </div>
                    <div>
                        <p
                            class="flex items-center text-[#606060] hover:text-gray-900 text-sm 2xl:text-base overflow-hidden text-ellipsis whitespace-nowrap"
                        >
                            <a
                                href="#"
                                class="border rounded-sm border-transparent focus:border-black outline-none"
                            >
                                В Рейтинге
                            </a>
                            <span class="opacity-60 pl-1">
                                <IconCheck class="w-4 h-4" />
                            </span>
                        </p>
                        <div v-if="!isStream">
                            <p class="text-[#606060] text-sm 2xl:text-base cursor-pointer">
                                <span class="inline-block after:content-['•'] after:m-1"
                                    >2&nbsp;млн просмотров</span
                                >
                                <span class="inline-block">5 месяцев назад</span>
                            </p>
                        </div>
                        <div v-if="isStream">
                            <p
                                class="mb-1 text-[#606060] text-sm 2xl:text-base overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                                Зрителей: 1,3 тыс.
                            </p>
                            <div
                                class="px-1 py-[1px] flex items-center w-max bg-[#cc0000e6] text-white rounded-sm tracking-wide"
                            >
                                <IconTranslation class="w-4 h-4 fill-current mr-1" />
                                <span class="uppercase font-medium text-sm leading-4">В эфире</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute -top-1 -right-3">
                    <button
                        class="flex items-center justify-center rounded-full w-[40px] h-[40px] active:bg-black/10 active:border active:border-gray-200 opacity-0 focus:opacity-100 focus:bg-black/10"
                    >
                        <IconMore class="w-[24px] h-[24px]" />
                    </button>
                </div>
            </div>
        </div>
        <div
            class="invisible absolute top-0 left-0 z-[3] shadow-lg transition-all delay-1000"
            :class="{ '!visible scale-110': hasHover, '!delay-75': !hasHover }"
        >
            <div class="relative">
                <a href="#" class="outline-none">
                    <img
                        class="max-h-full max-w-full object-contain"
                        src="https://random.imagecdn.app/720/404"
                        alt=""
                        @mouseenter="hasHover = true"
                        @mouseleave="hasHover = false"
                    />
                </a>

                <span
                    class="absolute bottom-0 right-0 inline-block m-1 px-1 pt-[2px] bg-black text-white text-sm rounded-sm hidden"
                    >Если убрать указатель предпросмотр прекратится</span
                >
                <span
                    class="absolute bottom-0 right-0 inline-block m-1 px-1 pt-[2px] bg-black text-white text-sm rounded-sm"
                    >8:39</span
                >
            </div>
            <div id="details" class="pt-3 flex relative bg-white">
                <a href="#" class="mr-3 shrink-0 outline-none">
                    <img
                        class="rounded-full w-[36px] h-[36px]"
                        width="36"
                        height="36"
                        src="https://random.imagecdn.app/36/36"
                        alt="profile-icon"
                    />
                </a>
                <div class="pr-7 w-full">
                    <div :class="{ 'outline outline-2 rounded-sm': hasFocusTitle }">
                        <h3
                            class="mb-2 text-base 2xl:text-lg font-medium leading-6 line-clamp-2"
                            :class="{ 'text-sm': hasHover }"
                        >
                            <a
                                href="#"
                                class="outline-none"
                                @focusin="hasFocusTitle = true"
                                @focusout="hasFocusTitle = false"
                                >💎 Новые музыкальные клипы 2022 (11-14-я недели) 💎 В Рейтинге
                                Лучшие моменты
                            </a>
                        </h3>
                    </div>
                    <div>
                        <p
                            class="flex items-center text-[#606060] hover:text-gray-900 text-sm 2xl:text-base overflow-hidden text-ellipsis whitespace-nowrap"
                            :class="{ 'text-xs': hasHover }"
                        >
                            <a
                                href="#"
                                class="border rounded-sm border-transparent focus:border-black outline-none"
                            >
                                В Рейтинге
                            </a>
                            <span class="opacity-60 pl-1">
                                <IconCheck class="w-4 h-4" />
                            </span>
                        </p>
                        <div v-if="!isStream">
                            <p
                                class="text-[#606060] text-sm 2xl:text-base cursor-pointer"
                                :class="{ 'text-xs': hasHover }"
                            >
                                <span class="inline-block after:content-['•'] after:m-1"
                                    >2&nbsp;млн просмотров</span
                                >
                                <span class="inline-block">5 месяцев назад</span>
                            </p>
                        </div>
                        <div v-if="isStream">
                            <p
                                class="mb-1 text-[#606060] text-sm 2xl:text-base overflow-hidden text-ellipsis whitespace-nowrap whitespace-nowrap"
                            >
                                Зрителей: 1,3 тыс.
                            </p>
                            <div
                                class="px-1 py-[1px] flex items-center w-max bg-[#cc0000e6] text-white rounded-sm tracking-wide"
                            >
                                <IconTranslation class="w-4 h-4 fill-current mr-1" />
                                <span class="uppercase font-medium text-sm leading-4">В эфире</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute -top-1 -right-3">
                    <button
                        class="flex items-center justify-center rounded-full w-[40px] h-[40px] active:bg-black/10 active:border active:border-gray-200 opacity-0 focus:opacity-100 focus:bg-black/10"
                    >
                        <IconMore class="w-[24px] h-[24px]" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import IconCheck from './icons/IconCheck.vue'
import IconTranslation from './icons/IconTranslation.vue'
import IconMore from './icons/IconMore.vue'

const props = defineProps({
    id: {
        type: Number,
        default: 1,
    },
    isStream: {
        type: Boolean,
        default: false,
    },
})

const videoImg = `https://source.unsplash.com/random/360x200?sig=${props.id}`
const userProfileImg = `https://source.unsplash.com/random/36x36?sig=${props.id}`
const hasFocusTitle = ref(false)
const hasHover = ref(false)
</script>
