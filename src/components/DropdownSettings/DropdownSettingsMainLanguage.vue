<template>
    <div class="w-[300px] max-w-[300px] max-h-[428px]">
        <DropdownSettingsHeader :title="title" @back="$emit('close')" />
        <section class="py-2 border-b border-b-black/10">
            <ul class="">
                <DropdownSettingsItem
                    v-for="(lang, langId) in langs"
                    :key="langId"
                    :is-active="langId === selectedOption.id"
                    :label="lang"
                    @click="onSelectedOption({ id: langId, text: lang })"
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

const langs = ['Русский', 'Беларуская', 'Српски', 'English']

const onSelectedOption = (lang: { id: number; text: string }) => {
    emit('selectOption', { name: 'lang', value: lang })
}
</script>
