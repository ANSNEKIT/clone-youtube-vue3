<template>
    <div
        id="search-mobile"
        ref="searchMobile"
        class="ml-10 w-full flex items-center justify-end xl:justify-between xl:w-[728px]"
        :class="{ 'p-[8px] absolute top-0 right-0 z-10': isSmallScreen }"
    >
        <AppButton
            v-if="isSmallScreen"
            btn-class="mr-2"
            tooltip="Назад"
            :right="true"
            @click="$emit('close')"
        >
            <IconBackArrow class="w-[24px] h-[24px]" />
        </AppButton>

        <TheSearch class="" />

        <AppButton
            tooltip="Голосовой поиск"
            btn-class="ml-2 bg-black/5 hover:bg-black/10 active:!shadow-inherit active:bg-black/20 focus:!outline focus:!outline-2 focus:!bg-transparent"
            :left="isSmallScreen"
            @click="$emit('openVoiceModal')"
        >
            <IconMicrophone class="w-[24px] h-[24px] text-black" />
        </AppButton>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import TheSearch from '@/components/Search/TheSearch.vue'
import AppButton from '@/components/base/AppButton.vue'
import IconMicrophone from '@/components/icons/IconMicrophone.vue'
import IconBackArrow from '@/components/icons/IconBackArrow.vue'

defineProps({
    isSmallScreen: {
        type: Boolean,
        default: false,
    },
})
const emit = defineEmits(['close', 'openVoiceModal'])

const searchMobile = ref<HTMLElement | null>(null)

onMounted(() => window.addEventListener('click', onClose))
onUnmounted(() => window.removeEventListener('click', onClose))

const onClose = ({ target }: MouseEvent) => {
    if (!searchMobile.value?.contains(target as Node)) {
        emit('close')
    }
}
</script>
