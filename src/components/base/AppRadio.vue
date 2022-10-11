<!-- eslint-disable vue/no-mutating-props -->
<template>
    <input
        :id="id"
        v-model="modelValue"
        v-bind="$attrs"
        type="radio"
        name="category"
        class="mr-6 flex-shrink-0 w-[20px] h-[20px] cursor-pointer"
    />
    <label v-if="$slots.default" :for="id" class="flex-grow cursor-pointer">
        <slot />
    </label>
</template>

<script setup lang="ts">
defineProps({
    id: {
        type: String,
        default: '',
        requierd: true,
    },
    modelValue: {
        type: String,
        default: '',
    },
})
</script>
