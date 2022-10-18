import { render, screen } from '@testing-library/vue'
import AppCheckbox from '@/components/base/AppCheckbox.vue'

test('render checked checkbox with label ', () => {
    const label = 'label checkbox'
    const value = 1
    const modelVal = [value, 2, 3]
    const config = {
        props: {
            id: '1',
            modelValue: modelVal,
            value: value,
        },
        slots: {
            default: label,
        },
    }

    render(AppCheckbox, config)

    const checkbox = screen.getByLabelText(label) as HTMLInputElement
    expect(checkbox.checked).toBe(true)
})

test('render unchecked checkbox', () => {
    render(AppCheckbox)

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(false)
})
