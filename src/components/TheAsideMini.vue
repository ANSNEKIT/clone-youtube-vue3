<template>
    <aside
        class="xl:hidden w-[72px] pt-14 fixed top-0 z-[8] max-h-screen h-full overflow-hidden bg-white"
    >
        <div id="aside-container" class="mt-1 h-full overflow-x-hidden overflow-y-auto">
            <section class="">
                <ul class="">
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-neutral-100 active:bg-neutral-300"
                        >
                            <IconHomeSolid
                                v-if="activeIcon === 'home'"
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5"
                            />
                            <IconHome
                                v-else
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5 stroke-1"
                            />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Главная</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-neutral-100 active:bg-neutral-300"
                        >
                            <IconCompassSolid
                                v-if="activeIcon === 'compass'"
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5"
                            />
                            <IconCompass
                                v-else
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5 stroke-1"
                            />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Навигатор</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-neutral-100 active:bg-neutral-300"
                        >
                            <IconShortsSolid
                                v-if="activeIcon === 'shorts'"
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5"
                            />
                            <IconShorts
                                v-else
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5 stroke-1"
                            />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Shorts</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-neutral-100 active:bg-neutral-300"
                        >
                            <IconSubscribeSolid
                                v-if="activeIcon === 'subscribe'"
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5"
                            />
                            <IconSubscribe
                                v-else
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5 stroke-1"
                            />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Подписки</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-neutral-100 active:bg-neutral-300"
                        >
                            <IconLibrarySolid
                                v-if="activeIcon === 'library'"
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5"
                            />
                            <IconLibrary
                                v-else
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5 stroke-1"
                            />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Библиотека</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-neutral-100 active:bg-neutral-300"
                        >
                            <IconHistorySolid
                                v-if="activeIcon === 'history'"
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5"
                            />
                            <IconHistory
                                v-else
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mb-1.5 stroke-1"
                            />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >История</span
                            >
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconHomeSolid from './icons/IconHomeSolid.vue'
import IconHome from './icons/IconHome.vue'
import IconCompassSolid from './icons/IconCompassSolid.vue'
import IconCompass from './icons/IconCompass.vue'
import IconShortsSolid from './icons/IconShortsSolid.vue'
import IconShorts from './icons/IconShorts.vue'
import IconSubscribeSolid from './icons/IconSubscribeSolid.vue'
import IconSubscribe from './icons/IconSubscribe.vue'
import IconLibrarySolid from './icons/IconLibrarySolid.vue'
import IconLibrary from './icons/IconLibrary.vue'
import IconHistorySolid from './icons/IconHistorySolid.vue'
import IconHistory from './icons/IconHistory.vue'

const activeIcon = ref('home')
</script>
