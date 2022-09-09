<template>
    <aside class="w-[240px] h-screen bg-white">
        <section class="py-3 border-b border-b-black/10">
            <ul class="">
                <li class="">
                    <a
                        href="#"
                        class="flex items-center px-6 py-2.5 hover:bg-neutral-100 active:bg-neutral-300"
                    >
                        <IconHomeSolid
                            v-if="activeIcon === 'home'"
                            width="24"
                            height="24"
                            class="w-6 h-6 mr-6"
                        />
                        <IconHome v-else width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />

                        <span
                            class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                            >Главная</span
                        >
                    </a>
                </li>
                <li class="">
                    <a
                        href="#"
                        class="flex items-center px-6 py-2.5 hover:bg-neutral-100 active:bg-neutral-300"
                    >
                        <IconCompassSolid
                            v-if="activeIcon === 'compass'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconCompass
                            v-else
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6 stroke-1"
                        />

                        <span
                            class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                            >Навигатор</span
                        >
                    </a>
                </li>
                <li class="">
                    <a
                        href="#"
                        class="flex items-center px-6 py-2.5 hover:bg-neutral-100 active:bg-neutral-300"
                    >
                        <IconShortsSolid
                            v-if="activeIcon === 'shorts'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconShorts
                            v-else
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6 stroke-1"
                        />

                        <span
                            class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                            >Shorts</span
                        >
                    </a>
                </li>
                <li class="">
                    <a
                        href="#"
                        class="flex items-center px-6 py-2.5 hover:bg-neutral-100 active:bg-neutral-300"
                    >
                        <IconSubscribeSolid
                            v-if="activeIcon === 'subscribe'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconSubscribe
                            v-else
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6 stroke-1"
                        />

                        <span
                            class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                            >Подписки</span
                        >
                    </a>
                </li>
            </ul>
        </section>
        <section class="py-3 border-b border-b-black/10">
            <ul>
                <li class="">
                    <a
                        href="#"
                        class="flex items-center px-6 py-2.5 hover:bg-neutral-100 active:bg-neutral-300"
                    >
                        <IconLibrarySolid
                            v-if="activeIcon === 'library'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconLibrary
                            v-else
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6 stroke-1"
                        />

                        <span
                            class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                            >Библиотека</span
                        >
                    </a>
                </li>
                <li class="">
                    <a
                        href="#"
                        class="flex items-center px-6 py-2.5 hover:bg-neutral-100 active:bg-neutral-300"
                    >
                        <IconHistorySolid
                            v-if="activeIcon === 'history'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconHistory
                            v-else
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6 stroke-1"
                        />

                        <span
                            class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                            >История</span
                        >
                    </a>
                </li>
            </ul>
        </section>
        <section class="px-8 py-4">
            <p class="text-base leading-6 tracking-wide">
                Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на каналы.
            </p>
            <button
                class="mt-3 px-3.5 flex flex-1 items-center align-middle tracking-wide rounded-3xl font-medium whitespace-nowrap text-base leading-9 text-[#065fd4] border border-gray-200 hover:bg-[#def1ff] hover:border-transparent"
            >
                <IconUser width="24" height="24" class="w-6.5 h-6.5 mr-1.5 fill-current" />
                Войти
            </button>
        </section>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconHome from './icons/IconHome.vue'
import IconHomeSolid from './icons/IconHomeSolid.vue'
import IconCompass from './icons/IconCompass.vue'
import IconCompassSolid from './icons/IconCompassSolid.vue'
import IconShorts from './icons/IconShorts.vue'
import IconShortsSolid from './icons/IconShortsSolid.vue'
import IconSubscribe from './icons/IconSubscribe.vue'
import IconSubscribeSolid from './icons/IconSubscribeSolid.vue'
import IconLibrarySolid from './icons/IconLibrarySolid.vue'
import IconLibrary from './icons/IconLibrary.vue'
import IconHistory from './icons/IconHistory.vue'
import IconHistorySolid from './icons/IconHistorySolid.vue'
import IconUser from './icons/IconUser.vue'

const activeIcon = ref('')
</script>
