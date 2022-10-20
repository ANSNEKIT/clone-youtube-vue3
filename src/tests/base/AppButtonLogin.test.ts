import { render } from '@testing-library/vue'
import AppButtonLoginVue from '@/components/base/AppButtonLogin.vue'

it('render', () => {
    const { html } = render(AppButtonLoginVue)

    expect(html()).toMatchSnapshot()
})
