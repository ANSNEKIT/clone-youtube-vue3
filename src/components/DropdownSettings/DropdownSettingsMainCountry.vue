<template>
    <div class="w-[300px] max-w-[300px] max-h-[428px]">
        <DropdownSettingsHeader :title="title" @back="$emit('close')" />
        <section class="py-2 border-b border-b-black/10">
            <ul class="">
                <DropdownSettingsItem
                    v-for="(country, countryId) in dropdownItemsContry"
                    :key="countryId"
                    :is-active="countryId === selectedOption.id"
                    :label="country"
                    @click="onSelectedOption({ id: countryId, text: country })"
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

const { dropdownItemsContry, onSelectedOption } = useDropdownSubMenu('country', emitsSubmenu)
</script>
