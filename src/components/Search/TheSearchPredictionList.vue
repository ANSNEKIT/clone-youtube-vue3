<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="mt-5 space-y-3 text-black text-base">
        <div v-for="(keyword, idx) in predictions" :key="idx" class="flex items-center">
            <AppCheckbox
                :id="`prediction_${idx}`"
                v-model="modelValue"
                v-bind="$attrs"
                :value="keyword.keyword"
                :name="`prediction_${idx}`"
            >
                {{ keyword.keyword }}
            </AppCheckbox>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Keyword } from '@/types/search'
import { PropType } from 'vue'
import AppCheckbox from '@/components/base/AppCheckbox.vue'

defineProps({
    predictions: {
        type: Array as PropType<Array<Keyword>>,
        default: () => [],
    },
    modelValue: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
})
</script>
