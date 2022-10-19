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
        expect(screen.getByLabelText(keyword)).not.toBeChecked()
    })
})

it('shows search predictions checked ', () => {
    renderPredictions(checkedPredictions)

    expect(screen.getByLabelText(predictions[0].keyword)).not.toBeChecked()

    predictions.slice(1).forEach(({ keyword }) => {
        expect(screen.getByLabelText(keyword)).toBeChecked()
    })
})
