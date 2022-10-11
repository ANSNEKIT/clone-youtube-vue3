<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="mt-5 space-y-3 text-black text-base">
        <div v-for="(category, idx) in categories" :key="idx" class="flex items-center">
            <AppRadio
                :id="`category_${idx}`"
                v-model="modelValue"
                v-bind="$attrs"
                :value="category"
            >
                {{ category }}
            </AppRadio>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import AppRadio from '@/components/base/AppRadio.vue'

defineProps({
    categories: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    modelValue: {
        type: String,
        default: '',
    },
})
</script>
