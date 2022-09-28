<template>
    <div
        id="search-mobile"
        ref="searchMobile"
        class="p-[8px] w-full absolute top-0 right-0 z-10 flex items-center justify-between sm:hidden"
    >
        <AppButton
            :btn-class="'mr-2 flex sm:hidden'"
            tooltip="Назад"
            :right="true"
            @click="$emit('closeSidebarMobile')"
        >
            <IconBackArrow class="w-[24px] h-[24px]" />
        </AppButton>

        <TheSearch class="" />

        <AppButton tooltip="Голосовой поиск" :btn-class="'ml-2'" :left="true">
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

const emit = defineEmits(['closeSidebarMobile'])

const searchMobile = ref<HTMLElement | null>(null)

onMounted(() => window.addEventListener('click', onClose))
onUnmounted(() => window.removeEventListener('click', onClose))

const onClose = ({ target }: MouseEvent) => {
    if (!searchMobile.value?.contains(target as Node)) {
        emit('closeSidebarMobile')
    }
}
</script>
