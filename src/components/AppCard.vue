<template>
    <div class="max-w-[320px] 2xl:max-w-[360px]">
        <div class="relative">
            <a href="#">
                <img
                    class="max-h-full max-w-full object-contain"
                    src="https://random.imagecdn.app/720/404"
                    alt=""
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
        <div id="details" class="mt-3 flex relative">
            <a href="#" class="mr-3 shrink-0">
                <img
                    class="rounded-full w-9 h-9"
                    width="36"
                    height="36"
                    src="https://random.imagecdn.app/36/36"
                    alt="profile-icon"
                />
            </a>
            <div class="pr-7 w-full">
                <h3 class="mb-2 text-base 2xl:text-lg font-medium leading-6 line-clamp-2">
                    <a href="#"
                        >💎 Новые музыкальные клипы 2022 (11-14-я недели) 💎 В Рейтинге Лучшие
                        моменты
                    </a>
                </h3>
                <div class="">
                    <a href="#">
                        <p
                            class="flex items-center text-[#606060] hover:text-gray-900 text-sm 2xl:text-base overflow-hidden text-ellipsis whitespace-nowrap"
                        >
                            В Рейтинге
                            <span class="opacity-70 pl-1">
                                <IconCheck class="w-4 h-4" />
                            </span>
                        </p>
                    </a>
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
            <div class="absolute -top-1 -right-3 hidden">
                <button
                    class="flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                >
                    <IconMore class="w-[24px] h-[24px]" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconCheck from './icons/IconCheck.vue'
import IconTranslation from './icons/IconTranslation.vue'
import IconMore from './icons/IconMore.vue'

const props = defineProps({
    isStream: {
        type: Boolean,
        default: false,
    },
})
</script>
