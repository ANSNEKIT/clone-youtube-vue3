<template>
    <div class="flex items-center justify-center">
        <span
            v-show="isListening"
            class="animate-ping absolute -z-10 w-[60px] h-[60px] rounded-full"
            :class="{
                'border border-black/25': voiceStatus === 'listening',
                'bg-black/25': voiceStatus === 'recording',
            }"
        ></span>
        <button
            class="w-[68px] h-[68px] rounded-full flex justify-center items-center"
            :class="{
                'bg-red-600 text-white active:bg-red-700': isListening,
                'bg-black/10 text-black active:bg-black/20': !isListening,
            }"
        >
            <IconMicrophone class="w-[40px] h-[40px] fill-current" />
        </button>
    </div>
</template>

<script setup lang="ts">
import IconMicrophone from '@/components/icons/IconMicrophone.vue'
import { computed, PropType } from 'vue'
import { Status } from '@/types/search'

const props = defineProps({
    voiceStatus: {
        type: String as PropType<Status[keyof Status]>,
        default: '',
    },
})

const isListening = computed(
    () => props.voiceStatus === 'listening' || props.voiceStatus === 'recording',
)
</script>
