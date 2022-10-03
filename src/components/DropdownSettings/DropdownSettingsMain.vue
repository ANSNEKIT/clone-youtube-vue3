<template>
    <div class="w-[300px] max-w-[300px] max-h-[428px]">
        <section class="py-2 border-b border-b-black/10">
            <ul class="">
                <DropdownSettingsItem :label="menuItems[0].label" :icon="menuItems[0].icon" />
            </ul>
        </section>
        <section class="py-2 border-b border-b-black/10">
            <ul class="">
                <DropdownSettingsItem
                    v-for="(item, index) in menuItems.slice(1, 6)"
                    :key="index"
                    :is-arrow-right="item.isArrowRight"
                    :icon="item.icon"
                    :label="item.label"
                    :label-value="item.labelValue"
                    @click.stop="onDropdownItem(item)"
                />
            </ul>
        </section>
        <section class="py-2 border-b border-b-black/10">
            <ul class="">
                <DropdownSettingsItem :label="menuItems[6].label" :icon="menuItems[6].icon" />
            </ul>
        </section>
        <section class="py-2 border-b border-b-black/10">
            <ul class="">
                <DropdownSettingsItem
                    v-for="(item, index) in menuItems.slice(7)"
                    :key="index"
                    :is-arrow-right="item.isArrowRight"
                    :icon="item.icon"
                    :label="item.label"
                    :label-value="item.labelValue"
                    @click.stop="onDropdownItem(item)"
                />
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import DropdownSettingsItem from '@/components/DropdownSettings/DropdownSettingsItem.vue'
import { DropdownItem } from '@/types/dropdown'

defineProps({
    menuItems: {
        type: Array as PropType<Array<DropdownItem>>,
        default: () => [],
    },
})
const emit = defineEmits(['onSettingsItem', 'selectMenu'])

const onDropdownItem = (item: DropdownItem) => {
    if (item.withSubMenu) {
        emit('selectMenu', item.id)
    }
}
</script>
