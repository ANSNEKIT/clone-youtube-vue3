<template>
    <div
        class="fixed z-10 top-14 right-36 bg-white border border-t-0 border-black/10 rounded-sm overflow-x-hidden overflow-y-auto"
    >
        <div class="w-[300px] max-w-[300px] max-h-[428px]">
            <section class="py-2 border-b border-b-black/10">
                <ul class="">
                    <DropdownSettingsItem label="Личные данные на YouTube">
                        <IconPerson width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />
                    </DropdownSettingsItem>
                </ul>
            </section>
            <section class="py-2 border-b border-b-black/10">
                <ul class="">
                    <DropdownSettingsItem
                        :is-arrow-right="true"
                        label="Тема:"
                        label-value="как на устройстве"
                    >
                        <IconMoon width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />
                    </DropdownSettingsItem>
                    <DropdownSettingsItem
                        :is-arrow-right="true"
                        label="Язык:"
                        label-value="Русский"
                    >
                        <IconLang width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />
                    </DropdownSettingsItem>
                    <DropdownSettingsItem
                        :is-arrow-right="true"
                        label="Безопасный режим:"
                        label-value="откл"
                    >
                        <IconSecurity width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />
                    </DropdownSettingsItem>
                    <DropdownSettingsItem
                        :is-arrow-right="true"
                        label="Страна:"
                        label-value="Россия"
                    >
                        <IconErth width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />
                    </DropdownSettingsItem>
                    <DropdownSettingsItem label="Быстрые клавиши">
                        <IconTia width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />
                    </DropdownSettingsItem>
                </ul>
            </section>
            <section class="py-2 border-b border-b-black/10">
                <ul class="">
                    <DropdownSettingsItem label="Настройки">
                        <IconSettings width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />
                    </DropdownSettingsItem>
                </ul>
            </section>
            <section class="py-2 border-b border-b-black/10">
                <ul class="">
                    <DropdownSettingsItem label="Справка">
                        <IconAbout width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />
                    </DropdownSettingsItem>
                    <DropdownSettingsItem label="Отзыв">
                        <IconFeedback width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />
                    </DropdownSettingsItem>
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
</script>
