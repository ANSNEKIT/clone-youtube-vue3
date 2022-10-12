<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="relative">
        <textarea
            ref="textareaRef"
            v-model="modelValue"
            v-bind="$attrs"
            :max-length="limit"
            class="p-2 pb-10 w-full border border-black/10 rounded-sm focus:outline-none resize-none"
            @input="calcHeight"
        />
        <AppTextareaCounter>{{ counter }}</AppTextareaCounter>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import AppTextareaCounter from '@/components/base/AppTextareaCounter.vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    limit: {
        type: Number,
        default: 0,
    },
})

onMounted(() => calcHeight())

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const counter = computed(() => `${props.modelValue.length}/${props.limit}`)

const calcHeight = () => {
    if (textareaRef.value) {
        textareaRef.value.style.overflow = 'hidden'
        textareaRef.value.style.height = 'auto'
        textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`

        console.log(123)
    }
}
</script>
