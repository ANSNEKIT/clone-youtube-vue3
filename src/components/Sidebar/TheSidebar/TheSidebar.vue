<template>
    <aside
        ref="sidebarMobileRef"
        class="w-[240px] max-h-screen h-full fixed top-0 overflow-hidden bg-white outline-none"
        :class="{
            'pt-[56px] z-[8]': !isMobileOpen,
            '!block z-30': isMobileOpen,
            'xl:block': sidebarState === 'normal',
            hidden: sidebarState === 'compact',
        }"
        tabindex="-1"
        @keydown.esc="$emit('close')"
    >
        <div id="aside-container" class="h-full overflow-x-hidden overflow-y-auto">
            <div
                v-if="isMobileOpen"
                class="w-[240px] h-[56px] pl-4 sticky top-0 flex items-center bg-white"
            >
                <button
                    class="w-[40px] h-[40px] p-2 mr-0.5 rounded-full active:shadow-lg focus:bg-black/10"
                    @click="$emit('close')"
                >
                    <IconBar class="block w-7 h-7 stroke-0 text-[#030303]" />
                </button>
                <AppLogo />
            </div>

            <SidebarSection>
                <ul class="">
                    <SidebarItem
                        v-for="(item, index) in mainNavList.slice(0, 4)"
                        :key="index"
                        :name="item.name"
                        :icon="item.icon"
                        :is-active="item.isActive"
                    />
                </ul>
            </SidebarSection>

            <SidebarSection>
                <ul>
                    <SidebarItem
                        v-for="(item, index) in mainNavList.slice(-2)"
                        :key="index"
                        :name="item.name"
                        :icon="item.icon"
                        :is-active="item.isActive"
                    />
                </ul>
            </SidebarSection>

            <SidebarSection class="px-[32px] py-[16px]">
                <p class="text-base leading-6 tracking-wide">
                    Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на
                    каналы.
                </p>
                <AppButtonLogin class="mt-3" />
            </SidebarSection>

            <SidebarSection title="Навигатор">
                <ul>
                    <SidebarItem
                        v-for="(item, index) in navigatorList"
                        :key="index"
                        :name="item.name"
                        :icon="item.icon"
                        :is-active="item.isActive"
                    />
                </ul>
            </SidebarSection>

            <SidebarSection>
                <ul>
                    <SidebarItem name="Каталог каналов" :icon="IconPlus" />
                </ul>
            </SidebarSection>

            <SidebarSection title="Другие возможности">
                <ul>
                    <SidebarItem
                        v-for="(item, index) in moreList"
                        :key="index"
                        :name="item.name"
                        :icon="item.icon"
                        :is-active="item.isActive"
                    />
                </ul>
            </SidebarSection>

            <SidebarSection>
                <ul>
                    <SidebarItem
                        v-for="(item, index) in settingsList"
                        :key="index"
                        :name="item.name"
                        :icon="item.icon"
                        :is-active="item.isActive"
                    />
                </ul>
            </SidebarSection>

            <SidebarFooter />
        </div>
    </aside>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useStore } from 'vuex'
import IconHome from '@/components/icons/IconHome.vue'
import IconHomeSolid from '@/components/icons/IconHomeSolid.vue'
import IconCompass from '@/components/icons/IconCompass.vue'
import IconCompassSolid from '@/components/icons/IconCompassSolid.vue'
import IconShorts from '@/components/icons/IconShorts.vue'
import IconShortsSolid from '@/components/icons/IconShortsSolid.vue'
import IconSubscribe from '@/components/icons/IconSubscribe.vue'
import IconSubscribeSolid from '@/components/icons/IconSubscribeSolid.vue'
import IconLibrarySolid from '@/components/icons/IconLibrarySolid.vue'
import IconLibrary from '@/components/icons/IconLibrary.vue'
import IconHistory from '@/components/icons/IconHistory.vue'
import IconHistorySolid from '@/components/icons/IconHistorySolid.vue'
import IconFilm from '@/components/icons/IconFilm.vue'
import IconFilmSolid from '@/components/icons/IconFilmSolid.vue'
import IconGameSolid from '@/components/icons/IconGameSolid.vue'
import IconGame from '@/components/icons/IconGame.vue'
import IconTranslationSolid from '@/components/icons/IconTranslationSolid.vue'
import IconTranslation from '@/components/icons/IconTranslation.vue'
import IconSportSolid from '@/components/icons/IconSportSolid.vue'
import IconSport from '@/components/icons/IconSport.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconUMusic from '@/components/icons/IconUMusic.vue'
import IconUKids from '@/components/icons/IconUKids.vue'
import IconUTV from '@/components/icons/IconUTV.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import IconFlag from '@/components/icons/IconFlag.vue'
import IconAbout from '@/components/icons/IconAbout.vue'
import IconFeedback from '@/components/icons/IconFeedback.vue'
import IconBar from '@/components/icons/IconBar.vue'
import AppLogo from '@/components/base/AppLogo.vue'
import AppButtonLogin from '@/components/base/AppButtonLogin.vue'
import SidebarItem from './SidebarItem.vue'
import SidebarSection from './SidebarSection.vue'
import SidebarFooter from './SidebarFooter.vue'

const props = defineProps({
    isMobileOpen: {
        type: Boolean,
        default: false,
    },
})
defineEmits(['close'])

watch(
    () => props.isMobileOpen,
    () => {
        if (sidebarState.value === 'compact' && props.isMobileOpen) {
            getCloseSidebar()
        }
    },
)

const sidebarNames = {
    home: 'home',
    navigator: 'navigator',
    shorts: 'shorts',
    subscribes: 'subscribes',
    library: 'library',
    history: 'history',
    films: 'films',
    games: 'games',
    streams: 'streams',
    sports: 'sports',
}
const activeItem = ref(sidebarNames.home)
const mainNavList = [
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
const navigatorList = [
    {
        name: 'Фильмы',
        icon: activeItem.value === sidebarNames.films ? IconFilmSolid : IconFilm,
        isActive: activeItem.value === sidebarNames.films,
    },
    {
        name: 'Видеоигры',
        icon: activeItem.value === sidebarNames.games ? IconGameSolid : IconGame,
        isActive: activeItem.value === sidebarNames.games,
    },
    {
        name: 'Трансляции',
        icon: activeItem.value === sidebarNames.streams ? IconTranslationSolid : IconTranslation,
        isActive: activeItem.value === sidebarNames.streams,
    },
    {
        name: 'Спорт',
        icon: activeItem.value === sidebarNames.sports ? IconSportSolid : IconSport,
        isActive: activeItem.value === sidebarNames.sports,
    },
]
const moreList = [
    {
        name: 'YouTube Music',
        icon: IconUMusic,
        isActive: false,
    },
    {
        name: 'YouTube Детям',
        icon: IconUKids,
        isActive: false,
    },
    {
        name: 'YouTube TV',
        icon: IconUTV,
        isActive: false,
    },
]
const settingsList = [
    {
        name: 'Настройки',
        icon: IconSettings,
        isActive: false,
    },
    {
        name: 'Жалобы',
        icon: IconFlag,
        isActive: false,
    },
    {
        name: 'Справка',
        icon: IconAbout,
        isActive: false,
    },
    {
        name: 'Отправить отзыв',
        icon: IconFeedback,
        isActive: false,
    },
]

const store = useStore()
const sidebarState = computed(() => store.state.sidebarState)

const sidebarMobileRef = ref<HTMLElement | null>(null)

const getCloseSidebar = async () => {
    await nextTick()

    if (sidebarMobileRef.value) {
        sidebarMobileRef.value.focus()
    }
}
</script>
