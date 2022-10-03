<template>
    <div class="w-[300px] max-w-[300px] max-h-[428px]">
        <DropdownSettingsHeader :title="title" @back="$emit('close')" />
        <section class="py-2 border-b border-b-black/10">
            <p class="pl-5 pt-1 pr-12 text-sm text-[#606060]">
                Настройка будет применена только в этом браузере.
            </p>
            <ul class="">
                <DropdownSettingsItem
                    v-for="(theme, themeId) in dropdownItemsAppearance"
                    :key="themeId"
                    :is-active="themeId === selectedOption.id"
                    :label="theme"
                    @click="onSelectedOption({ id: themeId, text: theme })"
                />
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import DropdownSettingsItem from '@/components/DropdownSettings/DropdownSettingsItem.vue'
import DropdownSettingsHeader from '@/components/DropdownSettings/DropdownSettingsHeader.vue'
import { useDropdownSubMenu } from '@/composables/dropdown'

defineProps({
    title: {
        type: String,
        default: '',
    },
    selectedOption: {
        type: Object,
        default: () => ({}),
    },
})
const emitsSubmenu = defineEmits(['close', 'selectOption'])

const { dropdownItemsAppearance, onSelectedOption } = useDropdownSubMenu('appearance', emitsSubmenu)
</script>
