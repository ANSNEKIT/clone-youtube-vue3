import { render, screen } from '@testing-library/vue'
import AppRadio from '@/components/base/AppRadio.vue'

const value = 'value 1'
const label = 'label 1'

function renderRadio(isChecked = false) {
    const options = {
        props: {
            id: 'id-1',
            modelValue: isChecked ? value : null,
            value,
        },
        slots: {
            default: label,
        },
    }
    return render(AppRadio, options)
}

it('render checked with label', () => {
    const isChecked = true

    renderRadio(isChecked)

    expect(screen.getByLabelText(label)).toBeChecked()
})

it('render unchecked with label', () => {
    const isChecked = false

    renderRadio(isChecked)

    expect(screen.getByLabelText(label)).not.toBeChecked()
})

it('render with value', () => {
    renderRadio()

    const radio = screen.getByLabelText(label) as HTMLInputElement
    expect(radio.value).toBe(value)
})
