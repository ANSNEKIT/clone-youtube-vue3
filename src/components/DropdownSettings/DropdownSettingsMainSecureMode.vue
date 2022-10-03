<template>
    <div class="w-[300px] max-w-[300px] max-h-[428px]">
        <DropdownSettingsHeader :title="title" @back="$emit('close')" />
        <section class="p-4 border-b border-b-black/10">
            <p class="mb-4 text-base text-[#030303]">
                В безопасном режиме скрыты видео, которые не подходят для детей. Хотя идеальных
                фильтров не существует, в большинстве случаев защита работает.
            </p>
            <p class="mb-4 text-base text-[#030303]">
                Безопасный режим будет включен только в этом браузере.
            </p>
            <div class="flex flex-1 uppercase text-base text-[#606060]">
                <div class="">Включить безопасный режим</div>
                <div>
                    <input
                        id="secure"
                        type="checkbox"
                        class="mx-2"
                        name="secure"
                        :checked="selectedOption.enabled"
                        @change="
                            onSelectedOption({
                                enabled: !selectedOption.enabled,
                                text: !selectedOption.enabled ? 'вкл' : 'откл',
                            })
                        "
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
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

const { onSelectedOption } = useDropdownSubMenu('secure', emitsSubmenu)
</script>
