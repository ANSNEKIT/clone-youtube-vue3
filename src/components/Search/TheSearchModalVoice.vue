<template>
    <AppModal :title="title" @close-modal="$emit('closeModal')">
        <p v-if="!isMicrophonePremission" class="mb-64 text-base text-[#606060]">
            Чтобы пользоваться голосовым поиском, перейдите в настройки браузера и откройте
            приложению доступ к микрофону.
        </p>
        <div v-else class="flex flex-1 h-[200px]"></div>
        <div class="mb-4 w-full">
            <TheSearchModalVoiceButton
                :is-microphone-premission="isMicrophonePremission"
                @change-text="title = $event"
            />
        </div>
    </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/base/AppModal.vue'
import TheSearchModalVoiceButton from '@/components/Search/TheSearchModalVoiceButton.vue'
import { ref } from 'vue'

defineEmits(['closeModal'])

const title = ref('')
const isMicrophonePremission = ref(true)
</script>
