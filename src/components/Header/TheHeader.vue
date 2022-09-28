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

                <AppLogo />
            </div>
            <div
                id="center"
                class="w-full xl:w-[728px] ml-10 flex items-center justify-end xl:justify-between"
            >
                <TheSearch />

                <AppButton tooltip="Голосовой поиск" :btn-class="'ml-2 hidden sm:flex bg-black/5'">
                    <IconMicrophone class="w-[24px] h-[24px] text-black" />
                </AppButton>
            </div>
            <div id="right" class="min-w-max sm:min-w-[225px] flex items-center justify-end">
                <AppButton
                    tooltip="Введите запрос"
                    class="whitespace-normal"
                    :btn-class="'sm:hidden'"
                >
                    <IconSearch class="w-[24px] h-[24px]" />
                </AppButton>
                <AppButton tooltip="Голосовой поиск" :btn-class="'ml-2 sm:hidden'">
                    <IconMicrophone class="w-[24px] h-[24px] text-black" />
                </AppButton>
                <DropdownSettings />
                <AppButtonLogin class="ml-2" />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import IconBar from '@/components/icons/IconBar.vue'
import IconMicrophone from '@/components/icons/IconMicrophone.vue'
import AppLogo from '@/components/base/AppLogo.vue'
import TheSearch from '@/components/Search/TheSearch.vue'
import AppButtonLogin from '@/components/base/AppButtonLogin.vue'
import AppButton from '@/components/base/AppButton.vue'
import DropdownSettings from '@/components/DropdownSettings/DropdownSettings.vue'
import IconSearch from '../icons/IconSearch.vue'

defineEmits(['toggleSidebar'])
</script>
