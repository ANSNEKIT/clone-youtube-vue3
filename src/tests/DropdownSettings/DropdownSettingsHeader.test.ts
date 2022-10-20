import { render, screen } from '@testing-library/vue'
import DropdownSettingsHeader from '@/components/DropdownSettings/DropdownSettingsHeader.vue'

const title = 'Back to main menu'

function renderHeader() {
    const options = {
        props: {
            title,
        },
    }

    return render(DropdownSettingsHeader, options)
}

it('render with title correctly', () => {
    renderHeader()

    screen.getByText(title)
    screen.getByRole('button')
})
