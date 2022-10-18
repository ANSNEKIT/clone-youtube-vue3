import { prettyDOM, render, screen } from '@testing-library/vue'
import AppButtonDefault from '@/components/base/AppButtonDefault.vue'

test('render AppButtonDefault', () => {
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
