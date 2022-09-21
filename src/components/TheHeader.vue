<template>
    <header class="bg-white bg-opacity-95 fixed top-0 left-0 z-10 w-full h-[56px]">
        <div
            id="container"
            class="px-2 sm:px-[16px] h-full w-full flex items-center justify-between"
        >
            <div id="left" class="flex shrink-0 items-center justify-between">
                <button
                    class="w-[40px] h-[40px] p-2 mr-0.5 rounded-full active:shadow-lg focus:bg-black/10"
                >
                    <IconBar class="block w-7 h-7 stroke-0 text-[#030303]" />
                </button>
                <LogoMain />
            </div>
            <div
                id="center"
                class="w-full xl:w-[728px] ml-10 flex items-center justify-end xl:justify-between"
            >
                <TheSearch />

                <button
                    class="ml-2 p-2 w-[40px] h-[40px] flex items-center justify-center rounded-full xl:bg-black/5 focus:bg-black/10"
                >
                    <IconMicrophone class="w-[24px] h-[24px] text-black" />
                </button>
            </div>
            <div id="right" class="min-w-max sm:min-w-[225px] flex items-center justify-end">
                <button
                    class="mr-2 w-[40px] h-[40px] relative group flex items-center justify-center rounded-full active:bg-neutral-50 active:border active:border-gray-200 focus:bg-black/10"
                >
                    <IconMore class="w-[24px] h-[24px] text-[#030303]" />
                    <TheDropdownSettings />
                </button>
                <ButtonLogin />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import IconBar from './icons/IconBar.vue'
import IconSearch from './icons/IconSearch.vue'
import IconMicrophone from './icons/IconMicrophone.vue'
import IconMore from './icons/IconMore.vue'
import IconUser from './icons/IconUser.vue'
import TheDropdownSettings from './TheDropdownSettings.vue'
import LogoMain from './LogoMain.vue'
import TheSearch from './TheSearch.vue'
import ButtonLogin from './ButtonLogin.vue'
</script>
