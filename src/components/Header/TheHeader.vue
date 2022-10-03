<template>
    <header class="fixed top-0 z-30 w-full h-[56px] bg-white opacity-95">
        <div
            id="container"
            class="px-2 sm:px-[16px] h-full w-full flex items-center justify-between"
        >
            <div
                id="left"
                class="flex shrink-0 items-center justify-between"
                :class="{ 'opacity-0': isShowMobileSearch, 'opacity-100': !isShowMobileSearch }"
            >
                <AppButton :btn-class="'mr-0.5'" @click="$emit('toggleSidebar')">
                    <IconBar class="block w-7 h-7 stroke-0 text-[#030303]" />
                </AppButton>

                <AppLogo />
            </div>

            <TheSearchMobile
                v-if="isShowMobileSearch"
                class="flex sm:hidden"
                @close-sidebar-mobile="isShowMobileSearch = false"
            />
            <div
                v-else
                id="center"
                class="w-full xl:w-[728px] ml-10 flex items-center justify-end xl:justify-between"
            >
                <TheSearch class="hidden sm:flex" />

                <AppButton tooltip="Голосовой поиск" :btn-class="'ml-2 hidden sm:flex bg-black/5'">
                    <IconMicrophone class="w-[24px] h-[24px] text-black" />
                </AppButton>
            </div>
            <div
                id="right"
                class="min-w-max sm:min-w-[225px] flex items-center justify-end"
                :class="{ 'opacity-0': isShowMobileSearch, 'opacity-100': !isShowMobileSearch }"
            >
                <AppButton
                    tooltip="Введите запрос"
                    class="whitespace-normal"
                    :btn-class="'sm:hidden'"
                    @click.stop="isShowMobileSearch = true"
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
import { onMounted, onUnmounted, ref } from 'vue'
import IconBar from '@/components/icons/IconBar.vue'
import IconMicrophone from '@/components/icons/IconMicrophone.vue'
import AppLogo from '@/components/base/AppLogo.vue'
import TheSearch from '@/components/Search/TheSearch.vue'
import AppButtonLogin from '@/components/base/AppButtonLogin.vue'
import AppButton from '@/components/base/AppButton.vue'
import DropdownSettings from '@/components/DropdownSettings/DropdownSettings.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import TheSearchMobile from '@/components/Search/TheSearchMobile.vue'
import { throttle } from '@/composables/throttle'

defineEmits(['toggleSidebar'])

const isShowMobileSearch = ref(false)

onMounted(() => {
    onResize()
    window.addEventListener('resize', throttledResize)
})
onUnmounted(() => window.addEventListener('resize', throttledResize))

const onResize = () => {
    const sm = 640
    if (window.innerWidth > sm) {
        isShowMobileSearch.value = false
    }
}
const throttledResize = throttle(onResize, 50)
</script>
