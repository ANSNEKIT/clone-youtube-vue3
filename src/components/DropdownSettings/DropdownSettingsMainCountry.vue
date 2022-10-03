<template>
    <div class="w-[300px] max-w-[300px] max-h-[428px]">
        <DropdownSettingsHeader :title="title" @back="$emit('close')" />
        <section class="py-2 border-b border-b-black/10">
            <ul class="">
                <DropdownSettingsItem
                    v-for="(country, countryId) in countries"
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
const emit = defineEmits(['close', 'selectOption'])

const countries = ['Россия', 'Украина', 'Белоруссия', 'Сербия', 'Казахстан', 'Молдавия']

const onSelectedOption = (country: { id: number; text: string }) => {
    emit('selectOption', { name: 'country', value: country })
}
</script>
