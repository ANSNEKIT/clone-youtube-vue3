<template>
    <header class="bg-white">
        <div id="container" class="px-4 h-14 w-full flex flex-row items-center justify-between">
            <div id="left" class="flex flex-row items-center justify-between">
                <button class="w-10 p-2 m-0 rounded-full active:shadow-lg">
                    <IconBar width="24" height="24" class="w-6 text-black" />
                </button>
                <div class="p-1 ml-2 flex flex-row items-center justify-between">
                    <a href="#" class="w-full">
                        <IconLogo width="90" height="20" />
                    </a>
                    <span class="ml-1 mb-5 text-neutral-600 text-[10px]">RU</span>
                </div>
            </div>
            <div id="center" class="w-[728px] h-10 ml-10 flex flex-row items-center">
                <div id="search" class="flex flex-1 flex-row items-center">
                    <div
                        class="inp-container border-r-0 ml-9 h-10 flex flex-1 flex-row items-center bg-white text-black rounded-l py-0.5 px-1.5 border border-gray-300"
                    >
                        <div>
                            <IconSearch class="px-2.5 w-5 h-5" width="20" height="20" />
                        </div>
                        <input
                            id="search"
                            autocapitalize="none"
                            autocomplete="off"
                            autocorrect="off"
                            name="search_query"
                            tabindex="0"
                            type="text"
                            spellcheck="false"
                            placeholder="Введите запрос"
                            aria-label="Введите запрос"
                            role="combobox"
                            aria-haspopup="false"
                            aria-autocomplete="list"
                            class="h-6"
                            dir="ltr"
                            style="
                                border: none;
                                padding: 0px;
                                margin: 0px;
                                height: auto;
                                width: 100%;
                                outline: none;
                            "
                        />
                        <div class="pr-2 flex flex-row items-center">
                            <a href="#" class="cursor-pointer">
                                <span
                                    class="inline-block h-[11px] w-[19px] bg-[url('data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==')] bg-no-repeat bg-center align-middle opacity-60 hover:opacity-100 active:opacity-100"
                                >
                                    <img src="@/assets/img/tia.png" width="19" class="invisible" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <button
                        class="w-16 h-10 cursor-pointer px-1 border border-solid border-gray-300 rounded-r bg-neutral-50 hover:bg-neutral-100"
                        aria-label="Введите запрос"
                    >
                        <IconSearch width="24" height="24" />
                    </button>
                </div>
                <button
                    class="ml-2 flex items-center justify-center rounded-full w-10 h-10 bg-neutral-100 hover:bg-neutral-200"
                >
                    <IconMicrophone width="24" height="24" class="w-6 h-6 text-black" />
                </button>
            </div>
            <div id="right" class="flex items-center justify-center">
                <button
                    class="mr-2 flex items-center justify-center rounded-full w-10 h-10 active:bg-neutral-50 active:border active:border-gray-200"
                >
                    <IconMore width="24" height="24" class="w-6 h-6 text-[#030303]" />
                </button>
                <button
                    class="px-3 py-1 flex flex-1 items-center justify-center align-middle tracking-wide rounded-3xl font-medium whitespace-nowrap text-sm text-[#065fd4] border border-gray-300 hover:bg-[#def1ff] hover:border-transparent"
                >
                    <IconUser width="24" height="24" class="w-6 h-6 mr-1.5 fill-current" />
                    Войти
                </button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import IconLogo from './icons/IconLogo.vue'
import IconBar from './icons/IconBar.vue'
import IconSearch from './icons/IconSearch.vue'
import IconMicrophone from './icons/IconMicrophone.vue'
import IconMore from './icons/IconMore.vue'
import IconUser from './icons/IconUser.vue'
</script>
