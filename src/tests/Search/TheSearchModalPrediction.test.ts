import { render, screen } from '@testing-library/vue'
import TheSearchModalPrediction from '@/components/Search/TheSearchModalPrediction.vue'
import { fireEvent, waitForElementToBeRemoved } from '@testing-library/dom'
import { Keyword } from '@/types/search'

function renderModal(predictions: Keyword[] = [], categories: string[] = []) {
    const config = {
        props: {
            searchPredictions: predictions,
        },
        data: () => ({ categories }),
    }

    return render(TheSearchModalPrediction, config)
}

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

const categories = [
    'Проявления нетерпимости и призывы к ней',
    'Материалы сексуального характера',
    'Призывы к насилию и проявлению жестокости',
    'Призывы к совершению опасных действий и причинению вреда окружающим',
    'Другое',
]

describe('when open modal', () => {
    it('show search predictions', () => {
        renderModal(predictions)

        predictions.forEach(({ keyword }) => screen.getByText(keyword))
    })

    it('show search categories', () => {
        renderModal([], categories)

        categories.forEach((el) => screen.getByText(el))
    })
})

describe('when closed modal', () => {
    it('does not show search predictions', () => {
        renderModal(predictions)

        fireEvent.click(screen.getByRole('button', { name: 'Отмена' }))

        return waitForElementToBeRemoved(
            predictions.map(({ keyword }) => screen.queryByText(keyword)),
        )
    })

    it('does not show search categories', () => {
        renderModal([], categories)

        fireEvent.click(screen.getByRole('button', { name: 'Отмена' }))

        return waitForElementToBeRemoved(categories.map((el) => screen.queryByText(el)))
    })
})
