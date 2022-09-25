<template>
    <div class="relative">
        <a href="#" class="outline-none">
            <img
                class="max-h-full max-w-full object-contain"
                :src="videoImg"
                alt="unsplash-preview"
                @mouseenter="$emit('onHover', true)"
                @mouseleave="$emit('onHover', false)"
            />
        </a>

        <span
            class="hidden absolute bottom-0 right-0 m-1 px-1 pt-[2px] bg-black text-white text-sm rounded-sm"
            :class="{ '!inline-block': hasHover }"
            >Если убрать указатель предпросмотр прекратится</span
        >
        <span
            class="absolute bottom-0 right-0 inline-block m-1 px-1 pt-[2px] bg-black text-white text-sm rounded-sm"
            :class="{ hidden: hasHover }"
            >8:39</span
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: {
        type: Number,
        default: 1,
    },
    hasHover: {
        type: Boolean,
        default: false,
    },
})
defineEmits(['onHover'])

const videoImg = `https://source.unsplash.com/random/360x200?sig=${props.id}`
</script>
