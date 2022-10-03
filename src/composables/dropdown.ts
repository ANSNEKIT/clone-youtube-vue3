import { ref, computed, Ref, nextTick } from 'vue'
import {
    EventDrpodownSubmenu,
    SelectedOption,
    SelectedOptionSecure,
    MenuComponentNames,
    SelectedOptions,
    MenuNames,
} from '@/types/dropdown'
import DropdownSettingsMainAppearance from '@/components/DropdownSettings/DropdownSettingsMainAppearance.vue'
import DropdownSettingsMainLanguage from '@/components/DropdownSettings/DropdownSettingsMainLanguage.vue'
import DropdownSettingsMainCountry from '@/components/DropdownSettings/DropdownSettingsMainCountry.vue'
import DropdownSettingsMainSecureMode from '@/components/DropdownSettings/DropdownSettingsMainSecureMode.vue'
import IconPerson from '@/components/icons/IconPerson.vue'
import IconMoon from '@/components/icons/IconMoon.vue'
import IconLang from '@/components/icons/IconLang.vue'
import IconSecurity from '@/components/icons/IconSecurity.vue'
import IconErth from '@/components/icons/IconErth.vue'
import IconTia from '@/components/icons/IconTia.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import IconAbout from '@/components/icons/IconAbout.vue'
import IconFeedback from '@/components/icons/IconFeedback.vue'

export function useDropdownSubMenu(submenuName: string, emits: EventDrpodownSubmenu) {
    const dropdownItemsAppearance = ['Как на устройстве', 'Темная', 'Светлая']
    const dropdownItemsLang = ['Русский', 'Беларуская', 'Српски', 'English']
    const dropdownItemsContry = [
        'Россия',
        'Украина',
        'Белоруссия',
        'Сербия',
        'Казахстан',
        'Молдавия',
    ]

    const onSelectedOption = (item: SelectedOption | SelectedOptionSecure) => {
        emits('selectOption', { name: submenuName, value: item })
    }

    return {
        dropdownItemsAppearance,
        dropdownItemsLang,
        dropdownItemsContry,
        onSelectedOption,
    }
}

export function useDropdown(dropdownRef: Ref<HTMLElement | null>) {
    const isOpen = ref(false)
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

    const getMainItems = computed(() => [
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
    const getMenu = computed(() => {
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
    const getMenuTitle = computed((): string => {
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
    const getSelectedOption = computed(() => {
        if (selectedMenu.value) {
            return selectedOptions.value[selectedMenu.value as keyof SelectedOptions]
        }
        return {}
    })

    const onSelectMenu = (menuName: string | null) => {
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
    const onCloseSubMenu = () => onSelectMenu(null)

    const onClose = () => {
        isOpen.value = false

        setTimeout(onCloseSubMenu, 100)
    }

    const open = () => (isOpen.value = true)
    const onToggle = () => (isOpen.value ? onClose() : open())
    const getFocusDropdown = async () => {
        await nextTick()

        if (dropdownRef.value) {
            dropdownRef.value?.focus()
        }
    }

    return {
        isOpen,
        selectedMenu,
        selectedOptions,
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
    }
}
