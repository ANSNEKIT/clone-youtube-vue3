import { render, screen } from '@testing-library/vue'
import DropdownSettingsItem from '@/components/DropdownSettings/DropdownSettingsItem.vue'
import IconPerson from '@/components/icons/IconPerson.vue'
import { markRaw } from 'vue'

function renderItem(
    label = '',
    labelValue = '',
    isArrowRight = false,
    isActive = false,
    propsIcon = {},
) {
    const options = {
        props: {
            label,
            labelValue,
            isArrowRight,
            isActive,
            icon: propsIcon,
        },
    }

    return render(DropdownSettingsItem, options)
}

it('render with label', () => {
    const label = 'lang'
    const labelValue = 'ru'

    renderItem(label, labelValue, false, false, {})

    screen.getByText(label)
    screen.getByText(labelValue)
})

it('render with arrow right', () => {
    const isArrowRight = true
    renderItem('', '', isArrowRight, false, {})

    screen.getByTestId('icon-arrow-right')
})

it('render with check icon', () => {
    const isActive = true
    renderItem('', '', false, isActive, {})

    screen.getByTestId('icon-check')
})

it('render with props icon', () => {
    const propsIcon = markRaw(IconPerson)
    renderItem('', '', false, false, propsIcon)

    screen.getByTestId('icon-person')
})

it('render with props icon and arrow right icon', () => {
    const propsIcon = markRaw(IconPerson)
    const isArrowRight = true
    renderItem('', '', isArrowRight, false, propsIcon)

    screen.getByTestId('icon-person')
    screen.getByTestId('icon-arrow-right')
})

it('render active check even if props icon was specified', () => {
    const propsIcon = markRaw(IconPerson)
    const isActive = true
    renderItem('', '', false, isActive, propsIcon)

    screen.getByTestId('icon-check')
    expect(screen.queryByTestId('icon-person')).toBeNull()
})
