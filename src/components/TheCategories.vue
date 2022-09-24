<template>
    <section
        class="h-[56px] w-full fixed top-[56px] z-[7] bg-white bg-opacity-95"
        :class="{
            'md:ml-[72px]': sidebarState === 'compact',
            'xl:ml-[240px]': sidebarState === 'normal',
        }"
    >
        <div class="border-y border-y-black/10 relative overflow-hidden whitespace-nowrap">
            <div class="h-full absolute z-10 left-0 top-0 flex">
                <div class="w-[56px] flex items-center justify-center bg-white">
                    <button class="w-[32px] h-[32px] p-2 rounded-full active:bg-black/10">
                        <IconArrowLeft width="16" height="16" class="w-4.5 h-4.5" />
                    </button>
                </div>

                <span class="block w-[50px] bg-gradient-to-r from-white"></span>
            </div>

            <div class="inline-block transition translate-x-0">
                <ul
                    class="px-6 py-[11px] first-letter:py-[11px] mx-auto w-full flex max-w-screen-4xl overflow-x-auto whitespace-nowrap"
                >
                    <li class="space-x-3">
                        <CategotyItem
                            v-for="(category, index) in categories"
                            :id="index"
                            :key="index"
                            :is-active="index === activeItemIndex"
                            :category="category"
                            @change-active-category="activeItemIndex = $event"
                        />
                    </li>
                </ul>
            </div>

            <div class="h-full absolute z-10 right-[240px] top-0 flex">
                <span class="block w-[50px] bg-gradient-to-l from-white"></span>
                <div class="w-[56px] flex items-center justify-center bg-white">
                    <button class="w-[32px] h-[32px] p-1 rounded-full active:bg-black/10">
                        <IconArrowRight width="20" height="20" class="w-[20px] h-[20px]" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconArrowRight from './icons/IconArrowRight.vue'
import IconArrowLeft from './icons/IconArrowLeft.vue'
import CategotyItem from './CategotyItem.vue'

const store = useStore()
const sidebarState = computed(() => store.state.sidebarState)

const activeItemIndex = ref(0)
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
</script>
