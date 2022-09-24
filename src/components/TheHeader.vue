<template>
    <header class="bg-white bg-opacity-95 fixed top-0 left-0 z-10 w-full h-[56px]">
        <div
            id="container"
            class="px-2 sm:px-[16px] h-full w-full flex items-center justify-between"
        >
            <div id="left" class="flex shrink-0 items-center justify-between">
                <AppButton class="mr-0.5" @click="$emit('toggleSidebar')">
                    <IconBar class="block w-7 h-7 stroke-0 text-[#030303]" />
                </AppButton>

                <LogoMain />
            </div>
            <div
                id="center"
                class="w-full xl:w-[728px] ml-10 flex items-center justify-end xl:justify-between"
            >
                <TheSearch />

                <AppButton class="ml-2 xl:bg-black/5">
                    <IconMicrophone class="w-[24px] h-[24px] text-black" />
                </AppButton>
            </div>
            <div id="right" class="min-w-max sm:min-w-[225px] flex items-center justify-end">
                <TheDropdownSettings />

                <ButtonLogin />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import IconBar from './icons/IconBar.vue'
import IconMicrophone from './icons/IconMicrophone.vue'
import TheDropdownSettings from './TheDropdownSettings.vue'
import LogoMain from './LogoMain.vue'
import TheSearch from './TheSearch.vue'
import ButtonLogin from './ButtonLogin.vue'
import AppButton from './AppButton.vue'

defineEmits(['toggleSidebar'])
</script>
