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
                <LogoMain />
            </div>

            <SidebarSection>
                <ul class="">
                    <SidebarItem name="Главная" :is-active="activeItem === 'home'">
                        <IconHomeSolid
                            v-if="activeItem === 'home'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconHome v-else width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                    <SidebarItem name="Навигатор" :is-active="activeItem === 'navigator'">
                        <IconCompassSolid
                            v-if="activeItem === 'navigator'"
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
                    </SidebarItem>
                    <SidebarItem name="Shorts" :is-active="activeItem === 'shorts'">
                        <IconShortsSolid
                            v-if="activeItem === 'shorts'"
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
                    </SidebarItem>
                    <SidebarItem name="Подписки" :is-active="activeItem === 'subscribe'">
                        <IconSubscribeSolid
                            v-if="activeItem === 'subscribe'"
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
                    </SidebarItem>
                </ul>
            </SidebarSection>

            <SidebarSection>
                <ul>
                    <SidebarItem name="Библиотека" :is-active="activeItem === 'library'">
                        <IconLibrarySolid
                            v-if="activeItem === 'library'"
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
                    </SidebarItem>
                    <SidebarItem name="История" :is-active="activeItem === 'history'">
                        <IconHistorySolid
                            v-if="activeItem === 'history'"
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
                    </SidebarItem>
                </ul>
            </SidebarSection>

            <SidebarSection class="px-[32px] py-[16px]">
                <p class="text-base leading-6 tracking-wide">
                    Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на
                    каналы.
                </p>
                <ButtonLogin class="mt-3" />
            </SidebarSection>

            <SidebarSection title="Навигатор">
                <ul>
                    <SidebarItem name="Фильмы" :is-active="activeItem === 'films'">
                        <IconFilmSolid
                            v-if="activeItem === 'films'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconFilm v-else width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                    <SidebarItem name="Видеоигры" :is-active="activeItem === 'games'">
                        <IconGameSolid
                            v-if="activeItem === 'games'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconGame v-else width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                    <SidebarItem name="Трансляции" :is-active="activeItem === 'streams'">
                        <IconTranslationSolid
                            v-if="activeItem === 'streams'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconTranslation
                            v-else
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6 stroke-1"
                        />
                    </SidebarItem>
                    <SidebarItem name="Спорт" :is-active="activeItem === 'sports'">
                        <IconSportSolid
                            v-if="activeItem === 'sports'"
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6"
                        />
                        <IconSport
                            v-else
                            width="24"
                            height="24"
                            class="w-6.5 h-6.5 mr-6 stroke-1"
                        />
                    </SidebarItem>
                </ul>
            </SidebarSection>

            <SidebarSection>
                <ul>
                    <SidebarItem name="Каталог каналов">
                        <IconPlus width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                </ul>
            </SidebarSection>

            <SidebarSection title="Другие возможности">
                <ul>
                    <SidebarItem name="YouTube Music">
                        <IconUMusic width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                    <SidebarItem name="YouTube Детям">
                        <IconUKids width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                    <SidebarItem name="YouTube TV">
                        <IconUTV width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                </ul>
            </SidebarSection>

            <SidebarSection>
                <ul>
                    <SidebarItem name="Настройки">
                        <IconSettings width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                    <SidebarItem name="Жалобы">
                        <IconFlag width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                    <SidebarItem name="Справка">
                        <IconAbout width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                    <SidebarItem name="Отправить отзыв">
                        <IconFeedback width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />
                    </SidebarItem>
                </ul>
            </SidebarSection>

            <TheFooter />
        </div>
    </aside>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useStore } from 'vuex'
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
import IconFilm from './icons/IconFilm.vue'
import IconFilmSolid from './icons/IconFilmSolid.vue'
import IconGameSolid from './icons/IconGameSolid.vue'
import IconGame from './icons/IconGame.vue'
import IconTranslationSolid from './icons/IconTranslationSolid.vue'
import IconTranslation from './icons/IconTranslation.vue'
import IconSportSolid from './icons/IconSportSolid.vue'
import IconSport from './icons/IconSport.vue'
import IconPlus from './icons/IconPlus.vue'
import IconUMusic from './icons/IconUMusic.vue'
import IconUKids from './icons/IconUKids.vue'
import IconUTV from './icons/IconUTV.vue'
import IconSettings from './icons/IconSettings.vue'
import IconFlag from './icons/IconFlag.vue'
import IconAbout from './icons/IconAbout.vue'
import IconFeedback from './icons/IconFeedback.vue'
import IconBar from './icons/IconBar.vue'
import LogoMain from './LogoMain.vue'
import ButtonLogin from './ButtonLogin.vue'
import SidebarItem from './SidebarItem.vue'
import SidebarSection from './SidebarSection.vue'
import TheFooter from './TheFooter.vue'

const props = defineProps({
    isMobileOpen: {
        type: Boolean,
        default: false,
    },
})
defineEmits(['close'])

const store = useStore()
const sidebarState = computed(() => store.state.sidebarState)

const activeItem = ref('home')
const sidebarMobileRef = ref<HTMLElement | null>(null)

const getCloseSidebar = async () => {
    await nextTick()

    if (sidebarMobileRef.value) {
        sidebarMobileRef.value.focus()
    }
}

watch(
    () => sidebarState.value,
    () => {
        if (sidebarState.value === 'compact' && props.isMobileOpen) {
            getCloseSidebar()
        }
    },
)
</script>
