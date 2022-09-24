<template>
    <div
        class="fixed z-10 top-14 right-36 bg-white border border-t-0 border-black/10 rounded-sm overflow-x-hidden overflow-y-auto"
    >
        <div class="w-[300px] max-w-[300px] max-h-[428px]">
            <section class="py-2 border-b border-b-black/10">
                <ul class="">
                    <DropdownSettingsItem label="Личные данные на YouTube" :icon="IconPerson" />
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
</template>

<script setup lang="ts">
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
</script>
