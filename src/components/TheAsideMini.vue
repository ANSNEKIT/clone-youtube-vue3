<template>
    <aside
        id="aside-mini"
        class="hidden md:block xl:!hidden w-[72px] pt-[56px] fixed top-0 z-[8] min-h-screen h-full overflow-hidden bg-white"
    >
        <div id="aside-container" class="mt-1 h-full">
            <section class="">
                <ul class="">
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-[10px] leading-4 hover:bg-black/5 focus:bg-black/5"
                        >
                            <IconHomeSolid
                                v-if="activeIcon === 'home'"
                                class="w-[24px] h-[24px] mb-1.5"
                            />
                            <IconHome v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Главная</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-black/5 focus:bg-black/5"
                        >
                            <IconCompassSolid
                                v-if="activeIcon === 'compass'"
                                class="w-[24px] h-[24px] mb-1.5"
                            />
                            <IconCompass v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Навигатор</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-black/5 focus:bg-black/5"
                        >
                            <IconShortsSolid
                                v-if="activeIcon === 'shorts'"
                                class="w-[24px] h-[24px] mb-1.5"
                            />
                            <IconShorts v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Shorts</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-black/5 focus:bg-black/5"
                        >
                            <IconSubscribeSolid
                                v-if="activeIcon === 'subscribe'"
                                class="w-[24px] h-[24px] mb-1.5"
                            />
                            <IconSubscribe v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Подписки</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-black/5 focus:bg-black/5"
                        >
                            <IconLibrarySolid
                                v-if="activeIcon === 'library'"
                                class="w-[24px] h-[24px] mb-1.5"
                            />
                            <IconLibrary v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />

                            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                                >Библиотека</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex flex-col items-center pt-[16px] pb-4 text-xs hover:bg-black/5 focus:bg-black/5"
                        >
                            <IconHistorySolid
                                v-if="activeIcon === 'history'"
                                class="w-[24px] h-[24px] mb-1.5"
                            />
                            <IconHistory v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />

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
