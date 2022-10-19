import { render, screen } from '@testing-library/vue'
import AppButton from '@/components/base/AppButton.vue'

function renderAppButton(body = '') {
    const config = {
        slots: {
            default: body,
        },
    }
    render(AppButton, config)
}

it('render with icon', () => {
    const body = 'dafault slot'

    renderAppButton(body)

    screen.getByText(body)
})
