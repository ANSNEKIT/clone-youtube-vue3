<template>
    <aside
        class="w-[240px] max-h-screen h-full overflow-hidden bg-white"
        :class="{
            'hidden xl:block pt-[56px] fixed top-0 z-[8]': !isMobile,
            'opacity-100': isMobile,
        }"
    >
        <div id="aside-container" class="h-full overflow-x-hidden overflow-y-auto">
            <section v-if="isMobile" class="h-[56px] pl-4 sticky top-0 flex items-center bg-white">
                <button
                    class="w-[40px] h-[40px] p-2 mr-0.5 rounded-full active:shadow-lg focus:bg-black/10"
                >
                    <IconBar class="block w-7 h-7 stroke-0 text-[#030303]" />
                </button>
                <div class="flex items-center justify-between">
                    <a
                        href="#"
                        class="py-[18px] px-4 rounded-sm active:outline-none visited:outline-none focus:outline focus:outline-2"
                    >
                        <IconLogo width="90" height="20" class="w-[90px] h-[20px]" />
                    </a>
                    <span class="-ml-3 mb-5 text-neutral-600 text-[10px]">RU</span>
                </div>
            </section>
            <section class="py-2 border-b border-b-black/10">
                <ul class="">
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'home',
                            }"
                        >
                            <IconHomeSolid
                                v-if="activeIcon === 'home'"
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mr-6"
                            />
                            <IconHome
                                v-else
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mr-6 stroke-1"
                            />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Главная</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
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
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
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
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
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
            <section class="py-2 border-b border-b-black/10">
                <ul>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
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
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
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
            <section class="px-8 py-4 border-b border-b-black/10">
                <p class="text-base leading-6 tracking-wide">
                    Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на
                    каналы.
                </p>
                <button
                    class="mt-3 px-3.5 py-1 flex flex-1 items-center align-middle tracking-[0.5px] font-medium whitespace-nowrap text-base uppercase text-[#065fd4] border border-[#065fd4] focus:border-2"
                >
                    <IconUser width="24" height="24" class="w-6.5 h-6.5 mr-1.5 fill-current" />
                    Войти
                </button>
            </section>
            <section class="py-2 border-b border-b-black/10">
                <h3
                    class="py-2 px-6 text-[#606060] uppercase text-base leading-5 font-medium tracking-[0.5px]"
                >
                    Навигатор
                </h3>
                <ul>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconFilmSolid
                                v-if="activeIcon === 'film'"
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mr-6"
                            />
                            <IconFilm
                                v-else
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mr-6 stroke-1"
                            />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Фильмы</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconGameSolid
                                v-if="activeIcon === 'game'"
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mr-6"
                            />
                            <IconGame
                                v-else
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mr-6 stroke-1"
                            />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Видеоигры</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconTranslationSolid
                                v-if="activeIcon === 'translation'"
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

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Трансляции</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconSportSolid
                                v-if="activeIcon === 'sport'"
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

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Спорт</span
                            >
                        </a>
                    </li>
                </ul>
            </section>
            <section class="py-2 border-b border-b-black/10">
                <ul>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconPlus width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Каталог каналов</span
                            >
                        </a>
                    </li>
                </ul>
            </section>
            <section class="py-2 border-b border-b-black/10">
                <h3
                    class="py-2 px-6 text-[#606060] uppercase text-base leading-5 font-medium tracking-[0.5px]"
                >
                    Другие возможности
                </h3>
                <ul>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconUMusic width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >YouTube Music</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconUKids width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >YouTube Детям</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconUTV width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >YouTube TV</span
                            >
                        </a>
                    </li>
                </ul>
            </section>
            <section class="py-2 border-b border-b-black/10">
                <ul>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconSettings
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mr-6 stroke-1"
                            />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Настройки</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconFlag width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Жалобы</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconAbout width="24" height="24" class="w-6.5 h-6.5 mr-6 stroke-1" />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Справка</span
                            >
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="#"
                            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
                            :class="{
                                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20':
                                    activeIcon === 'any',
                            }"
                        >
                            <IconFeedback
                                width="24"
                                height="24"
                                class="w-6.5 h-6.5 mr-6 stroke-1"
                            />

                            <span
                                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                                >Отправить отзыв</span
                            >
                        </a>
                    </li>
                </ul>
            </section>
            <section id="footer" class="py-4 px-6">
                <div
                    id="guide-links-primary"
                    class="mb-3 text-[#606060] font-medium text-sm leading-5 tracking-[0.25px]"
                >
                    <a class="mr-2 inline-block" href="https://www.youtube.com/about/">О сервисе</a>
                    <a class="mr-2 inline-block" href="https://www.youtube.com/about/press"
                        >Прессе</a
                    >
                    <a class="mr-2 inline-block" href="https://www.youtube.com/about/copyright"
                        >Авторские права</a
                    >
                    <a class="mr-2 inline-block" href="/t/contact_us">Связаться с нами</a>
                    <a class="mr-2 inline-block" href="https://www.youtube.com/creators/"
                        >Авторам</a
                    >
                    <a class="mr-2 inline-block" href="https://www.youtube.com/ads/"
                        >Рекламодателям</a
                    >
                    <a class="mr-2 inline-block" href="https://developers.google.com/youtube"
                        >Разработчикам</a
                    >
                </div>
                <div
                    id="guide-links-secondary"
                    class="mb-4 text-[#606060] font-medium text-sm leading-5 tracking-[0.25px]"
                >
                    <a class="mr-2 inline-block" href="/t/terms">Условия использования</a>
                    <a class="mr-2 inline-block" href="/t/privacy">Конфиденциальность</a>
                    <a class="mr-2 inline-block" href="https://www.youtube.com/about/policies"
                        >Правила и безопасность</a
                    >
                    <a
                        class="mr-2 inline-block"
                        href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen"
                        >Как работает YouTube</a
                    >
                    <a class="mr-2 inline-block" href="/new">Тестирование новых функций</a>
                </div>
                <div id="copyright">
                    <p class="text-[#909090] text-[12px] leading-[16px] tracking-[0.25px]">
                        © 2022 Google LLC
                    </p>
                </div>
            </section>
        </div>
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
import IconLogo from './icons/IconLogo.vue'

const activeIcon = ref('home')
defineProps({
    isMobile: {
        type: Boolean,
        default: false,
    },
})
</script>
