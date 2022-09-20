<template>
    <main class="md:ml-[72px] xl:ml-[240px] mt-[128px] px-10 3esm:px-0 4esm:px-6 pb-6">
        <div
            class="bg-gray-50 min-h-screen 3sm:max-w-none 4esm:max-w-[670px] xl:!max-w-[1500px] 3xl:!max-w-[1840px] mx-auto overflow-x-hidden"
        >
            <section
                class="pb-10 grid grid-cols-1 3esm:grid-cols-2 3sm:!grid-cols-3 2lg:!grid-cols-4 3xl:!grid-cols-5 3xl:!grid-cols-5 4xl:!grid-cols-6 gap-x-4 gap-y-10 justify-items-center"
            >
                <AppCard />
                <AppCard :isStream="true" />
                <AppCard />
                <AppCard />

                <AppCard />
                <AppCard />
                <AppCard :isStream="true" />
                <AppCard />
            </section>
            <section id="shorts" class="border-t-4 border-t-black/10">
                <h2 class="my-6 ml-2 text-[#030303] text-2xl">
                    <a href="#" class="flex items-center">
                        <IconShortsColorized class="mr-2 w-6.5 h-6.5" width="24" height="24" />
                        Shorts
                    </a>
                </h2>
                <div class="mb-10 grid grid-cols-9 gap-x-4 gap-y-10">
                    <div>
                        <div class="relative">
                            <a href="#">
                                <img
                                    class="max-h-full max-w-full object-contain"
                                    src="https://random.imagecdn.app/405/720"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="details" class="mt-3 flex relative">
                            <a href="#">
                                <div class="pr-7 w-full">
                                    <h3
                                        class="mb-2 text-lg font-medium leading-6 line-clamp-2 tracking-wide"
                                    >
                                        <a href="#">Разорвали эстраду в щепки! Лучший cover!</a>
                                    </h3>
                                    <div>
                                        <p
                                            class="text-[#606060] text-base overflow-hidden text-ellipsis whitespace-nowrap"
                                        >
                                            5&nbsp;млн просмотров
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <div class="absolute -top-1 -right-3">
                                <button
                                    class="flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                                >
                                    <IconMore class="w-6.5 h-6.5" width="24" height="24" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative">
                            <a href="#">
                                <img
                                    class="max-h-full max-w-full object-contain"
                                    src="https://random.imagecdn.app/405/720"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="details" class="mt-3 flex relative">
                            <a href="#">
                                <div class="pr-7 w-full">
                                    <h3
                                        class="mb-2 text-lg font-medium leading-6 line-clamp-2 tracking-wide"
                                    >
                                        <a href="#">Разорвали эстраду в щепки! Лучший cover!</a>
                                    </h3>
                                    <div>
                                        <p
                                            class="text-[#606060] text-base overflow-hidden text-ellipsis whitespace-nowrap"
                                        >
                                            5&nbsp;млн просмотров
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <div class="absolute -top-1 -right-3">
                                <button
                                    class="flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                                >
                                    <IconMore class="w-6.5 h-6.5" width="24" height="24" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative">
                            <a href="#">
                                <img
                                    class="max-h-full max-w-full object-contain"
                                    src="https://random.imagecdn.app/405/720"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="details" class="mt-3 flex relative">
                            <a href="#">
                                <div class="pr-7 w-full">
                                    <h3
                                        class="mb-2 text-lg font-medium leading-6 line-clamp-2 tracking-wide"
                                    >
                                        <a href="#">Разорвали эстраду в щепки! Лучший cover!</a>
                                    </h3>
                                    <div>
                                        <p
                                            class="text-[#606060] text-base overflow-hidden text-ellipsis whitespace-nowrap"
                                        >
                                            5&nbsp;млн просмотров
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <div class="absolute -top-1 -right-3">
                                <button
                                    class="flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                                >
                                    <IconMore class="w-6.5 h-6.5" width="24" height="24" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative">
                            <a href="#">
                                <img
                                    class="max-h-full max-w-full object-contain"
                                    src="https://random.imagecdn.app/405/720"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="details" class="mt-3 flex relative">
                            <a href="#">
                                <div class="pr-7 w-full">
                                    <h3
                                        class="mb-2 text-lg font-medium leading-6 line-clamp-2 tracking-wide"
                                    >
                                        <a href="#">Разорвали эстраду в щепки! Лучший cover!</a>
                                    </h3>
                                    <div>
                                        <p
                                            class="text-[#606060] text-base overflow-hidden text-ellipsis whitespace-nowrap"
                                        >
                                            5&nbsp;млн просмотров
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <div class="absolute -top-1 -right-3">
                                <button
                                    class="flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                                >
                                    <IconMore class="w-6.5 h-6.5" width="24" height="24" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative">
                            <a href="#">
                                <img
                                    class="max-h-full max-w-full object-contain"
                                    src="https://random.imagecdn.app/405/720"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="details" class="mt-3 flex relative">
                            <a href="#">
                                <div class="pr-7 w-full">
                                    <h3
                                        class="mb-2 text-lg font-medium leading-6 line-clamp-2 tracking-wide"
                                    >
                                        <a href="#">Разорвали эстраду в щепки! Лучший cover!</a>
                                    </h3>
                                    <div>
                                        <p
                                            class="text-[#606060] text-base overflow-hidden text-ellipsis whitespace-nowrap"
                                        >
                                            5&nbsp;млн просмотров
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <div class="absolute -top-1 -right-3">
                                <button
                                    class="flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                                >
                                    <IconMore class="w-6.5 h-6.5" width="24" height="24" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative">
                            <a href="#">
                                <img
                                    class="max-h-full max-w-full object-contain"
                                    src="https://random.imagecdn.app/405/720"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="details" class="mt-3 flex relative">
                            <a href="#">
                                <div class="pr-7 w-full">
                                    <h3
                                        class="mb-2 text-lg font-medium leading-6 line-clamp-2 tracking-wide"
                                    >
                                        <a href="#">Разорвали эстраду в щепки! Лучший cover!</a>
                                    </h3>
                                    <div>
                                        <p
                                            class="text-[#606060] text-base overflow-hidden text-ellipsis whitespace-nowrap"
                                        >
                                            5&nbsp;млн просмотров
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <div class="absolute -top-1 -right-3">
                                <button
                                    class="flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                                >
                                    <IconMore class="w-6.5 h-6.5" width="24" height="24" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative">
                            <a href="#">
                                <img
                                    class="max-h-full max-w-full object-contain"
                                    src="https://random.imagecdn.app/405/720"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="details" class="mt-3 flex relative">
                            <a href="#">
                                <div class="pr-7 w-full">
                                    <h3
                                        class="mb-2 text-lg font-medium leading-6 line-clamp-2 tracking-wide"
                                    >
                                        <a href="#">Разорвали эстраду в щепки! Лучший cover!</a>
                                    </h3>
                                    <div>
                                        <p
                                            class="text-[#606060] text-base overflow-hidden text-ellipsis whitespace-nowrap"
                                        >
                                            5&nbsp;млн просмотров
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <div class="absolute -top-1 -right-3">
                                <button
                                    class="flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                                >
                                    <IconMore class="w-6.5 h-6.5" width="24" height="24" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative">
                            <a href="#">
                                <img
                                    class="max-h-full max-w-full object-contain"
                                    src="https://random.imagecdn.app/405/720"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="details" class="mt-3 flex relative">
                            <a href="#">
                                <div class="pr-7 w-full">
                                    <h3
                                        class="mb-2 text-lg font-medium leading-6 line-clamp-2 tracking-wide"
                                    >
                                        <a href="#">Разорвали эстраду в щепки! Лучший cover!</a>
                                    </h3>
                                    <div>
                                        <p
                                            class="text-[#606060] text-base overflow-hidden text-ellipsis whitespace-nowrap"
                                        >
                                            5&nbsp;млн просмотров
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <div class="absolute -top-1 -right-3">
                                <button
                                    class="flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                                >
                                    <IconMore class="w-6.5 h-6.5" width="24" height="24" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="py-1 w-full h-[40px] flex flex-1 justify-center items-center rounded-sm hover:bg-black/10"
                >
                    <IconDown class="w-6.5 h-6.5" width="24" height="24" />
                </button>
            </section>
            <section
                id="mini"
                class="py-10 grid grid-cols-1 3esm:grid-cols-2 3sm:!grid-cols-3 2lg:!grid-cols-4 3xl:!grid-cols-5 3xl:!grid-cols-5 4xl:!grid-cols-6 gap-x-4 gap-y-10 justify-items-center border-t-4 border-t-black/10"
            >
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
            </section>
            <section id="trends" class="border-t-4 border-t-black/10">
                <h2 class="my-6 ml-2 text-[#030303] text-2xl"><a href="#"> В тренде </a></h2>
                <div class="mb-10 grid grid-cols-4 gap-x-4 gap-y-10">
                    <AppCard />
                    <AppCard :isStream="true" />
                    <AppCard />
                    <AppCard />
                </div>
                <button
                    class="py-1 w-full h-[40px] flex flex-1 justify-center items-center rounded-sm hover:bg-black/10"
                >
                    <IconDown class="w-6.5 h-6.5" width="24" height="24" />
                </button>
            </section>
            <section
                class="py-10 grid grid-cols-1 3esm:grid-cols-2 3sm:!grid-cols-3 2lg:!grid-cols-4 3xl:!grid-cols-5 3xl:!grid-cols-5 4xl:!grid-cols-6 gap-x-4 gap-y-10 justify-items-center border-t-4 border-t-black/10"
            >
                <AppCard />
                <AppCard :isStream="true" />
                <AppCard />
                <AppCard />

                <AppCard />
                <AppCard />
                <AppCard :isStream="true" />
                <AppCard />

                <AppCard />
                <AppCard :isStream="true" />
                <AppCard />
                <AppCard />

                <AppCard />
                <AppCard />
                <AppCard :isStream="true" />
                <AppCard />

                <AppCard />
                <AppCard :isStream="true" />
                <AppCard />
                <AppCard />

                <AppCard />
                <AppCard />
                <AppCard :isStream="true" />
                <AppCard />
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
import IconMore from '@/components/icons/IconMore.vue'
import IconCheck from './icons/IconCheck.vue'
import IconTranslation from './icons/IconTranslation.vue'
import IconDown from './icons/IconDown.vue'
import IconShortsColorized from './icons/IconShortsColorized.vue'
import AppCard from './AppCard.vue'
</script>
