<template>
    <div
        class="pt-4 pb-2 absolute top-full w-full min-w-[250px] bg-white border border-[#ccc] shadow-md shadow-black/20"
    >
        <ul class="flex flex-col">
            <li
                v-for="(item, idx) in results"
                :key="idx"
                class="pl-2.5 pr-6 text-lg leading-8 text-[#222] cursor-default focus:bg-black/5"
                :class="{
                    'bg-black/5': Number(idx) === activeResultId,
                    'bg-transparent': Number(idx) !== activeResultId,
                }"
                @mouseenter="$emit('resultItemMoseenter', Number(idx))"
                @mouseleave="$emit('resultItemMouseleave')"
                @click.stop="$emit('resultClick')"
            >
                <div class="h-[30px] flex items-center">
                    <IconSearch class="w-[20px] h-[20px] mr-2" />
                    <p class="select-none truncate">
                        {{ item.value }}<b class="font-medium">{{ item.similar }}</b>
                    </p>
                </div>
            </li>
            <li
                class="self-end pl-2.5 pr-6 text-sm italic text-neutral-500 select-none hover:text-black focus:text-black cursor-default"
            >
                <button class="">Пожаловаться на поисковые подсказки</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import IconSearch from '@/components/icons/IconSearch.vue'

defineProps({
    results: {
        type: Object,
        default: () => ({}),
    },
    activeResultId: {
        type: Number as PropType<number | null>,
        default: null,
    },
})
defineEmits(['resultItemMoseenter', 'resultItemMouseleave', 'resultClick'])
</script>
