<template>
    <div ref="parentDropdownRef" class="relative">
        <AppButton
            class="opacity-100 active:bg-neutral-50 active:border active:border-gray-200 focus:opacity-100"
            @click="isOpen = !isOpen"
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
                class="absolute z-10 top-11 -left-1 bg-white border border-t-0 border-black/10 rounded-sm overflow-x-hidden overflow-y-auto focus:outline-none"
                @keydown.esc="isOpen = false"
            >
                <div class="w-max max-w-[300px] max-h-[428px]">
                    <section class="py-2 border-b border-b-black/10">
                        <ul class="">
                            <VideoItemDetailsDropdownItem
                                v-for="(item, idx) in detailMenuList"
                                :key="idx"
                                :label="item.label"
                                :icon="item.icon"
                            />
                        </ul>
                    </section>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import IconPlaylist from '@/components/icons/IconPlaylist.vue'
import IconShare from '@/components/icons/IconShare.vue'
import IconMore from '@/components/icons/IconMore.vue'
import AppButton from '@/components/base/AppButton.vue'
import VideoItemDetailsDropdownItem from './VideoItemDetailsDropdownItem.vue'

const detailMenuList = [
    {
        isArrowRight: true,
        icon: IconPlaylist,
        label: 'Добавить в очередь',
    },
    {
        isArrowRight: true,
        icon: IconShare,
        label: 'Поделиться',
    },
]

const isOpen = ref(false)
const parentDropdownRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

const getFocusDropdown = async () => {
    await nextTick()

    if (dropdownRef.value) {
        dropdownRef.value?.focus()
    }
}

onMounted(() => {
    window.addEventListener('click', ({ target }: MouseEvent) => {
        if (!parentDropdownRef.value?.contains(target as Node)) {
            isOpen.value = false
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
