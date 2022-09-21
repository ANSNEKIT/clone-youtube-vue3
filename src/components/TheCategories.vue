<template>
    <section
        class="md:ml-[72px] xl:ml-[240px] h-[56px] w-full fixed top-[56px] z-[7] bg-white bg-opacity-95"
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
                <div
                    class="px-6 py-[11px] mx-auto w-full flex space-x-3 max-w-screen-4xl overflow-x-auto whitespace-nowrap"
                >
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            '!bg-black !text-white': activeItem === 'all',
                        }"
                    >
                        Все
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Видеоигры
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Музыка
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Сейчас в эфире
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Ситкомы
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Анимация
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Туризм
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Кулинарные шоу
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Футбол
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Природа
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Туристические направления
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Кулинария
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Ремесла
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Изобразительное искусство
                    </button>
                    <button
                        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10 border-black/10"
                        :class="{
                            'bg-black text-white': activeItem === 'any',
                        }"
                    >
                        Последние опубликованные видео
                    </button>
                </div>
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
import { ref } from 'vue'
import IconArrowRight from './icons/IconArrowRight.vue'
import IconArrowLeft from './icons/IconArrowLeft.vue'
const activeItem = ref('all')
</script>
