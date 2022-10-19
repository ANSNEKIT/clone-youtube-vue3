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
        const checkbox = screen.getByLabelText(el) as HTMLInputElement
        expect(checkbox.checked).toBe(false)
    })
})

it('shows search categories checked ', () => {
    renderCategories(checkedCategory)

    const radio1 = screen.getByLabelText(categories[0]) as HTMLInputElement
    expect(radio1.checked).toBe(true)

    categories.slice(1).forEach((el) => {
        const radio = screen.getByLabelText(el) as HTMLInputElement
        expect(radio.checked).toBe(false)
    })
})
