<template>
    <div ref="parentDropdownRef" class="relative z-10">
        <AppButton
            ref="btnDropdown"
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
                    :is="menu"
                    v-if="selectedMenu !== null"
                    :title="menuTitle"
                    :selected-option="selectedOption"
                    @select-option="onSelectOption"
                    @select-menu="onSelectMenu"
                    @close="onCloseSubMenu"
                />
                <DropdownSettingsMain v-else :menu-items="menuItems" @select-menu="onSelectMenu" />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch, computed, DefineComponent } from 'vue'
import AppButton from '@/components/base/AppButton.vue'
import IconMore from '@/components/icons/IconMore.vue'
import DropdownSettingsMain from '@/components/DropdownSettings/DropdownSettingsMain.vue'
import DropdownSettingsMainAppearance from '@/components/DropdownSettings/DropdownSettingsMainAppearance.vue'
import DropdownSettingsMainLanguage from '@/components/DropdownSettings/DropdownSettingsMainLanguage.vue'
import DropdownSettingsMainCountry from '@/components/DropdownSettings/DropdownSettingsMainCountry.vue'
import DropdownSettingsMainSecureMode from './DropdownSettingsMainSecureMode.vue'
import IconPerson from '@/components/icons/IconPerson.vue'
import IconMoon from '@/components/icons/IconMoon.vue'
import IconLang from '@/components/icons/IconLang.vue'
import IconSecurity from '@/components/icons/IconSecurity.vue'
import IconErth from '@/components/icons/IconErth.vue'
import IconTia from '@/components/icons/IconTia.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import IconAbout from '@/components/icons/IconAbout.vue'
import IconFeedback from '@/components/icons/IconFeedback.vue'

interface MenuComponentNames {
    appearance: DefineComponent
    lang: DefineComponent
    country: DefineComponent
    secure: DefineComponent
}

interface SelectedOption {
    id: number
    text: string
}
interface SelectedOptionSecure {
    enabled: boolean
    text: string
}

interface SelectedOptions {
    appearance: SelectedOption
    lang: SelectedOption
    country: SelectedOption
    secure: SelectedOptionSecure
}

interface MenuNames {
    [key: string]: string
}

const isOpen = ref(false)
const parentDropdownRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const btnDropdown = ref<HTMLElement | null>(null)
const selectedMenu = ref<string | null>(null)

const selectedOptions = ref({
    appearance: {
        id: 0,
        text: 'как на устройстве',
    },
    lang: {
        id: 0,
        text: 'Русский',
    },
    country: {
        id: 0,
        text: 'Россия',
    },
    secure: {
        enabled: false,
        text: 'откл',
    },
})

const menuItems = computed(() => [
    {
        isArrowRight: false,
        icon: IconPerson,
        label: 'Личные данные на YouTube',
        labelValue: '',
        id: 'personal',
        withSubMenu: false,
    },
    {
        isArrowRight: true,
        icon: IconMoon,
        label: 'Тема:',
        labelValue: selectedOptions.value.appearance.text,
        id: 'appearance',
        withSubMenu: true,
    },
    {
        isArrowRight: true,
        icon: IconLang,
        label: 'Язык:',
        labelValue: selectedOptions.value.lang.text,
        id: 'lang',
        withSubMenu: true,
    },
    {
        isArrowRight: true,
        icon: IconSecurity,
        label: 'Безопасный режим:',
        labelValue: selectedOptions.value.secure.text,
        id: 'secure',
        withSubMenu: true,
    },
    {
        isArrowRight: true,
        icon: IconErth,
        label: 'Страна:',
        labelValue: selectedOptions.value.country.text,
        id: 'country',
        withSubMenu: true,
    },
    {
        isArrowRight: false,
        icon: IconTia,
        label: 'Быстрые клавиши',
        labelValue: '',
        id: 'hotkeys',
        withSubMenu: false,
    },
    {
        isArrowRight: false,
        icon: IconSettings,
        label: 'Настройки',
        labelValue: '',
        id: 'settings',
        withSubMenu: false,
    },
    {
        isArrowRight: false,
        icon: IconAbout,
        label: 'Справка',
        labelValue: '',
        id: 'help',
        withSubMenu: false,
    },
    {
        isArrowRight: false,
        icon: IconFeedback,
        label: 'Отзыв',
        labelValue: '',
        id: 'feedback',
        withSubMenu: false,
    },
])
const menu = computed(() => {
    const menuComponentNames = {
        appearance: DropdownSettingsMainAppearance,
        lang: DropdownSettingsMainLanguage,
        country: DropdownSettingsMainCountry,
        secure: DropdownSettingsMainSecureMode,
    }
    if (selectedMenu.value) {
        return menuComponentNames[selectedMenu.value as keyof MenuComponentNames]
    }

    return null
})
const menuTitle = computed((): string => {
    if (selectedMenu.value) {
        const menuHeaderTitleNames: MenuNames = {
            appearance: 'Тема',
            lang: 'Выберите язык',
            country: 'Выберите страну',
            secure: 'Безопасный режим',
        }

        return menuHeaderTitleNames[selectedMenu.value as keyof MenuNames]
    }
    return ''
})
const selectedOption = computed(() => {
    if (selectedMenu.value) {
        return selectedOptions.value[selectedMenu.value as keyof SelectedOptions]
    }
    return {}
})

const onSelectMenu = (menuName: string) => {
    selectedMenu.value = menuName

    dropdownRef.value?.focus()
}
const onSelectOption = ({
    name,
    value,
}: {
    name: keyof SelectedOptions
    value: SelectedOption & SelectedOptionSecure
}) => {
    selectedOptions.value[name] = value
}
const onClose = () => {
    isOpen.value = false

    setTimeout(() => onCloseSubMenu, 100)
}
const onCloseSubMenu = () => (selectedMenu.value = null)
const open = () => {
    isOpen.value = true
}
const onToggle = () => {
    isOpen.value ? onClose() : open()
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
