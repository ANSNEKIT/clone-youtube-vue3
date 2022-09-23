<template>
    <aside
        id="sidebar-mini"
        class="w-[72px] pt-[56px] fixed top-0 z-[8] min-h-screen h-full overflow-hidden bg-white"
        :class="{ 'md:block': isOpen, '!hidden': !isOpen }"
    >
        <div id="aside-container" class="mt-1 h-full">
            <section class="">
                <ul class="">
                    <SidebarMiniItem name="Главная" :is-active="activeItem === 'home'">
                        <IconHomeSolid
                            v-if="activeItem === 'home'"
                            class="w-[24px] h-[24px] mb-1.5"
                        />
                        <IconHome v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />
                    </SidebarMiniItem>
                    <SidebarMiniItem name="Навигатор" :is-active="activeItem === 'navigator'">
                        <IconCompassSolid
                            v-if="activeItem === 'navigator'"
                            class="w-[24px] h-[24px] mb-1.5"
                        />
                        <IconCompass v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />
                    </SidebarMiniItem>
                    <SidebarMiniItem name="Shorts" :is-active="activeItem === 'shorts'">
                        <IconShortsSolid
                            v-if="activeItem === 'shorts'"
                            class="w-[24px] h-[24px] mb-1.5"
                        />
                        <IconShorts v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />
                    </SidebarMiniItem>
                    <SidebarMiniItem name="Подписки" :is-active="activeItem === 'subscribes'">
                        <IconSubscribeSolid
                            v-if="activeItem === 'subscribes'"
                            class="w-[24px] h-[24px] mb-1.5"
                        />
                        <IconSubscribe v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />
                    </SidebarMiniItem>
                    <SidebarMiniItem name="Библиотека" :is-active="activeItem === 'library'">
                        <IconLibrarySolid
                            v-if="activeItem === 'library'"
                            class="w-[24px] h-[24px] mb-1.5"
                        />
                        <IconLibrary v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />
                    </SidebarMiniItem>
                    <SidebarMiniItem name="История" :is-active="activeItem === 'history'">
                        <IconHistorySolid
                            v-if="activeItem === 'history'"
                            class="w-[24px] h-[24px] mb-1.5"
                        />
                        <IconHistory v-else class="w-[24px] h-[24px] mb-1.5 stroke-1" />
                    </SidebarMiniItem>
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
import SidebarMiniItem from './SidebarMiniItem.vue'

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
})

const activeItem = ref('home')
</script>
