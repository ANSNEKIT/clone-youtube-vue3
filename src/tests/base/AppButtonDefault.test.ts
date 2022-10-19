import { render, screen } from '@testing-library/vue'
import AppButtonDefault from '@/components/base/AppButtonDefault.vue'

it('render with text', () => {
    // givet (arrange)
    const options = {
        slots: {
            default: 'Text btn',
        },
    }

    // when (act)
    render(AppButtonDefault, options)

    // then (assert)
    screen.getByText('Text btn')
})
