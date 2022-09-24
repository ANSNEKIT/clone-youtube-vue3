<template>
    <div ref="parentDropdownRef" class="relative">
        <AppButton
            ref="btnDropdown"
            tabindex="0"
            class="mr-2 active:bg-neutral-50 active:border active:border-gray-200"
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
                class="fixed z-10 top-14 right-36 bg-white border border-t-0 border-black/10 rounded-sm overflow-x-hidden overflow-y-auto focus:outline-none"
                @keydown.esc="isOpen = false"
            >
                <div class="w-[300px] max-w-[300px] max-h-[428px]">
                    <section class="py-2 border-b border-b-black/10">
                        <ul class="">
                            <DropdownSettingsItem
                                label="Личные данные на YouTube"
                                :icon="IconPerson"
                            />
                        </ul>
                    </section>
                    <section class="py-2 border-b border-b-black/10">
                        <ul class="">
                            <DropdownSettingsItem
                                v-for="(item, index) in moreItems"
                                :key="index"
                                :is-arrow-right="item.isArrowRight"
                                :icon="item.icon"
                                :label="item.label"
                                :label-value="item.labelValue"
                            />
                        </ul>
                    </section>
                    <section class="py-2 border-b border-b-black/10">
                        <ul class="">
                            <DropdownSettingsItem label="Настройки" :icon="IconSettings" />
                        </ul>
                    </section>
                    <section class="py-2 border-b border-b-black/10">
                        <ul class="">
                            <DropdownSettingsItem
                                v-for="(item, index) in additionItems"
                                :key="index"
                                :is-arrow-right="item.isArrowRight"
                                :icon="item.icon"
                                :label="item.label"
                                :label-value="item.labelValue"
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
import IconPerson from './icons/IconPerson.vue'
import IconMoon from './icons/IconMoon.vue'
import IconLang from './icons/IconLang.vue'
import IconSecurity from './icons/IconSecurity.vue'
import IconErth from './icons/IconErth.vue'
import IconTia from './icons/IconTia.vue'
import IconSettings from './icons/IconSettings.vue'
import IconAbout from './icons/IconAbout.vue'
import IconFeedback from './icons/IconFeedback.vue'
import DropdownSettingsItem from './DropdownSettingsItem.vue'
import AppButton from './AppButton.vue'
import IconMore from './icons/IconMore.vue'

const moreItems = [
    {
        isArrowRight: true,
        icon: IconMoon,
        label: 'Тема:',
        labelValue: 'как на устройстве',
    },
    {
        isArrowRight: true,
        icon: IconLang,
        label: 'Язык:',
        labelValue: 'Русский',
    },
    {
        isArrowRight: true,
        icon: IconSecurity,
        label: 'Безопасный режим:',
        labelValue: 'откл',
    },
    {
        isArrowRight: true,
        icon: IconErth,
        label: 'Страна:',
        labelValue: 'Россия',
    },
    {
        isArrowRight: false,
        icon: IconTia,
        label: 'Быстрые клавиши',
        labelValue: '',
    },
]
const additionItems = [
    {
        isArrowRight: false,
        icon: IconAbout,
        label: 'Справка',
        labelValue: '',
    },
    {
        isArrowRight: false,
        icon: IconFeedback,
        label: 'Отзыв',
        labelValue: '',
    },
]

const isOpen = ref(false)
const parentDropdownRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const btnDropdown = ref<HTMLElement | null>(null)

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
