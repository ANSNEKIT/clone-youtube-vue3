<template>
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
                <h3 class="mb-1 text-base 2xl:text-lg font-medium leading-5 line-clamp-2">
                    <a
                        href="#"
                        class="outline-none"
                        @focusin="hasFocusTitle = true"
                        @focusout="hasFocusTitle = false"
                        >💎 Новые музыкальные клипы 2022 (11-14-я недели) 💎 В Рейтинге Лучшие
                        моменты
                    </a>
                </h3>
            </div>
            <div>
                <div class="flex text-[#606060] hover:text-gray-900 text-sm 2xl:text-base">
                    <a
                        href="#"
                        class="border rounded-sm border-transparent focus:border-black outline-none"
                    >
                        <AppTooltip :tooltip="channelName" :top="true">
                            <span class="overflow-hidden text-ellipsis whitespace-nowrap">{{
                                channelName
                            }}</span>
                        </AppTooltip>
                    </a>

                    <AppTooltip tooltip="Подтверждено" :top="true">
                        <div class="opacity-60 pl-1">
                            <IconCheckCircle class="w-4 h-4" />
                        </div>
                    </AppTooltip>
                </div>
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
        <div class="absolute top-0.5 -right-3">
            <VideoItemDetailsDropdown />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconCheckCircle from '@/components/icons/IconCheckCircle.vue'
import IconTranslation from '@/components/icons/IconTranslation.vue'
import VideoItemDetailsDropdown from './VideoItemDetailsDropdown.vue'
import AppTooltip from '@/components/base/AppTooltip.vue'

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

const userProfileImg = `https://source.unsplash.com/random/36x36?sig=${props.id}`
const hasFocusTitle = ref(false)
const channelName = 'В рейтинге'
</script>
