import { render, screen } from '@testing-library/vue'
import TheSearchPredictionList from '@/components/Search/TheSearchPredictionList.vue'

const predictions = [
    {
        value: 'value 1',
        similar: 'similar 1',
        keyword: 'keyword 1',
    },
    {
        value: 'value 2',
        similar: 'similar 2',
        keyword: 'keyword 2',
    },
    {
        value: 'value 3',
        similar: 'similar 3',
        keyword: 'keyword 3',
    },
]
const checkedPredictions = ['keyword 2', 'keyword 3']

function renderPredictions(checkedPredictions: string[] = []) {
    const config = {
        props: {
            predictions,
            modelValue: checkedPredictions,
        },
    }

    return render(TheSearchPredictionList, config)
}

it('shows search predictions unchecked', () => {
    renderPredictions()

    predictions.forEach(({ keyword }) => {
        const checkbox = screen.getByLabelText(keyword) as HTMLInputElement
        expect(checkbox.checked).toBe(false)
    })
})

it('shows search predictions checked ', () => {
    renderPredictions(checkedPredictions)

    const checkbox1 = screen.getByLabelText(predictions[0].keyword) as HTMLInputElement
    expect(checkbox1.checked).toBe(false)

    predictions.slice(1).forEach(({ keyword }) => {
        const checkbox = screen.getByLabelText(keyword) as HTMLInputElement
        expect(checkbox.checked).toBe(true)
    })
})
