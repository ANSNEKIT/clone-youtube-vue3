<template>
    <div class="max-w-[320px] 2xl:max-w-[360px] relative">
        <div>
            <VideoItemThumbnail :id="id" :has-hover="hasHover" @on-hover="hasHover = $event" />
            <VideoItemDetails :id="id" :is-stream="isStream" />
        </div>
        <div
            class="invisible absolute top-0 left-0 z-[3] shadow-lg transition-all delay-1000 group-hover:!visible group-hover:scale-110"
            :class="{ '!visible scale-110': hasHover, '!delay-75': !hasHover }"
        >
            <VideoItemThumbnail :id="id" :has-hover="hasHover" @on-hover="hasHover = $event" />
            <VideoItemDetails :id="id" :is-stream="isStream" class="bg-white" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import VideoItemThumbnail from './VideoItemThumbnail.vue'
import VideoItemDetails from './VideoItemDetails.vue'

defineProps({
    id: {
        type: Number,
        default: 1,
    },
    isStream: {
        type: Boolean,
        default: false,
    },
})

const hasHover = ref(false)
</script>
