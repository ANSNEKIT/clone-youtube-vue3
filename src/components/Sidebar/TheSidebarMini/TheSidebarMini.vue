<template>
    <aside
        id="sidebar-mini"
        class="hidden w-[72px] pt-[56px] fixed top-0 z-[8] min-h-screen h-full overflow-hidden bg-white"
        :class="{ 'md:block': sidebarState === 'compact', '!hidden': sidebarState === 'normal' }"
    >
        <div id="aside-container" class="mt-1 h-full">
            <section class="">
                <ul class="">
                    <SidebarMiniItem
                        v-for="(item, index) in items"
                        :key="index"
                        :name="item.name"
                        :is-active="item.isActive"
                        :icon="item.icon"
                    />
                </ul>
            </section>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconHomeSolid from '@/components/icons/IconHomeSolid.vue'
import IconHome from '@/components/icons/IconHome.vue'
import IconCompassSolid from '@/components/icons/IconCompassSolid.vue'
import IconCompass from '@/components/icons/IconCompass.vue'
import IconShortsSolid from '@/components/icons/IconShortsSolid.vue'
import IconShorts from '@/components/icons/IconShorts.vue'
import IconSubscribeSolid from '@/components/icons/IconSubscribeSolid.vue'
import IconSubscribe from '@/components/icons/IconSubscribe.vue'
import IconLibrarySolid from '@/components/icons/IconLibrarySolid.vue'
import IconLibrary from '@/components/icons/IconLibrary.vue'
import IconHistorySolid from '@/components/icons/IconHistorySolid.vue'
import IconHistory from '@/components/icons/IconHistory.vue'
import SidebarMiniItem from './SidebarMiniItem.vue'

const store = useStore()
const sidebarState = computed(() => store.state.sidebarState)

const sidebarNames = {
    home: 'home',
    navigator: 'navigator',
    shorts: 'shorts',
    subscribes: 'subscribes',
    library: 'library',
    history: 'history',
}

const activeItem = ref(sidebarNames.home)
const items = [
    {
        name: 'Главная',
        icon: activeItem.value === sidebarNames.home ? IconHomeSolid : IconHome,
        isActive: activeItem.value === sidebarNames.home,
    },
    {
        name: 'Навигатор',
        icon: activeItem.value === sidebarNames.navigator ? IconCompassSolid : IconCompass,
        isActive: activeItem.value === sidebarNames.navigator,
    },
    {
        name: 'Shorts',
        icon: activeItem.value === sidebarNames.shorts ? IconShortsSolid : IconShorts,
        isActive: activeItem.value === sidebarNames.shorts,
    },
    {
        name: 'Подписки',
        icon: activeItem.value === sidebarNames.subscribes ? IconSubscribeSolid : IconSubscribe,
        isActive: activeItem.value === sidebarNames.subscribes,
    },
    {
        name: 'Библиотека',
        icon: activeItem.value === sidebarNames.library ? IconLibrarySolid : IconLibrary,
        isActive: activeItem.value === sidebarNames.library,
    },
    {
        name: 'История',
        icon: activeItem.value === sidebarNames.history ? IconHistorySolid : IconHistory,
        isActive: activeItem.value === sidebarNames.history,
    },
]
</script>
