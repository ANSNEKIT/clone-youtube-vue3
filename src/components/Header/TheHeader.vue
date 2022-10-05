<template>
    <header class="fixed top-0 z-30 w-full h-[56px] bg-white opacity-95">
        <div
            id="container"
            class="px-2 sm:px-[16px] h-full w-full flex items-center justify-between"
        >
            <div
                id="left"
                class="flex shrink-0 items-center justify-between"
                :class="{ 'opacity-0': isMobileSerchActive, 'opacity-100': !isMobileSerchActive }"
            >
                <AppButton :btn-class="'mr-0.5'" @click="$emit('toggleSidebar')">
                    <IconBar class="block w-7 h-7 stroke-0 text-[#030303]" />
                </AppButton>

                <AppLogo />
            </div>

            <TheSearchWrapper
                v-show="!isHiddenSearch"
                :is-small-screen="isSmallScreen"
                @close="onCloseMobileSearch"
            />

            <div
                id="right"
                class="min-w-max sm:min-w-[225px] flex items-center justify-end"
                :class="{ 'opacity-0': isMobileSerchActive, 'opacity-100': !isMobileSerchActive }"
            >
                <AppButton
                    tooltip="Введите запрос"
                    class="whitespace-normal"
                    :btn-class="'sm:hidden'"
                    @click.stop="onOpenMobileSearch"
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
import { computed, onMounted, ref } from 'vue'
import IconBar from '@/components/icons/IconBar.vue'
import IconMicrophone from '@/components/icons/IconMicrophone.vue'
import AppLogo from '@/components/base/AppLogo.vue'
import AppButtonLogin from '@/components/base/AppButtonLogin.vue'
import AppButton from '@/components/base/AppButton.vue'
import DropdownSettings from '@/components/DropdownSettings/DropdownSettings.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import TheSearchWrapper from '@/components/Search/TheSearchWrapper.vue'
import { throttle } from '@/composables/throttle'
import { useStore } from 'vuex'
import { State } from '@/types/store'

defineEmits(['toggleSidebar'])

const { state, commit } = useStore<State>()

const isMobileSerchActive = computed(() => state.isMobileSerchActive)
const isSmallScreen = ref(false)

const isHiddenSearch = computed(() => !isMobileSerchActive.value && isSmallScreen.value)

onMounted(() => {
    onResize()
    window.addEventListener('resize', throttledResize)
})

const onOpenMobileSearch = () => commit('setMobileSerchActive', true)
const onCloseMobileSearch = () => commit('setMobileSerchActive', false)

const onResize = () => {
    const sm = 640
    if (window.innerWidth < sm) {
        isSmallScreen.value = true
        return
    }

    isSmallScreen.value = false
    onCloseMobileSearch()
}
const throttledResize = throttle(onResize, 50)
</script>
