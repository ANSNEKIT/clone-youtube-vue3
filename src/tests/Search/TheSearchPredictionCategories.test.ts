import { render, screen } from '@testing-library/vue'
import TheSearchPredictionCategories from '@/components/Search/TheSearchPredictionCategories.vue'

const categories = ['Category 1', 'Category 2', 'Category 3']
const checkedCategory = categories[0]

function renderCategories(checked = '') {
    const config = {
        props: {
            categories,
            modelValue: checked,
        },
    }

    return render(TheSearchPredictionCategories, config)
}

it('shows search categories unchecked', () => {
    renderCategories()

    categories.forEach((el) => {
        expect(screen.getByLabelText(el)).not.toBeChecked()
    })
})

it('shows search categories checked ', () => {
    renderCategories(checkedCategory)

    expect(screen.getByLabelText(categories[0])).toBeChecked()

    categories.slice(1).forEach((el) => {
        expect(screen.getByLabelText(el)).not.toBeChecked()
    })
})
