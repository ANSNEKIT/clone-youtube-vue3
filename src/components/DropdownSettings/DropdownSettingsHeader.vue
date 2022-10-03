<template>
    <section class="py-1 flex items-center border-b border-b-black/10">
        <AppButton tooltip="Назад" btn-class="mx-1 outline-none" @click.stop="$emit('back')">
            <IconBackArrow width="24" height="24" class="w-[24px] h-[24px]" />
        </AppButton>
        <h2 class="text-lg leading-7">{{ title }}</h2>
    </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/base/AppButton.vue'
import IconBackArrow from '@/components/icons/IconBackArrow.vue'

defineProps({
    title: {
        type: String,
        default: '',
    },
})

defineEmits(['back'])
</script>
