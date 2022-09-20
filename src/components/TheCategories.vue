<template>
    <section
        class="md:ml-[72px] xl:ml-[240px] w-full h-[56px] fixed top-[56px] z-[7] bg-white bg-opacity-95 whitespace-nowrap overflow-hidden"
    >
        <div class="border-y border-y-black/10">
            <div
                class="px-6 py-[11px] mx-auto w-full flex space-x-3 max-w-screen-4xl overflow-auto whitespace-nowrap"
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
    </section>
</template>

<script setup>
import { ref } from 'vue'
const activeItem = ref('all')
</script>
