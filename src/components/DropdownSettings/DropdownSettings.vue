<template>
    <div ref="parentDropdownRef" class="relative z-10">
        <AppButton
            tabindex="0"
            tooltip="Настройки"
            :btn-class="'ml-2 active:bg-neutral-50 active:border active:border-gray-200'"
            @click="onToggle"
        >
            <IconMore class="w-[24px] h-[24px] text-[#030303]" />
        </AppButton>

        <Transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transition opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-out duration-100"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transition opacity-0 scale-95"
        >
            <div
                v-show="isOpen"
                ref="dropdownRef"
                tabindex="-1"
                class="fixed z-20 top-14 right-36 bg-white border border-t-0 border-black/10 rounded-sm overflow-x-hidden overflow-y-auto focus:outline-none"
                @keydown.esc="onClose"
            >
                <component
                    :is="getMenu"
                    v-if="selectedMenu !== null"
                    :title="getMenuTitle"
                    :selected-option="getSelectedOption"
                    @select-option="onSelectOption"
                    @select-menu="onSelectMenu"
                    @close="onCloseSubMenu"
                />
                <DropdownSettingsMain
                    v-else
                    :menu-items="getMainItems"
                    @select-menu="onSelectMenu"
                />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import AppButton from '@/components/base/AppButton.vue'
import IconMore from '@/components/icons/IconMore.vue'
import DropdownSettingsMain from '@/components/DropdownSettings/DropdownSettingsMain.vue'
import { useDropdown } from '@/composables/dropdown'

const parentDropdownRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

const {
    isOpen,
    selectedMenu,
    getMainItems,
    getMenu,
    getMenuTitle,
    getSelectedOption,
    onSelectMenu,
    onSelectOption,
    onClose,
    onCloseSubMenu,
    onToggle,
    getFocusDropdown,
} = useDropdown(dropdownRef)

onMounted(() => {
    window.addEventListener('click', ({ target }: MouseEvent) => {
        if (!parentDropdownRef.value?.contains(target as Node)) {
            onClose()
        }
    })
})

watch(
    () => isOpen.value,
    () => {
        if (isOpen.value) {
            getFocusDropdown()
        }
    },
)
</script>
