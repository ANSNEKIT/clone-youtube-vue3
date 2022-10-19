import { render, screen } from '@testing-library/vue'
import AppTextarea from '@/components/base/AppTextarea.vue'

const text = 'Text textarea more text lorem text impusm'
const limit = 500

function renderTextarea(text = '', limit = 500) {
    const options = {
        props: {
            modelValue: text,
            limit,
        },
    }
    return render(AppTextarea, options)
}

it('render text', () => {
    renderTextarea(text)

    screen.getByDisplayValue(text)
})

it('show counter', () => {
    renderTextarea(text, limit)

    screen.getByText(`${text.length}/${limit}`)
})
