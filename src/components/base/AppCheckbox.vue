<!-- eslint-disable vue/no-mutating-props -->
<template>
    <input
        :id="id"
        v-model="modelValue"
        v-bind="$attrs"
        type="checkbox"
        :name="`prediction_${id}`"
        class="mr-6 flex-shrink-0 w-[20px] h-[20px] cursor-pointer rounded-sm"
    />
    <label v-if="$slots.default" :for="id" class="flex-grow cursor-pointer">
        <slot />
    </label>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
    id: {
        type: String,
        default: '',
        requierd: true,
    },
    modelValue: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
})
</script>
