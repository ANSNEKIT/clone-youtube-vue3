import { render } from '@testing-library/vue'
import AppButton from '@/components/base/AppButton.vue'

test('test render button', () => {
    const { debug } = render(AppButton)

    debug()
})
