import { DefineComponent } from "vue"

type EventDrpodownSubmenu = (event: 'close' | 'selectOption', ...args: any[]) => void
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

interface DropdownItem {
    isArrowRight: boolean
    icon: DefineComponent
    label: string
    labelValue: string
    id: string
    withSubMenu: boolean
}

export {
    EventDrpodownSubmenu,
    SelectedOption,
    SelectedOptionSecure,
    DropdownItem,
    MenuComponentNames,
    SelectedOptions,
    MenuNames,
}
