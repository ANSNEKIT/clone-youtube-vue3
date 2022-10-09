<template>
    <AppModal :title="getTitle" @close-modal="$emit('closeModal')">
        <p v-if="!isMicrophonePremission" class="mb-64 text-base text-[#606060]">
            Чтобы пользоваться голосовым поиском, перейдите в настройки браузера и откройте
            приложению доступ к микрофону.
        </p>
        <div v-else class="flex flex-1 h-[200px]"></div>
        <div class="mb-4 flex w-full justify-center">
            <TheSearchModalVoiceButton :voice-status="status" @click="onToggleVoiceButton" />
        </div>
        <div class="text-base text-[#606060] text-center" :class="{ invisible: getShowRepeatText }">
            Чтобы повторить попытку, нажмите на значок микрофона
        </div>
    </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/base/AppModal.vue'
import TheSearchModalVoiceButton from '@/components/Search/TheSearchModalVoiceButton.vue'
import { Status } from '@/types/search'
import { ref, computed, onMounted, onUnmounted } from 'vue'

defineEmits(['closeModal'])

const statuses: Status = {
    LiSTENING: 'listening',
    RECORDING: 'recording',
    ERROR: 'error',
    OFF: 'off',
}

const status = ref<Status[keyof Status]>(statuses.LiSTENING)
const isMicrophonePremission = ref(true)
const recordingTimeout = ref<number | null>(null)

const getTitle = computed(() => {
    if (!isMicrophonePremission.value) {
        return 'Голосовой поиск'
    }

    if (status.value === 'off') {
        return 'Микрофон отключен. Повторите попытку'
    }

    if (status.value === 'recording') {
        return 'Что'
    }

    if (status.value === 'error') {
        return 'Запрос не распознан. Повторите попытку'
    }

    return 'Говорите...'
})
const getShowRepeatText = computed(() => {
    if (isMicrophonePremission.value) {
        if (status.value === 'listening' || status.value === 'recording') {
            return true
        }
    }

    return false
})

onMounted(() => stopRecording(5000))

onUnmounted(() => {
    if (recordingTimeout.value) {
        clearTimeout(recordingTimeout.value)
    }
})

const isStatus = (...args: Array<Status[keyof Status]>) => {
    return args.includes(status.value)
}

const updateStatus = (stat?: Status[keyof Status]) => {
    if (stat) {
        status.value = stat
    } else if (isStatus(statuses.LiSTENING)) {
        status.value = statuses.RECORDING
    } else if (isStatus(statuses.RECORDING)) {
        status.value = statuses.OFF
    } else if (isStatus(statuses.OFF)) {
        status.value = statuses.RECORDING
    }
}

const onToggleVoiceButton = () => {
    if (recordingTimeout.value) {
        clearTimeout(recordingTimeout.value)
    }

    updateStatus()

    stopRecording(5000)
}

const stopRecording = (dealay: number) => {
    recordingTimeout.value = setTimeout(() => {
        if (isStatus(statuses.RECORDING, statuses.LiSTENING)) {
            status.value = statuses.ERROR
        }
    }, dealay)
}
</script>
