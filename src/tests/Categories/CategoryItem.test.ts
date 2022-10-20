import { render, screen } from '@testing-library/vue'
import CategoryItem from '@/components/Categories/CategoryItem.vue'

const category = 'One very very long longest category'

function renderCategoryItem() {
    const options = {
        props: {
            id: 0,
            category,
        },
    }

    return render(CategoryItem, options)
}

it('render with label and not active', () => {
    renderCategoryItem()

    expect(screen.getByText(category)).not.toHaveClass('!bg-black !text-white')
})

it('render correctly', () => {
    const { html } = renderCategoryItem()

    expect(html()).toMatchSnapshot()
})
