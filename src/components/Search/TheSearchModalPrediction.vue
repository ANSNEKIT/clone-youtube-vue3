<template>
    <AppModal :is-show-button-close="false">
        <h3 class="mb-4 text-lg text-black">Пожаловаться на поисковые подсказки</h3>
        <div class="flex">Список</div>
        <template #footer="{ close }">
            <button
                class="mr-2 py-[10px] px-[16px] flex justify-center items-center uppercase text-base leading-4 font-medium text-[#606060] rounded-sm active:bg-black/10"
                @click="close"
            >
                Отмена
            </button>
            <button
                class="py-[10px] px-[16px] flex justify-center items-center uppercase text-base leading-4 font-medium rounded-sm active:bg-black/10"
                :disabled="isDisabled"
                :class="{ 'text-neutral-400': isDisabled }"
            >
                Отправить
            </button>
        </template>
    </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/base/AppModal.vue'
import { ref } from 'vue'

const isDisabled = ref(true)
</script>
