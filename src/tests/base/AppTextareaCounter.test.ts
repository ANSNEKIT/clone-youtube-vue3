import { render } from '@testing-library/vue'
import AppTextareaCounter from '@/components/base/AppTextareaCounter.vue'

it('render', () => {
    const options = {
        slots: {
            default: '0/500',
        },
    }

    const { html } = render(AppTextareaCounter, options)

    expect(html()).toMatchInlineSnapshot(
        // eslint-disable-next-line quotes
        `"<div class="absolute bottom-3 right-2 text-xs text-gray-600">0/500</div>"`,
    )
})
