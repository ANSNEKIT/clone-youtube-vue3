<template>
    <main
        class="mt-[128px] px-10 3esm:px-0 4esm:px-6 pb-6"
        :class="{
            'md:ml-[72px]': sidebarState === 'compact',
            'xl:ml-[240px]': sidebarState === 'normal',
        }"
    >
        <div
            class="bg-gray-50 min-h-screen 3sm:max-w-none 4esm:max-w-[670px] xl:!max-w-[1500px] 3xl:!max-w-[1840px] mx-auto overflow-hidden"
        >
            <section
                class="px-3 pb-10 grid grid-cols-1 3esm:grid-cols-2 3sm:!grid-cols-3 2lg:!grid-cols-4 3xl:!grid-cols-5 4xl:!grid-cols-6 gap-x-4 gap-y-10 justify-items-center"
            >
                <VideoItem
                    v-for="(video, index) in firstSection"
                    :id="index"
                    :key="video.id"
                    :is-stream="video.isStream"
                />
            </section>
            <section id="shorts" class="border-t-4 border-t-black/10">
                <h2 class="my-6 ml-2 text-[#030303] text-2xl outline-none">
                    <a href="#" class="flex items-center">
                        <IconShortsColorized class="mr-2 w-6.5 h-6.5" width="24" height="24" />
                        Shorts
                    </a>
                </h2>
                <div class="mb-10 grid grid-cols-9 gap-x-4 gap-y-10">
                    <VideoShortItem v-for="i in 8" :id="i" :key="i" />
                </div>
                <button
                    class="py-1 w-full h-[40px] flex flex-1 justify-center items-center rounded-sm hover:bg-black/10"
                >
                    <IconDown class="w-6.5 h-6.5" width="24" height="24" />
                </button>
            </section>
            <section
                id="mini"
                class="pt-10 px-3 pb-10 grid grid-cols-1 3esm:grid-cols-2 3sm:!grid-cols-3 2lg:!grid-cols-4 3xl:!grid-cols-5 4xl:!grid-cols-6 gap-x-4 gap-y-10 justify-items-center border-t-4 border-t-black/10"
            >
                <VideoItem v-for="i in 4" :id="i" :key="i" />
            </section>
            <section id="trends" class="border-t-4 border-t-black/10">
                <h2 class="my-6 ml-2 text-[#030303] text-2xl"><a href="#"> В тренде </a></h2>
                <div class="mb-10 grid grid-cols-4 gap-x-4 gap-y-10">
                    <VideoItem
                        v-for="(video, index) in sectionTrends"
                        :id="index"
                        :key="video.id"
                        :is-stream="video.isStream"
                    />
                </div>
                <button
                    class="py-1 w-full h-[40px] flex flex-1 justify-center items-center rounded-sm hover:bg-black/10"
                >
                    <IconDown class="w-6.5 h-6.5" width="24" height="24" />
                </button>
            </section>
            <section
                class="pt-10 px-3 pb-10 grid grid-cols-1 3esm:grid-cols-2 3sm:!grid-cols-3 2lg:!grid-cols-4 3xl:!grid-cols-5 4xl:!grid-cols-6 gap-x-4 gap-y-10 justify-items-center border-t-4 border-t-black/10"
            >
                <VideoItem v-for="i in 24" :id="i" :key="i" />
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import IconDown from '@/components/icons/IconDown.vue'
import IconShortsColorized from '@/components/icons/IconShortsColorized.vue'
import VideoItem from './VideoItem.vue'
import VideoShortItem from './VideoShortItem.vue'

const store = useStore()
const sidebarState = computed(() => store.state.sidebarState)

const getRandomId = (length: number) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    const min = 0

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(min + Math.random() * charactersLength + 1 - min))
    }

    return result
}

const firstSection = [
    {
        id: getRandomId(6),
        isStream: false,
    },
    {
        id: getRandomId(6),
        isStream: true,
    },
    {
        id: getRandomId(6),
        isStream: false,
    },
    {
        id: getRandomId(6),
        isStream: false,
    },
    {
        id: getRandomId(6),
        isStream: false,
    },
    {
        id: getRandomId(6),
        isStream: false,
    },
    {
        id: getRandomId(6),
        isStream: true,
    },
    {
        id: getRandomId(6),
        isStream: false,
    },
]
const sectionTrends = [
    {
        id: getRandomId(6),
        isStream: false,
    },
    {
        id: getRandomId(6),
        isStream: true,
    },
    {
        id: getRandomId(6),
        isStream: false,
    },
    {
        id: getRandomId(6),
        isStream: false,
    },
]
</script>
