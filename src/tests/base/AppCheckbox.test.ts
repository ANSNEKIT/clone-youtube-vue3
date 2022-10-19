import { render, screen } from '@testing-library/vue'
import AppCheckbox from '@/components/base/AppCheckbox.vue'

it('render with label and checked ', () => {
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

    expect(screen.getByLabelText(label)).toBeChecked()
})

it('render unchecked', () => {
    render(AppCheckbox)

    expect(screen.getByRole('checkbox')).not.toBeChecked()
})
