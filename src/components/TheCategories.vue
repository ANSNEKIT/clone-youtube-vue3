<template>
    <section class="w-full px-6 py-3 fixed top-14 z-[7] bg-white border-y border-y-black/10">
        <div
            class="ml-[240px] w-full flex space-x-3"
        >
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'all',
                }"
            >
                Все
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Видеоигры
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Музыка
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Сейчас в эфире
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Ситкомы
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Анимация
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Туризм
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Кулинарные шоу
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Футбол
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Природа
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Туристические направления
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Кулинария
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Ремесла
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Изобразительное искусство
            </button>
            <button
                class="px-3 py-1.5 max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 border-black/10"
                :class="{
                    'bg-black text-white': activeItem === 'any',
                }"
            >
                Последние опубликованные видео
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const activeItem = ref('all')
</script>
