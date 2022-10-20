import { render, screen } from '@testing-library/vue'
import AppShadow from '@/components/base/AppShadow.vue'

const opacity = 100

function renderShadow(opacity = 50) {
    const options = {
        props: {
            opacity,
        },
    }
    return render(AppShadow, options)
}

it('render with props opacity', () => {
    renderShadow(opacity)

    expect(screen.getByTestId('app-shadow')).toHaveClass(`opacity-${opacity}`)
})

it('render with opacity 50%', () => {
    const { html } = renderShadow()

    expect(screen.getByTestId('app-shadow')).toHaveClass('opacity-50')
    expect(html()).toMatchInlineSnapshot(
        // eslint-disable-next-line quotes
        `"<div class="fixed inset-0 bg-black z-20 opacity-50" data-testid="app-shadow"></div>"`,
    )
})
