<template>
    <div ref="parentDropdownRef" class="relative">
        <AppButton
            class="group-hover:opacity-100 active:bg-neutral-50 active:border active:border-gray-200 focus:opacity-100"
            :class="{ '!opacity-100': isOpen, 'opacity-0': !isOpen }"
            @click="toggleDropdown"
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
                class="absolute z-20 bg-white border border-t-0 border-black/10 rounded-sm overflow-x-hidden overflow-y-auto focus:outline-none"
                :class="positionClasses"
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
const positionClasses = ref<(string | void)[]>([])

const toggleDropdown = (evt: MouseEvent) => {
    isOpen.value = !isOpen.value

    if (isOpen.value) {
        nextTick(() => {
            positionClasses.value = getPositionClasses(evt)
        })
    }
}

const getPositionClasses = (evt: MouseEvent) => {
    return [getTopClass(evt), getLeftClass(evt), getRightClass(evt), getBottomClass(evt)]
}

const getTopClass = (evt: MouseEvent) => {
    const currentTarget = evt.currentTarget as HTMLButtonElement
    const clickCoordY = evt.clientY
    const buttonHeight = currentTarget?.offsetHeight
    const dropdownHeight = dropdownRef.value?.offsetHeight ?? 0

    if (window.innerHeight - clickCoordY < dropdownHeight) {
        return 'top-auto'
    }

    if (window.innerHeight - clickCoordY < dropdownHeight + buttonHeight) {
        return 'top-0'
    }

    return 'top-12'
}
const getLeftClass = (evt: MouseEvent) => {
    const currentTarget = evt.currentTarget as HTMLButtonElement
    const clickCoordX = evt.clientX
    const clickCoordY = evt.clientY
    const dropdownWidth = dropdownRef.value?.offsetWidth ?? 223
    const dropdownHeight = dropdownRef.value?.offsetHeight ?? 0
    const buttonHeight = currentTarget?.offsetHeight

    if (window.innerWidth - clickCoordX < dropdownWidth) {
        console.log('111 window.innerWidth - clickCoordX', window.innerWidth - clickCoordX)
        console.log('111 dropdownWidth', dropdownWidth)

        return 'left-auto'
    }

    if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        console.log('222 window.innerHeight - clickCoordY', window.innerHeight - clickCoordY)
        console.log('222 dropdownHeight + buttonHeight', dropdownHeight + buttonHeight)

        return 'left-auto'
    }

    if (window.innerHeight - clickCoordY < dropdownHeight) {
        console.log('444')
        return 'left-auto'
    }

    console.log('555')

    return 'left-12'
}
const getRightClass = (evt: MouseEvent) => {
    const currentTarget = evt.currentTarget as HTMLButtonElement
    const clickCoordX = evt.clientX
    const clickCoordY = evt.clientY
    const dropdownWidth = dropdownRef.value?.offsetWidth ?? 223
    const dropdownHeight = dropdownRef.value?.offsetHeight ?? 0
    const buttonHeight = currentTarget?.offsetHeight

    if (window.innerWidth - clickCoordX > dropdownWidth) {
        return 'right-auto'
    }

    if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        return 'right-0'
    }

    if (window.innerHeight - clickCoordY > dropdownHeight) {
        return 'right-12'
    }

    return 'right-0'
}
const getBottomClass = (evt: MouseEvent) => {
    const clickCoordY = evt.clientY
    const dropdownHeight = dropdownRef.value?.offsetHeight ?? 0

    if (window.innerHeight - clickCoordY < dropdownHeight) {
        return 'bottom-12'
    }

    return 'bottom-auto'
}

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

    // document.body.addEventListener('scroll', () => (isOpen.value = false))
})

watch(
    () => isOpen.value,
    () => {
        // document.body.classList.toggle('overflow-hidden')

        if (isOpen.value) {
            getFocusDropdown()
        }
    },
)
</script>
