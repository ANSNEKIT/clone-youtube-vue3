<template>
    <div class="flex items-center justify-center">
        <span
            v-show="isStatus(statuses.LiSTENING, statuses.RECORDING)"
            class="animate-ping absolute -z-10 w-[60px] h-[60px] rounded-full"
            :class="{
                'border border-black/25': isStatus(statuses.LiSTENING),
                'bg-black/25': isStatus(statuses.RECORDING),
            }"
        ></span>
        <button
            class="w-[68px] h-[68px] rounded-full flex justify-center items-center"
            :class="{
                'bg-red-600 text-white active:bg-red-700': isStatus(
                    statuses.LiSTENING,
                    statuses.RECORDING,
                ),
                'bg-black/10 text-black active:bg-black/20': !isStatus(
                    statuses.LiSTENING,
                    statuses.RECORDING,
                ),
            }"
            @click="onToggleVoiceButton"
        >
            <IconMicrophone class="w-[40px] h-[40px] fill-current" />
        </button>
    </div>
    <div
        class="mt-4 text-base text-[#606060] text-center"
        :class="{
            invisible: isStatus(statuses.LiSTENING, statuses.RECORDING),
            visible: !isStatus(statuses.LiSTENING, statuses.RECORDING),
        }"
    >
        Чтобы повторить попытку, нажмите на значок микрофона
    </div>
</template>

<script setup lang="ts">
import IconMicrophone from '@/components/icons/IconMicrophone.vue'
import { onMounted, onUnmounted, watch } from 'vue'
import { useSearchModalVoiceButton } from '@/composables/search'

const props = defineProps({
    isMicrophonePremission: {
        type: Boolean,
        default: true,
    },
})

const emit = defineEmits(['changeText'])

const {
    status,
    statuses,
    getTitle,
    recordingTimeout,
    isStatus,
    onToggleVoiceButton,
    stopRecording,
} = useSearchModalVoiceButton(props)

onMounted(() => stopRecording(5000))

onUnmounted(() => {
    if (recordingTimeout.value) {
        clearTimeout(recordingTimeout.value)
    }
})

watch(
    () => status.value,
    () => {
        emit('changeText', getTitle.value)
    },
    { immediate: true },
)
</script>
